import React, {useState} from "react"
import DepartmentList from "./Components/DepartmentList";
import CourseList from "./Components/CourseList";
import DescriptionPanel from "./Components/DescriptionPanel";

function CoursesPage(props) {

    const [currentSelect, setCurrentSelect] = useState({});

    const onDeptChange = e => {
        setCurrentSelect({...currentSelect, department: e.target.value});
    }

    const onCourseSelect = title => {
        setCurrentSelect({...currentSelect, course: title})
    }

    return (
        props.data ?
            <div className="course-panel">
                <DepartmentList departments={new Set(props.data.map(e => e.Subject))} handleSelect={onDeptChange} />
                <CourseList courses={new Set(props.data.filter(e => e.Subject === currentSelect.department).map(e => e.Course_Title))} handleClick={onCourseSelect}/>
                <DescriptionPanel courseData={props.data.find( course => course.Course_Title === currentSelect.course)}/>
            </div>
            : <h1 style={{textAlign:"center"}}>Loading...</h1>
    )
}

export default CoursesPage;