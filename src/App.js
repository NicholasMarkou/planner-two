import './App.css';
import {useEffect, useState} from "react";
import CoursesPage from "./Courses/CoursesPage";
import CalendarView from "./CalendarView/CalendarView";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
    const [jsonData, setJsonData] = useState([]);

    useEffect( () => {
        //fetch('https://courselistings.wpi.edu/assets/prod-data.json')
        fetch('./prod-data.json')
            .then(data => data.json())
            .then(data => {
                setJsonData(data.Report_Entry)
            })
    }, []);

  return (
      <div className="App">
          <header className="App-header">
              <h1>WPI Course Planner and Scheduler</h1>
          </header>
          <Router>
              <Routes>
                  <Route path="/" element={<CoursesPage data={jsonData} />} />
                  <Route path="/calendar" element={<CalendarView />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
