import React, { memo, useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import useAxios from 'axios-hooks';
// button을 이용해서 NavLink로 이동하는데, useNavigate로 강제 이동하기
// App.js에 있는 :id는 path파라미터 받아오기 위한 useParams를 사용

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';

import regexHelper from '../libs/RegexHelper';

import { useSelector, useDispatch } from 'react-redux';
//데이터 조회, 수정 기능
import {putItem} from '../slices/ProfessorSlice';


const ProfessorEdit = memo(() =>{
  /** Path 파라미터에 포함된 id값 획득하기 */
  const {profno} = useParams();

  /** 데이터 수정 후 목록 페이지로 강제 이동하기 위한 함수 생성 */
  const navigate = useNavigate();

    /** 학과설정을 위한 데이터 불러오기 */
    const [{data:department}] = useAxios("http://localhost:3002/department");

  /** 리덕스 초기화 */
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state)=>state.ProfessorSlice); 
  const [ origin, setOrigin ] = useState({
    name: '',
    userid: '',
    position: '',
    sal:'',
    hiredate:'',
    comm:''
  });

  /** 페이지가 열림과 동시에 id값에 대한 데이터를 조회하여 리덕스 상태값에 반영한다. */
  useEffect(()=>{
    const index = data.item.findIndex(e=> e.profno === parseInt(profno));

    setOrigin({
      name: data.item[index].name,
      userid: data.item[index].userid,
      position: data.item[index].position,
      sal: data.item[index].sal,
      hiredate: data.item[index].hiredate,
      comm: data.item[index].comm,
      deptno: data.item[index].deptno,
    })
  },[data, profno]);

  /**<form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onSubmit = React.useCallback((e)=>{
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.target;
    //입력값에 대한 유효성 검사
    try{
      regexHelper.value(current.name, '교수 이름이 없습니다.');

      regexHelper.value(current.userid, '교수 아이디가 없습니다.');
      regexHelper.minLength(current.userid, 4, '학과이름은 최소 4글자 이상 입력해야 합니다.');
      regexHelper.maxLength(current.userid, 10, '학과이름은 최대 10글자 까지 입력 가능합니다.');

      regexHelper.value(current.position, '교수 직급을 선택해주세요.');

      regexHelper.value(current.sal, '교수 급여가 없습니다.');

      regexHelper.value(current.hiredate, '교수 입사일을 선택해주세요.');

      regexHelper.value(current.comm, '교수 보직수당 없습니다.');

      regexHelper.value(current.deptno, '부서번호가 없습니다.');
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
      profno:profno,
      name: current.name.value,
      userid: current.userid.value,
      position: current.position.value,
      sal: current.sal.value,
      hiredate: current.hiredate.value,
      comm: current.comm.value,
      deptno: current.deptno.value
    })).then(()=>{    // then 함수를 처리하고 콜백을 넣어야함
      navigate("/");
    });
  },[dispatch, profno, navigate]);


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
                <th>교수 이름</th>
                <td className='inputWrapper'><input className='field' type="text" 
                name="name" defaultValue={origin.name} /></td>
                {/* 비동기 처리로 화면에 먼저 출력이 될 수 있음으로 data가 있는지 확인하고 data가 있다면 name을 실행 */}
              </tr>
              <tr>
                <th>교수 아이디</th>
                <td className='inputWrapper'><input className='field' type="text" 
                name="userid" defaultValue={origin.userid} /></td>
                {/* 비동기 처리로 화면에 먼저 출력이 될 수 있음으로 data가 있는지 확인하고 data가 있다면 userid을 실행 */}
              </tr>
              <tr>
                <th>교수 직급</th>
                  <td className='inputWrapper' defaultValue={origin.position} >
                      <select name="position" className='field'>
                          <option value="">선택안함</option>
                          <option value="교수">교수</option>
                          <option value="조교수">조교수</option>
                          <option value="부교수">부교수</option>
                          <option value="전임강사">전임강사</option>
                      </select>
                  </td>
                {/* 비동기 처리로 화면에 먼저 출력이 될 수 있음으로 data가 있는지 확인하고 data가 있다면 position을 실행 */}
              </tr>
              <tr>
                <th>교수 급여</th>
                <td className='inputWrapper'><input className='field' type="text" 
                name="sal" defaultValue={origin.sal} /></td>
                {/* 비동기 처리로 화면에 먼저 출력이 될 수 있음으로 data가 있는지 확인하고 data가 있다면 sal을 실행 */}
              </tr>
              <tr>
                <th>교수 입사일</th>
                <td className='inputWrapper'>
                <input className='field' type='date' name='hiredate' defaultValue={origin.hiredate}/> 
                </td>
                {/* 비동기 처리로 화면에 먼저 출력이 될 수 있음으로 data가 있는지 확인하고 data가 있다면 hiredate을 실행 */}
              </tr>
              <tr>
                <th>보직수당</th>
                <td className='inputWrapper'><input className='field' type="text" 
                name="comm" defaultValue={origin.comm} /></td>
                {/* 비동기 처리로 화면에 먼저 출력이 될 수 있음으로 data가 있는지 확인하고 data가 있다면 comm을 실행 */}
              </tr>
              <tr>
                  <th>소속학과</th>
                  <td className='inputWrapper'>
                      <select name='deptno' className='field'>
                          <option value="">----선택하기----</option>
                          {department && department.map((v,i)=>{
                          return(
                              <option key={i} value={v.id}>{v.dname}</option>    
                          )
                          })}
                      </select>    
                  </td>
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

export default ProfessorEdit;