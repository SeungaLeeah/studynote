import React from 'react';
import PropTypes from 'prop-types';


const GradeItem = ({name, grade, gender,kor,eng,math,science})=>{
    const sum= parseInt(kor+eng+math+science)
    const avg = parseInt(sum/4)
 
    return(
        <tr align="center">
            <td><strong>{name}</strong></td>
            <td><strong>{grade}</strong></td>
            <td><strong>{gender}</strong></td>
            <td><strong>{kor}</strong></td>
            <td><strong>{eng}</strong></td>
            <td><strong>{math}</strong></td>
            <td><strong>{science}</strong></td>
            <td><strong>{sum}</strong></td>
            <td><strong>{avg}</strong></td>
        </tr>
    );
           
};
// 속성들에 대한 타입 정의
GradeItem.prototype ={
    name: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
};

// 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
GradeItem.defaultProps ={
    kor: 0,
    eng:0,
    math:0,
    science:0
};

export default GradeItem;