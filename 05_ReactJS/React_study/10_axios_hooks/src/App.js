import React from 'react'
import Titanic from './pages/Titanic';

const App = () => {
  return (
    <div>
      <h1>10-Axios-Hooks</h1>
      <Titanic/>
    </div>
  )
}

export default React.memo(App);