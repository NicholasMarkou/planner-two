import React, {useState} from "react";
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import moment from "moment/moment";
import {Link, useLocation} from "react-router-dom";
import '../CalendarView/CalendarView.css'



function CalendarView(props) {

    const location = useLocation()
    let resData = {
        'A Term': [],
        'B Term': [],
        'C Term': [],
        'D Term': [],
    };
    location.state.forEach( e => {
        console.log(e)
        try {
            let str = e.Meeting_Patterns.split(' | ')[1];
            let startTime = str.split(' -')[0]
            let endTime = str.split('- ')[1]
            if (e.Starting_Academic_Period_Type in resData) {
                resData[e.Starting_Academic_Period_Type].push({
                    start: moment(startTime, ['h:m a', 'H:m']),
                    end: moment(endTime, ['h:m a', 'H:m']),
                    value: e.Course_Title.split(' -')[0]
                })
            }
        }
        catch (e) {}

    })
    const [selectedData, setSelectedData] = useState({sections: resData});
    //console.log(location.state);

    return (
        <div className="parentCalendar">
            <div className="childCalendar">
                <h5>A Term</h5>
                <WeekCalendar
                numberOfDays={5}
                dayFormat={'dddd'}
                startTime={	moment({h: 8, m: 0})}
                endTime={moment({h: 18, m: 0})}
                scaleUnit={60}
                scaleFormat={"hh:mm a"}
                cellHeight={60}
                selectedIntervals={selectedData.sections['A Term']}
            ></WeekCalendar>
            </div>
            <div className="childCalendar">
                <h5>B Term</h5>
                <WeekCalendar
                    numberOfDays={5}
                    dayFormat={'dddd'}
                    startTime={	moment({h: 8, m: 0})}
                    endTime={moment({h: 18, m: 0})}
                    scaleUnit={60}
                    scaleFormat={"hh:mm a"}
                    cellHeight={60}
                    selectedIntervals={selectedData.sections['B Term']}
                ></WeekCalendar>
            </div>
            <div className="childCalendar">
                <h5>C Term</h5>
                <WeekCalendar
                    numberOfDays={5}
                    dayFormat={'dddd'}
                    startTime={	moment({h: 8, m: 0})}
                    endTime={moment({h: 18, m: 0})}
                    scaleUnit={60}
                    scaleFormat={"hh:mm a"}
                    cellHeight={60}
                    selectedIntervals={selectedData.sections['C Term']}
                ></WeekCalendar>
            </div>
            <div className="childCalendar">
                <h5>D Term</h5>
                <WeekCalendar
                    numberOfDays={5}
                    dayFormat={'dddd'}
                    startTime={	moment({h: 8, m: 0})}
                    endTime={moment({h: 18, m: 0})}
                    scaleUnit={60}
                    scaleFormat={"hh:mm a"}
                    cellHeight={60}
                    selectedIntervals={selectedData.sections['D Term']}
                ></WeekCalendar>
            </div>
            <Link className="link-course" to={{pathname: `/`}}>Return to Courses</Link>
        </div>


    )
}

export default CalendarView;