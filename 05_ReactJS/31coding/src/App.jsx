import React, { Routes, Route } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Banner from './components/Banner';



const App = () => {
  return (
    <>
    {/* NavBar */}  
    <NavBar/> 

    {/* MainBanner */}
    <Banner/>

    {/* Content */}
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    {/* Footer */}
    <Footer/>
    </>
  );
};

export default React.memo(App);

