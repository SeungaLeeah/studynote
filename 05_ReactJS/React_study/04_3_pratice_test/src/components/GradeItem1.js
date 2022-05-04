import React from 'react';
import PropTypes from 'prop-types';

const GradeItem1 = ({name, gender, kor, eng, math, sinc}) => {
const sum = parseInt(kor + eng + math + sinc);
const avg = parseInt(sum / 4);
    return (
        <tr align="center">
            <td><strong>{name}</strong></td>
            <td>{gender}</td>
            <td>{kor}</td>
            <td>{eng}</td>
            <td>{math}</td>
            <td>{sinc}</td>
            <td><strong>{sum}</strong></td>
            <td><strong>{avg}</strong></td>
        </tr>);
        };
        GradeItem1.propTypes = {
            name: PropTypes.string.isRequired,
            gender: PropTypes.string.isRequired,
            kor:PropTypes.number.isRequired,
            eng:PropTypes.number.isRequired,
            math:PropTypes.number.isRequired,
            sinc:PropTypes.number.isRequired
        };
        GradeItem1.defaultProps = {
            kor: 0,
            eng: 0,
            math: 0,
            sinc: 0
};
export default GradeItem1;