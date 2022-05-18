import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Professor = ({props}) => {
  const [loading, setLoading] = useState(false);
  //화면에 표시할 상태값 (ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [professor, setProfessor] = useState([]);


  /** 페이지가 처음 열렸을 때와 검색어가 변경되었을 때 실행할 hook */
  useEffect(()=>{
      //Ajax 로딩 시작을 알림
      setLoading (true);

      setTimeout(()=>{
          (async () =>{
              try{
                  const response = await axios.get(`http://localhost:3001/professor?deptno=${props}`);

                  // 일반 상태값 업데이트
                  // setDepartment(response.data);
                  // 함수형 업데이트
                  setProfessor(professor => response.data);
              }catch(e){
                  console.error(e);
                  alert('Ajax 연동 실패');
              }finally{
                  //Ajax 로딩 종료를 알림
                  setLoading(false);
              }
          })();
      },500);
  },[props]);

  return (
      <table border={1}>
      <Spinner visible={loading}/>
          <thead>
              <tr>
                  <th>교수번호</th>
                  <th>교수이름</th>
                  <th>아이디</th>
                  <th>직급</th>
                  <th>급여</th>
                  <th>입사일</th>
                  <th>보직수당</th>
                  <th>소속학과번호</th>
              </tr>
          </thead>
          <tbody>
              {professor.length>0?(
              professor.map((v,i) =>{
                  return(
               <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.userid}</td>
                  <td>{v.position}</td>
                  <td>{v.sal}</td>
                  <td>{v.hiredate.substring(0,10)}</td>
                  <td>{v.comm}</td>
                  <td>{v.deptno}</td>
            
              </tr>
                  );
              })
            ):(
              <tr>
                <td colSpan={8} align='center'>
                    검색결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
      </table>
  );
};

export default React.memo(Professor);