import React from 'react';
import "./DepartmentList.css"

function DepartmentList(props) {

    return (
        <div className="dept-list">
            <p>Departments: </p>
            <select className="dept-select" onChange={props.handleSelect}>
                {
                    Array.from(props.departments).map( e => <option value={e} label={e} key={e}/>)
                }
            </select>
        </div>
    )
}

export default DepartmentList;