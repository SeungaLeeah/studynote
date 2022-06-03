import React,{ memo } from 'react';
import Top from './components/Top';
import Covid19 from './pages/Covid19';

const App = memo(() =>{
    return (
      <div>
        <Top/>
        <Covid19/>
      </div>
  );
});

export default App;