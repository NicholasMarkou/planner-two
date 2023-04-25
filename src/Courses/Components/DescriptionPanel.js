import React from 'react';
import "./DescriptionPanel.css"
import chart from '../../barchart_ver_1.jpg';

function courseChosen(courseData) {
    return (
        <div className="description-body">
            <h5 className="description-title">{courseData.Course_Title}</h5>
            <div dangerouslySetInnerHTML={{ __html: courseData.Course_Description }} />
        </div>
    )
}


function DescriptionPanel(props) {
    return (
        <div className="description-block">
            <div>
                {
                    props.courseData ? courseChosen(props.courseData): <p>No Data</p>
                }
            </div>
            <h4>Course Ratings</h4>
            <img src={chart}/>
            <h4>Tracking Sheet</h4>
            <p>This course counts for your tracking sheet.</p>
        </div>

    )
}

export default DescriptionPanel;