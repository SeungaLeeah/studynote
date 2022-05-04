import React from 'react';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import styledComponents from 'styled-components';

const MainContainer = styledComponents.article`
  .article{ 
    margin: 36px 169px;
    img{
    opacity:0.7;
    z-index:0
  }
}
`;
const Main = () => {
  return (
    <MainContainer>
      <About/>
      <hr/>
      <Menu/>
      <hr/>
      <Contact/>
    </MainContainer>
  );
};

export default Main;