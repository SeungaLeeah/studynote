import React from 'react'
import {Routes, Route } from "react-router-dom";

import ProfessorAdd from './pages/ProfessorAdd';
import ProfessorEdit from './pages/ProfessorEdit';
import ProfessorList from './pages/ProfessorList'

const App = () => {
  return (
    <div>
        <h1>11-Axios-Hooks-CRUD</h1>
        <Routes>
            <Route path="/" exapt={true} element={<ProfessorList/>}/>
            <Route path="/add" element={<ProfessorAdd/>}/>
            <Route path="/edit/:id" element={<ProfessorEdit/>}/>
            {/* 수정할 명령을 해야함으로 edit/:id 파라미터 걸어놓음 */}
        </Routes>
    </div>
  );
};

export default App;