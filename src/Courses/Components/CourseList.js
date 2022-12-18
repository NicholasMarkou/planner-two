import React from 'react';
import "./CourseList.css"

function CourseList(props) {
    return (
        <table>
            <tbody>
                {
                    Array.from(props.courses).map(courseTitle => {
                        return (
                        <tr key={courseTitle} onClick={e => props.handleClick(courseTitle)}>
                            <td>{courseTitle}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CourseList;