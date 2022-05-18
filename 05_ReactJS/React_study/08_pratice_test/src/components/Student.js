import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';


const Student = ({props}) =>{
    //현재 ajax가 데이터 로딩중인지를 의미하는 상태값
    const [loading, setLoading] = useState(false);
    //화면에 표시할 상태값 (ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
    const [student, setStudent] = useState([]);


    /** 페이지가 처음 열렸을 때와 검색어가 변경되었을 때 실행할 hook */
    useEffect(()=>{
        //Ajax 로딩 시작을 알림
        setLoading (true);

        setTimeout(()=>{
            (async () =>{
                try{
                    const response = await axios.get(`http://localhost:3001/student?deptno=${props}`);

                    // 일반 상태값 업데이트
                    // setDepartment(response.data);
                    // 함수형 업데이트
                    setStudent(student => response.data);
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
    <table border='1'>
        <Spinner visible={loading}/>
        <thead>
            <tr>
                <th>학생번호</th>
                <th>학생이름</th>
                <th>학년</th>
                <th>아이디</th>
                <th>주민번호</th>
                <th>생년월일</th>
                <th>연락처</th>
                <th>키</th>
                <th>몸무게</th>
                <th>소속학과번호</th>
                <th>담당교수번호</th>
            </tr>
        </thead>
        <tbody>
        {student.length>0?(
        student.map((v, i) => {
            return(
                <tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.name}</td>
                    <td>{v.userid}</td>
                    <td>{v.grade}</td>
                    <td>{v.idnum.substring(0,6)}-*******</td>
                    <td>{v.birthdate.substring(0,10)}</td>
                    <td>{v.tel}</td>
                    <td>{v.height}</td>
                    <td>{v.weight}</td>
                    <td>{v.deptno}</td>
                    <td>{v.profno}</td>
                </tr>
            );
        })  
            ):(
                <tr>
                    <td colSpan={11} align='center'>
                        검색결과가 없습니다.
                    </td>
                </tr>
            )}
        </tbody>
        </table>
  );
};

export default React.memo(Student);