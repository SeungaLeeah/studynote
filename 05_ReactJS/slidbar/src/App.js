import React,{memo} from 'react'
import SideBar from './SideBar';


const App = memo(() => {
  return (
    <div>
      <SideBar/>
    </div>
  );
});

export default React.memo(App)