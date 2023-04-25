import React from 'react';
import "./CourseList.css"

function CourseList(props) {
    return (
        <div className="container-table">
        <table>
            <thead>
                <tr>
                    <th>{props.title}</th>
                </tr>
            </thead>
            <tbody>
                {
                    Array.from(props.courses).map(courseTitle => {
                        let found = false;
                        //console.log(props.selectedSections)
                        for (let i=0;i<props.selectedSections.length;i++) {
                            if (courseTitle.split(' /')[0] === props.selectedSections[i]['Course_Section']) found = true;
                        }
                        if (found) {
                            return (
                                <tr style={{ backgroundColor: 'lightgreen', cursor: 'pointer'}} key={courseTitle} onClick={e => props.handleClick(courseTitle)}>
                                    <td>{courseTitle}</td>
                                </tr>
                            )
                        }
                        else {
                            return (
                                <tr style={{ backgroundColor: '#A9B0B7', cursor: 'pointer'}} key={courseTitle} onClick={e => props.handleClick(courseTitle)}>
                                    <td>{courseTitle}</td>
                                </tr>
                            )
                        }

                    })
                }
            </tbody>
        </table>
        </div>
    )
}

export default CourseList;