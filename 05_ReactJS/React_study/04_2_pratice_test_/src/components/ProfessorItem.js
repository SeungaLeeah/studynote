import React from "react";
import PropTypes from 'prop-types';

const ProfessorItem = ({id, name, userid, position, sal, hiredate, comm, deptno}) => {
    return (
        <tr align="center">
            <td><strong>{id}</strong></td>
            <td><strong>{name}</strong></td>
            <td>{userid}</td>
            <td>{position}</td>
            <td>{sal}</td>
            <td>{hiredate}</td>
            <td>{comm}</td>
            <td><strong>{deptno}</strong></td>
        </tr>);
    };
    ProfessorItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    deptno: PropTypes.number.isRequired
    };
    ProfessorItem.defaultProps = {
    userid: 0,
    position: 0,
    sal: 0,
    hiredate: 0,
    comm: 0
    };
    export default ProfessorItem;