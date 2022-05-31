import React from 'react';

import News from './pages/News';

const App = () =>{
    return (
      <div>
        <h1>Redux News Viewer</h1>
        <News/>
      </div>
  );
};

export default React.memo(App);
