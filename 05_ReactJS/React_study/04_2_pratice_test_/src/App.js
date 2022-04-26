import React from "react";
import {NavLink, Routes, Route} from "react-router-dom"
import Student from "./pages/Student"
import Department from "./pages/Department";
import Professor from './pages/Professor'

import './assets/css/menu.css';


const App = () => {
    const myStyle={
        fontWeight: 'bold',
        fontSize: '40px',
        borderBottom: '2px solid #1A6DED'
    }
  return (
        <div>
            <h1 style={myStyle}>대학 목록</h1>
            <nav>
                <NavLink className="mainLink" to="/department">학과목록</NavLink>&nbsp;|&nbsp;
                <NavLink className="mainLink" to="/professor">교수목록</NavLink>&nbsp;|&nbsp;
                <NavLink className="mainLink" to="/student">학생목록</NavLink>
            </nav>
            <hr />
            <Routes>
                <Route path="/department" element={<Department/>} />
                <Route path="/professor" element={<Professor/>} />
                <Route path="/student" element={<Student/>} />
            </Routes>
        </div>
  );
};
export default App;
