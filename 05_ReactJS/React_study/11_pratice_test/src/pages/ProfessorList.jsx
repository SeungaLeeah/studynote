import React,{useState, useEffect} from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

const LinkContainer =styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
`;

const TopLink = styled(NavLink)`
    margin-right: 15px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    &:hover{
        background-color: #06f2;
    }
`;

const ProfessorList = () => {

    /** 화면에 표시할 성적표 데이터를 저장하기 위한 상태 변수 */
    const[info,setInfo] = useState([]);

    /** 백엔드로부터 데이터 불러오기 - 자체 캐시가능 방지함 */
    const [{data, loading1, error}, refetch] = useAxios("http://localhost:3001/professor",{
        useCache:false
    });

    /** axios-hook에 의해 생성된 상태값인 data가 변경되었을 때(ajax 로딩이 완료되었을 때) 실행될 hook */
    useEffect(()=>{
        // ajax의 결과를 화면에 표시하기 위한 상태값에 복사한다.
        setInfo(data);
    },[data]);


    /** 백엔드로 부터 데이터 삭제하기 - 자체 캐시기능 방지, 삭제 버튼 이벤트에 의해 호출되어야 하므로 메뉴얼 실행 모드 */
    const [{loading2}, sendDelete] = useAxios({
        method:'DELETE'
    },{
        useCache:false,
        manual: true
    });

    /**삭제 버튼 클릭시 호출될 이벤트 핸들러 */
    const OnDeleteClick=(e)=>{
        e.preventDefault();

        // 이벤트가 발생한 대상을 가져옴 --> 삭제하기 링크
        const current = e.target;

        // 클릭된 링크에 숨겨져 있는 일련번호와 교수이름 가져오기
        const id = parseInt(current.dataset.id);
        const name = current.dataset.name;

        // 삭제 확인
        if(window.confirm(`정말${name}교수의 정보를 삭제하시겠습니까?`)){
            // 백엔드에 삭제 요쳥하기 -> 입력, 수정, 삭제는 async-await문법으로 처리해야 한다.
            (async()=>{
                let json = null;
                try{
                    const response = await sendDelete({
                        method:'DELETE',
                        url:`http://localhost:3001/professor/${id}`
                    });
                    json = response.data;
                }catch(e) {
                    console.error(e);
                    window.alert(`[${e.response.status}]${e.response.statusText}\n${e.message}`);
                }
                //삭제 결과가 정상이라면?
                if(json != null){
                    //화면에 출력중인 데이터에서 동일한 일련번호를 갖는 항목을 제회한 나머지를 추려낸다.
                    //-> 삭제된 항목 제거
                    setInfo(info => info.filter((v,i)=> v.id !== id));
                }
            })();
        }
    };

  return (
    <div>
        <Spinner visible={loading1||loading2}/>

        <LinkContainer>
            <TopLink to='add'>교수 등록하기</TopLink>
        </LinkContainer>    

        {error ?(
            <div>
                <h1>에러가 났습니다. 원인은 {error.code} Error 입니다.</h1>
                <hr/>
                <p>{error.message}</p>
            </div>
        ):(
            <Table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>직급</th>
                        <th>급여</th>
                        <th>입사일</th>
                        <th>보직수당</th>
                        <th>소속학과번호</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {info && info.map (({id, name, userid, position, sal, hiredate, comm, deptno}, i)=>{
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{userid}</td>
                                <td>{position}</td>
                                <td>{sal}만원</td>
                                <td>{dayjs(hiredate).format('YY/MM/DD')}</td>
                                <td>{comm}만원</td>
                                <td>{deptno}</td>
                                <td>
                                    <NavLink to={`edit/${id}`}>수정하기</NavLink>
                                </td>
                                <td>
                                    <a href="#!" data-id={id} data-name={name}
                                        onClick={OnDeleteClick}>삭제하기</a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        )}
    </div>
  );
};

export default React.memo(ProfessorList);