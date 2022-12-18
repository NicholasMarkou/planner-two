import React from 'react';
import "./DescriptionPanel.css"

function courseChosen(courseData) {
    return (
        <div className="description-body">
            <h5 className="description-title">{courseData.Course_Title}</h5>
            <p>{courseData.Course_Description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        </div>
    )
}


function DescriptionPanel(props) {
    return (
        <div>
            {
                props.courseData ? courseChosen(props.courseData): <p>No Data</p>
            }
        </div>
    )
}

export default DescriptionPanel;