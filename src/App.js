import './App.css';
import {useEffect, useState} from "react";
import CoursesPage from "./Courses/CoursesPage";

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
              <h1>Planner 2</h1>
              <p>Developed by Nicholas Markou</p>
          </header>
          <CoursesPage data={jsonData} />
      </div>
  );
}

export default App;
