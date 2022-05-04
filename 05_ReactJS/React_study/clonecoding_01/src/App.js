import React from 'react';
import Navbar from './components/Navbar';
import MainPhoto from './components/MainPhoto';
import Main from './pages/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainPhoto/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;