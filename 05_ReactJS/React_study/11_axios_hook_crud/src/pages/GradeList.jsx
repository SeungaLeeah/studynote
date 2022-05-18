import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';


// 버튼처럼 구현하기 위한 LinkContainer 스타일 속성 추가
const LinkContainer = styled.div`
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
    color: #000;
    text-decoration: none;

    &:hover{
        background-color: #06f2;
    }
`;
 
const GradeList = () => {
    /** 화면에 표시할 성적표 데이터를 저장하기 위한 상태 변수 */
    const [grade, setGrade]  = React.useState([]);

    /** 백엔드로 부터 데이터 불러오기 -자체 캐시기능을 방지함 */
    //cache는 이전 상태를 기억하고 있다가. 새로고침을 해야 새로 저장한 값을 불러오는데, useCaches:false는 새로운 데이더를 벡앤드에 보내 바로 불러옴
    const [{data, loading1, error}, refetch] = useAxios("http://localhost:3001/grade",{
        useCache: false
    });
    /** axios-hook에 의해 생성된 상태값인 data가 변경되었을 때 (ajax 로딩이 완료되었을 때) 실행될 hook */
    /* data는 직접적으로 건들지 못함으로, useEffect에 상태값을 복사하여, grade에 전달함 */
    React.useEffect(()=>{
        //ajax의 결과를 화면에 표시하기 위한 상태값에 복사힌디.
        setGrade(data);
    },[data]);

    /** 백엔드로 부터 데이터 삭제하기 - 자체 캐시기능 방지, 삭제 버튼 이벤트에 의해 호출되어야 하므로 메뉴얼 실행모드 */
    /**URL 지정을 안함 -> 내가 삭제하고자 하는 항목에 따라서 주소가 매번 바뀌어야하기 때문에 지정하지 않음=> 
     * 또한, refetch 함수가 이름이 겹침으로 sendDelete로 이름을 변경해줌.  
     * manual:true는 수동으로 전달해줌. => 무조건 sendDelete를 호출해서 수동으로 전송해줌
     * 삭제는 error는 async await를 걸어서 try catch 문법으로 받아야함.
    */
    const [{loading2}, sendDelete] = useAxios({
        method:'DELETE'
    },{
        useCache: false,
        manual:true
    });

    /** 삭제버튼 클릭시 호출될 이벤트 핸들러 */
    const onDeleteClick=(e)=>{
        e.preventDefault();

        //이벤트가 발생한 대상을 가져옴 --> 삭제하기 링크
        const current = e.target;

        //클릭된 링크에 숨겨져 있는 일련번화와 학생이름 가져오기
        const id = parseInt(current.dataset.id);
        const name = current.dataset.name;

        //삭제확인
        if(window.confirm(`정말 ${name}학생의 성적을 삭제하시겠습니까?`)){
            // confirm는 조건을 뿌려서 누르면 조건이 참이 되게 하는 기능!!! 
            //=> 리액트에서는 alert이나 confirm 사용시 window를 꼭 써야함
            // 백엔드에 삭제 요청하기 -> 입력, 수정, 삭제는 async-await 문법으로 처리해야 한다.
            (async()=>{
                let json = null;
                try{
                    const response = await sendDelete({ /* sendDelete 호출 */
                        method: 'DELETE',
                        url: `http://localhost:3001/grade/${id}`
                    });
                    json = response.data; /* 삭제는 문제 없으면 { } 빈 문자열만 나오고 끝남 */
                }catch(e){
                    console.error(e);
                    window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
                }
                //삭제하기 경과가 정상이라면?
                if(json!=null){
                    //화면에 출력중인 데이터에서 동일한 일련번호를 갖는 항목을 제외한 나머지를 추려낸다.
                    //--> 삭제된 항목 제거
                    setGrade(grade => grade.filter((v,i) => v.id !== id));
                    // filter => 성적표의 일련번화와 사용자가 삭제하겠다고 한 일련번화와 갖지 않을 것들을 filter 처리한다.
                }
            })();
        }
    };

  return (
    <div>
        <Spinner visible={loading1 || loading2}/>

        <LinkContainer>
            <TopLink to="add">성적 추가하기</TopLink>
        </LinkContainer>

        {error?(
            <div>
                <h1>Oops~!! {error.code} Error.</h1>
                <hr/>
                <p>{error.message}</p>
            </div>
        ):(
            <Table>
                <thead>
                    <tr>
                        <th rowSpan="2">No.</th>
                        <th rowSpan="2">이름</th>
                        <th rowSpan="2">학년</th>
                        <th rowSpan="2">성별</th>
                        <th rowSpan="2">과목별 점수</th>
                        <th colSpan="2">집계</th>
                        <th colSpan='2' rowSpan="2">수정/삭제</th>
                    </tr>
                    <tr>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>과학</th>
                        <th>총점</th>
                        <th>평균</th>
                    </tr>
                </thead>
                <tbody>
                    {grade && grade.map(({id, name, level, sex, kor, eng, math, sin},i)=>{
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{level}</td>
                                <td>{sex}</td>
                                <td>{kor}</td>
                                <td>{eng}</td>
                                <td>{math}</td>
                                <td>{sin}</td>
                                <td>{kor+eng+math+sin}</td>
                                <td>{(kor+eng+math+sin)/4}</td>
                                <td>
                                    <NavLink to={`edit/${id}`}>수정하기</NavLink>{/* edit 뒤에 id 파라미터를 붙여서 수정하기 */}
                                </td>
                                <td>
                                    <a href='#!' data-id={id} data-name={name}
                                    onClick={onDeleteClick}>삭제하기</a>{/* click된 항목의 일련번호와 이름을을 뽑아온다 */}
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

export default GradeList;