import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Content from './pages/Content';
import BannerSection from './components/BannerSection'
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    {/* NavBar */}  
    <NavBar/> 

    {/* MainBanner */}
    <BannerSection/>

    {/* Content */}
    <Routes>
      <Route path='/' element={<Content/>}/>
    </Routes>
    {/* Footer */}
    <Footer/>
    </>
  );
};

export default React.memo(App);
