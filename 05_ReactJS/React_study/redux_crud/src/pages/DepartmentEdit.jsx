import React, { memo, useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
// button을 이용해서 NavLink로 이동하는데, useNavigate로 강제 이동하기
// App.js에 있는 :id는 path파라미터 받아오기 위한 useParams를 사용

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';

import regexHelper from '../libs/RegexHelper';

import { useSelector, useDispatch } from 'react-redux';
//데이터 조회, 수정 기능
import {putItem} from '../slices/DepartmentSlice';


const DepartmentEdit = memo(() =>{
  /** Path 파라미터에 포함된 id값 획득하기 */
  const {deptno} = useParams();

  /** 데이터 수정 후 목록 페이지로 강제 이동하기 위한 함수 생성 */
  const navigate = useNavigate();

  /** 리덕스 초기화 */
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state)=>state.DepartmentSlice); 
  const [ origin, setOrigin ] = useState({
    dname: '',
    loc: ''
  });

  /** 페이지가 열림과 동시에 id값에 대한 데이터를 조회하여 리덕스 상태값에 반영한다. */
  useEffect(()=>{
    const index = data.item.findIndex(e=> e.deptno === parseInt(deptno));

    setOrigin({
      dname: data.item[index].dname,
      loc: data.item[index].loc
    })
  },[data, deptno]);

  /**<form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onSubmit = React.useCallback((e)=>{
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.target;
    //입력값에 대한 유효성 검사
    try{
        regexHelper.value(current.dname, '학과이름을 입력하세요.');
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

    // 리덕스(Ajax처리)를 통한 상태값 갱신 --> 처리가 완료된 후 목록 페이지로 강제 이동한다.
    // 비동기 처리이기 때문에 리덕스의 함수를 dispatch한 다음에 그에 대한 후속 처리를 한다면 
    // 리덕스 자체가 promise객체이기 때문에 then을 사용해야한다
    dispatch(putItem({
      // id는 path파라미터로 받아놓은 값이 있기 때문에 그냥 사용해도 됨
      deptno:deptno,
      dname: current.dname.value,
      loc: current.loc.value
    })).then(()=>{    // then 함수를 처리하고 콜백을 넣어야함
      navigate("/");
    });
  },[dispatch, deptno, navigate]);


    return (
      <>
        <Spinner visible={loading}/>

        {error?(
          <ErrorView error={error}/>
        ) : (
          /* form 태그를 눌렀을 때 실행될 이벤트 핸들러 */
          <form onSubmit={onSubmit}>
             <TableEx>
            <colgroup>
              <col width="120"/>
              <col/>
            </colgroup>
            <tbody>
              <tr>
                <th>학과이름</th>
                <td className='inputWrapper'><input className='field' type="text" 
                name="dname" defaultValue={origin.dname} />
          {/* 비동기 처리로 화면에 먼저 출력이 될 수 있음으로 data가 있는지 확인하고 data가 있다면 loc을 실행 */}

                </td>
              </tr>
              <tr>
                <th>학과위치</th>
                <td className='inputWrapper'><input className='field' type="text" 
                name="loc" defaultValue={origin.loc} /></td>
          {/* 비동기 처리로 화면에 먼저 출력이 될 수 있음으로 data가 있는지 확인하고 data가 있다면 loc을 실행 */}
              </tr>
            </tbody>
          </TableEx>
          <div style={{textAlign: 'center'}}>
            <button type='submit'>수정하기</button>
          </div>
          </form>
        )}
      </>
  );
});

export default DepartmentEdit;