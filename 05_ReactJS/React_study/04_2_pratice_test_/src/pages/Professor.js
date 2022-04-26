import React from "react";
import ProfessorItem from "../components/ProfessorItem";
import MySchool from "../MySchool"

import '../assets/css/professor.style.css';

const professor = () => {
    return (
    <div>
    <h1>교수 목록</h1>
    <hr />
        <table className="proTable" border="1" cellPadding="7">
            <thead>
                    <tr className="proTr">
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
                {MySchool['professor'].map((v, i) => {
                return (<ProfessorItem
                        key={i}
                        id={v.id}
                        name={v.name}
                        userid={v.userid}
                        position={v.position}
                        sal={v.sal}
                        hiredate={v.hiredate.substring(0,10)}
                        comm={v.comm}
                        deptno={v.deptno} />)
                })}
            </tbody>
        </table>
    </div>
    );
    };
    export default professor;