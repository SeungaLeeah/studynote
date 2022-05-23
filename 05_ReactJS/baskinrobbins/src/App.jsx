import React from 'react';
import Footer from './components/Footer';
import Content from './pages/Content';
import BannerSection from './components/BannerSection';
import HeaderNav from './components/HeaderNav';


const App = () => {
  return (
    <>
    {/* NavBar */}  
    <HeaderNav/> 

    {/* MainBanner */}
    <BannerSection/>

    {/* Content */}
    <Content/>

    {/* Footer */}
    <Footer/>
    </>
  );
};

export default React.memo(App);
