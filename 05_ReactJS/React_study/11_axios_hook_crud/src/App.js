import React from 'react'
import {Routes, Route } from "react-router-dom";

import GradeList from './pages/GradeList';
import GradeAdd from './pages/GradeAdd';
import GradeEdit from './pages/GradeEdit';

const App = () => {
  return (
    <div>
        <h1>11-Axios-Hooks-CRUD</h1>
        <Routes>
            <Route path="/" exapt={true} element={<GradeList/>}/>
            <Route path="/add" element={<GradeAdd/>}/>
            <Route path="/edit/:id" element={<GradeEdit/>}/>
            {/* 수정할 명령을 해야함으로 edit/:id 파라미터 걸어놓음 */}
        </Routes>
    </div>
  );
};

export default App;