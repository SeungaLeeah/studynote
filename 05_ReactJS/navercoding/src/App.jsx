import React from 'react'  
import styled from 'styled-components';
import Main from './page/Main';
import logo from './img/logo.png';
import Footer from './page/Footer';

const NavContainer = styled.nav`
  text-align: center;
  margin: auto;
  height: 100px;
  .mainLogo{
    width: 160px;
    margin: 50px 0;
    cursor: pointer;
  }

`;

const App = () => {
  return(
    <>
    <NavContainer>
      <div className='text-blind'>NAVER</div>
      <img src={logo} alt="mainLogo" className="mainLogo" />
    </NavContainer>
    <Main/>
    <Footer/>
    </>
  )
}

export default React.memo(App);
