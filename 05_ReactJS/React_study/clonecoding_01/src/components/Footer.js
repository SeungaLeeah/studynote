import React from 'react';
import styledComponents from 'styled-components';

const FooterContainer = styledComponents.article`
  padding:64px;
  text-align: center;
  background-color: #c9c9c9;
`;

const Footer = () => {
  return (
    <FooterContainer>Powered by w3.css</FooterContainer>
  );
  };

export default Footer;