import React from "react";
import {Link, Routes, Route} from "react-router-dom"

import Grade1 from "./pages/GraedTable1";
import Grade2 from "./pages/GraedTable2";
import Grade3 from "./pages/GraedTable3";
import Grade4 from "./pages/GraedTable4";


const App = () => {
  return (
  <div>
    <h1>성적표</h1>
      <nav>
          <Link to="/grade_table/1">1학년</Link>&nbsp;|&nbsp;
          <Link to="/grade_table/2">2학년</Link>&nbsp;|&nbsp;
          <Link to="/grade_table/3">3학년</Link>&nbsp;|&nbsp;
          <Link to="/grade_table/4">4학년</Link>
      </nav>
    <hr />
      <Routes>
          <Route path="/grade_table/1" element={<Grade1/>} />
          <Route path="/grade_table/2" element={<Grade2/>} />
          <Route path="/grade_table/3" element={<Grade3/>} />
          <Route path="/grade_table/4" element={<Grade4/>} />
      </Routes>
    </div>
);
}

export default App;
