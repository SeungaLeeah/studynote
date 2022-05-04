import React from 'react';
import styledComponents from 'styled-components';
import hamburger from '../assets/img/hamburger.jpg';

const MainPhotoContainer = styledComponents.article`
  position: relative;
  width: 100%;  
  height: 692px;
  img{
    position:absolute;
    top: -20px; 
    width: 100%;
    height:100%;
    object-fit: cover:
  }
  h1{
    position: absolute;
    left:32px;
    bottom: 12px;
    color: #545454;
    font-weight: 500;
    letter-spacing: 4px;
    font-size:30px
  }
`;
const Main_Photo = () => {
  return (
    <MainPhotoContainer>
      <img src={hamburger} alt="hamburger"/>  
      <h1>Le Catering</h1>
    </MainPhotoContainer>
  );
};

export default Main_Photo;