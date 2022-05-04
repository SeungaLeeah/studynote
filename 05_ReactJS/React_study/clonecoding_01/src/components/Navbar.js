import React from 'react';
import styled from 'styled-components';


const NavContainer = styled.article`
  position: sticky;
  top: 0;
  padding: 6px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color:#fff;
  letter-spacing: 4px;
  box-shadow: 5px 5px 10px 1px rgba(0,0,0,0.2);
  z-index:100;
  
  .brand,
  .menuBar{
    padding: 12px 16px;
    &:hover{
      background-color: #b3b3b39b;
    }
  }
`;
const Navbar = () => {
  return (
    <NavContainer>
      <span className='brand'>Gourmet au Catering</span>
      <span>
        <span className='menuBar'>About</span>
        <span className='menuBar'>Menu</span>
        <span className='menuBar'>Contact</span>
      </span>
    </NavContainer>
  );
};

export default Navbar;