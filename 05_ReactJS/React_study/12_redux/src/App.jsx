import React from 'react'
import { Routes, Route } from "react-router-dom";
import Counter from './pages/Counter';
import Department from './pages/Department';
import MenuLink from './components/MenuLink'

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <nav>
      <MenuLink to="/counter">Counter</MenuLink>
      <MenuLink to="/department">Department</MenuLink>
      </nav>
      <hr/>
      <Routes>
        <Route path='/couter' element={<Counter/>}/>
        <Route path='/department' element={<Department/>}></Route>
      </Routes>
    </div>
  )
}

export default App
