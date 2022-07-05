import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate} from 'react-router-dom';
// button을 이용해서 NavLink로 이동하는데, useNavigate로 강제 이동하기


import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import { useSelector, useDispatch } from 'react-redux';
//목록 조회, 즉시 삭제 기능
import {getList, deleteItem} from '../slices/DepartmentSlice';

const LinkContainer= styled.div`
  position: sticky;
  top:0;
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

const DepartmentList = memo(() => {
    /** 저장 완료 후 목록 강제 이동을 처리하기 위한 navigate 함수 생성 */
    // navigate 리턴받는 자체가 함수인 경우를 클로저라고 한다.
    const navigate = useNavigate();

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=> state.DepartmentSlice);

    /** 페이지 마운트와 동시에 실행되는 hook -> 리덕스를 통해 getList를 통해 data 값을 가져와서 목록을 조회한다 */
    React.useEffect(()=>{
        dispatch(getList());
    },[dispatch]);

    /** 수정 버튼 클릭 이벤트 처리 --> 수정 페이지로 이동. 수정 대상에 대한 id를 path 파라미터로 전달함 */
    const onEditClick = e =>{
        e.preventDefault();
        const current = e.target;
        const id = current.dataset.id;  // 숨겨놓은 data-id 값을 가져오라는 의미
        navigate(`/department_edit/${id}`);
    };

    /** 삭제 버튼 클릭시 이벤트 처리 --> 리덕스를 통해 삭제 처리 --> data 값이 갱신 되므로 화면에 자동 반영된다. */
    const onDeleteClick =e =>{
        e.preventDefault();

        const current = e.target;
        
        if(window.confirm(`정말 ${current.dataset.dname}(을)를 삭제하시겠습니까?`)){
            dispatch(deleteItem({
                id:current.dataset.id
            }));
        }
    };

    return (
        <div>
            <Spinner visible={loading}/>

            <LinkContainer>
                <TopLink to="department_add">학과정보 추가하기</TopLink>
            </LinkContainer>
        
        {error ?(
            <ErrorView error={error}/>
            /* data가 있을 때만 표시하기 */
        ) : data && (
                <Table>
                    <thead>
                        <tr>
                            <th>학과번호</th>
                            <th>학과명</th>
                            <th>학과위치</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* data.length가 0보다 크다면, data로 반복문 돌기 */}
                        {data.length > 0 ?(
                            data.map((item, index)=>{
                                return(
                                    <tr key={item.id}>
                                        {/* 데이터를 텍스트로 출력 */}
                                        <td>{item.id}</td>
                                        <td>{item.dname}</td>
                                        <td>{item.loc}</td>
                                        <td>
                                            {/* data-id로 일련번호 숨겨놓기 -어떤항목을 수정할지 */}
                                            <button type='button' data-id={item.id}
                                            onClick={onEditClick}>
                                                수정하기
                                            </button>
                                        </td>
                                        <td>
                                            {/* data-id로 일련번호 숨겨놓기 -어떤항목을 삭제할지 */}
                                            <button type='button' data-id={item.id}
                                            /*  data-dname은 정말 이걸 삭제하는지 물어보기 위해 숨겨놓기 */
                                            data-dname={item.dname} onClick={onDeleteClick}>
                                                삭제하기
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) :(
                            <tr>
                                <td colSpan='5' align='center'>
                                    검색결과가 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>    
                </Table>
            )}
        
        </div>
    );
});

export default DepartmentList;