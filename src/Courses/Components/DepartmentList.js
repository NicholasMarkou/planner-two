import React from 'react';
import "./DepartmentList.css"

function DepartmentList(props) {

    return (
        <div className="dept-list">
            <select className="dept-select" onChange={props.handleSelect} multiple>
                {
                    Array.from(props.departments).map( e => <option value={e} label={e} key={e}/>)
                }
            </select>
        </div>
    )
}

export default DepartmentList;