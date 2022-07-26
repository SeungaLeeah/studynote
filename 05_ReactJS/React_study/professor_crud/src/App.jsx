import React,{ memo } from 'react';
import {Routes, Route} from 'react-router-dom';

import ProfessorList from './pages/ProfessorList';
import ProfessorEdit from './pages/ProfessorEdit';
import ProfessorAdd from './pages/ProfessorAdd';

const App = memo(() =>{
    return (
      <div>
        <h1>Professor CRUD</h1>

        <Routes>
          <Route path='/' except={true} element={<ProfessorList/>} />
          <Route path='/professor_add' element={<ProfessorAdd/>} />
          {/* 수정을 할 때 어떤 값을 수정할지 식별하기 위해 path 파라미터로 넘겨야함 */}
          <Route path='/professor_edit/:profno'  element={<ProfessorEdit/>} />
        </Routes>
      </div>
  );
});

export default App;