import React from 'react';
import PropTypes from 'prop-types';

const StudentItem = ({id, name, userid, grade, idnum, birthdate, tel, height, weight, deptno, profno}) => {
    return (
        <tr align="center">
            <td><strong>{id}</strong></td>
            <td><strong>{name}</strong></td>
            <td>{userid}</td>
            <td>{grade}</td>
            <td>{idnum}</td>
            <td>{birthdate}</td>
            <td>{tel}</td>
            <td>{height}</td>
            <td>{weight}</td>
            <td><strong>{deptno}</strong></td>
            <td><strong>{profno}</strong></td>
        </tr>);
    };
    StudentItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    deptno: PropTypes.number.isRequired,

    };
    StudentItem.defaultProps = {
    userid: 0,
    grade: 0,
    idnum: 0,
    birthdate: 0,
    tel: 0,
    height: 0,
    weight: 0,
    profno:0 
    };
    export default StudentItem;