import React from "react";
import DepartmentItem from "../components/DepartmentItem";
import MySchool from "../MySchool"
import '../assets/css/department.style.css';

const department = () => {
    return (
    <div>
    <h1>학과 목록</h1>
    <hr />
            <table className="tableStyle" border="1" cellPadding="7">
                    <thead>
                        <tr className="trStyle">
                            <th>학과번호</th>
                            <th>학과이름</th>
                            <th>위치</th>
                        </tr>
                    </thead>
                    <tbody>
                            {MySchool['department'].map((v, i) => {
                            return (<DepartmentItem
                            key={i}
                            id={v.id}
                            dname={v.dname}
                            loc={v.loc} />)
                            })}
                      </tbody>
                </table>
    </div>
    );
    };
    export default department;