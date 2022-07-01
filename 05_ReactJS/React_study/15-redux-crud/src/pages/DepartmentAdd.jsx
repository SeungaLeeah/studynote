import React, { memo } from 'react';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';
// button을 이용해서 NavLink로 이동하는데, useNavigate로 강제 이동하기

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import regexHelper from '../libs/RegexHelper';

import { useSelector, useDispatch } from 'react-redux';
//데이터 조회 기능
import {postItem} from '../slices/DepartmentSlice';

const TableEx= styled(Table)`
  margin-bottom: 15px;

  .inputWrapper{
    padding: 0;
    position: relative;
    text-align: left;

    .field{
      box-sizing: border-box;
      display: block;
      position: absolute;
      left:0;
      top:0;
      width:100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline:none;
      font-size: 14px;
    }
    label{
      margin-left: 7px;
      margin-right: 10px;

      input{
        margin-right: 10px;
      }
    }
  }
`;

const DepartmentAdd = memo(() =>{
      /** 저장 완료 후 목록 강제 이동을 처리하기 위한 navigate 함수 생성 */
    // navigate 리턴받는 자체가 함수인 경우를 클로저라고 한다.
    const navigate = useNavigate();

    /** 리덕스 관련 초기화 */
    // data를 생성하기 때문에 data를 불러올 필요는 없다.
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state)=> state.DepartmentSlice);

  /**<form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onSubmit = React.useCallback((e)=>{
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.target;
    //입력값에 대한 유효성 검사
    try{
        regexHelper.value(current.dname, '학과이름을 입력하세요.');
        regexHelper.kor(current.dname, '학과이름은 한글로만 입력이 가능합니다.');
        regexHelper.minLength(current.dname, 2, '학과이름은 최소 2글자 이상 입력해야합니다.');
        regexHelper.maxLength(current.dname, 20, '학과이름은 최대 20글자 까지 가능합니다.');

        regexHelper.value(current.loc, '학과위치을 입력하세요.');
        regexHelper.minLength(current.loc, 2, '학과위치는 최소 2글자 이상 입력해야합니다.');
        regexHelper.maxLength(current.loc, 20, '학과위치는 최대 20글자 까지 가능합니다.');
    }catch(e){
      window.alert(e.message);
      e.field.focus();
      return;
    }

    // 리덕스(Ajax처리)를 통해 데이터 저장 요청 --> 처리가 완료된 후 목록 페이지로 강제 이동한다.
    // 비동기 처리이기 때문에 리덕스의 함수를 dispatch한 다음에 그에 대한 후속 처리를 한다면 
    // 리덕스 자체가 promise객체이기 때문에 then을 사용해야한다
    dispatch(postItem({
      dname: current.dname.value,
      loc: current.loc.value
    })).then(()=>{    // then 함수를 처리하고 콜백을 넣어야함
      navigate("/");
    });
  },[dispatch, navigate]);

    return (
      <>
       <Spinner visible={loading} /> 
       {error?(
        <ErrorView error={error}/>
       ) :(
        <form onSubmit={onSubmit}>
          <TableEx>
            <colgroup>
              <col width="120"/>
              <col/>
            </colgroup>
            <tbody>
              <tr>
                <th>학과이름</th>
                <td className='inputWrapper'><input className='field' type="text" name="dname" /></td>
              </tr>
              <tr>
                <th>학과위치</th>
                <td className='inputWrapper'><input className='field' type="text" name="loc" /></td>
              </tr>
            </tbody>
          </TableEx>
          <div style={{textAlign: 'center'}}>
            <button type='submit'>저장하기</button>
          </div>
        </form>
       )
      }
      </>
  );
});

export default DepartmentAdd;