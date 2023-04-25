import React, {useState} from "react"
import DepartmentList from "./Components/DepartmentList";
import CourseList from "./Components/CourseList";
import DescriptionPanel from "./Components/DescriptionPanel";
import CalendarView from "../CalendarView/CalendarView";
import "./CoursePage.css"
import {Link} from "react-router-dom";

function CoursesPage(props) {

    const [currentSelect, setCurrentSelect] = useState({department: []});
    const [sections, setSections] = useState({sections: []});
    const [sectionData, setSectionData] = useState({sectionData: []})
    const [filterPrompt, setFilterPrompt] = useState("")

    const onDeptChange = e => {
        setCurrentSelect({...currentSelect, department: Array.from(e.target.selectedOptions).map(e => e.value)});
    }

    const onCourseSelect = title => {
        let data = props.data.filter(e => e.Course_Title == title && !e.Course_Section.includes('Interest List'))
        let sectionText = data.map(e => {
            return e.Course_Section + " / "+ e.Meeting_Patterns +" / "+e.Instructors
        })
        //console.log(data)

        setSections({sections:sectionText})
        setCurrentSelect({...currentSelect, course: title})
    }

    const onSectionSelect = section => {
        let data = props.data.filter(e => {
            return e.Course_Section + " / "+ e.Meeting_Patterns +" / "+e.Instructors === section
        })
        let index = sectionData.sectionData.indexOf(data[0]);
        if (index > -1) {
            let arr = sectionData.sectionData;
            let newList = arr.splice(index,1);
            setSectionData({sectionData: arr});
        }
        else setSectionData({sectionData: Array.from(new Set(data.concat(sectionData.sectionData)))});
        //console.log(sectionData.sectionData)
    }

    const onFitlerClick = filter => {
        let profInput = prompt("Enter Professor Name, or cancel to remove filter");
        if (profInput === null) profInput=""
        setFilterPrompt(profInput);
    }

    return (
        props.data ?
            <div className="course-panel">
                    <DepartmentList departments={new Set(props.data.map(e => e.Subject))} handleSelect={onDeptChange} />
                    <CourseList title={"Courses"} selectedSections={[]} courses={new Set(props.data.filter(e => currentSelect.department.includes(e.Subject) && e.Instructors.includes(filterPrompt)).map(e => e.Course_Title))} handleClick={onCourseSelect}/>
                    <CourseList title={"Sections"} courses={sections.sections.filter(e => e.includes(filterPrompt))} handleClick={onSectionSelect} selectedSections={sectionData.sectionData} />
                    <DescriptionPanel courseData={props.data.find( course => course.Course_Title === currentSelect.course)}/>
                        <Link className="link-schedule"to={{pathname: `/calendar`}} state={sectionData.sectionData}>Schedule</Link>
                        <a className="link-schedule" onClick={onFitlerClick}>Filter</a>
                        <a className="link-schedule" href="https://www.wpi.edu/sites/default/files/inline-image/Offices/Academic-Advising/CS%202025_1.pdf">Export Tracking Sheet (WIP)</a>

            </div>
            : <h1 style={{textAlign:"center"}}>Loading...</h1>
    )
}

export default CoursesPage;