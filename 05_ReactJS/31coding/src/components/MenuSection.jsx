import React from 'react'
import styled from 'styled-components';
import data from '../data';

const MenuContainer = styled.div`
  
`;
const MenuSection = () => {
  const {menu:{bgImg, title, mainImg}} = data;
  return (
    <MenuContainer bgImg={bgImg}>
      <div className='container'>
      <img src={title} alt="title" />
      <div className='mainImage' mainImg={mainImg}></div>
      </div>
    </MenuContainer>
  );
};

export default React.memo(MenuSection);