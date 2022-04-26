import React from "react";
import PropTypes from 'prop-types';

const DepartmentItem = ({id, dname, loc}) => {
    return (
        <tr align="center">
            <td><strong>{id}</strong></td>
            <td><strong>{dname}</strong></td>
            <td>{loc}</td>
        </tr>);
    };
    DepartmentItem.propTypes = {
        id: PropTypes.number.isRequired,
        dname: PropTypes.string.isRequired
    };
    DepartmentItem.defaultProps = {
        loc: 0
    };
export default DepartmentItem;