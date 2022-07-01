import React,{ memo } from 'react';
import {Routes, Route} from 'react-router-dom';

import DepartmentList from './pages/DepartmentList';
import DepartmentEdit from './pages/DepartmentEdit';
import DepartmentAdd from './pages/DepartmentAdd';

const App = memo(() =>{
    return (
      <div>
        <h1>15-Redux-CRUD</h1>

        <Routes>
          <Route path='/' except={true} element={<DepartmentList/>} />
          <Route path='/department_add' element={<DepartmentAdd/>} />
          {/* 수정을 할 때 어떤 값을 수정할지 식별하기 위해 path 파라미터로 넘겨야함 */}
          <Route path='/department_edit/:id'  element={<DepartmentEdit/>} />
        </Routes>
      </div>
  );
});

export default App;
