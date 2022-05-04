import React from 'react';
import styled from "styled-components";
import tableImg from "../assets/img/tablesetting2.jpg";

const AboutContainer = styled.article`
  display:flex;
  line-height:1.5;
  justify-content: space-between;
  img{
    max-height: 640px;
  }
  .information{
    width: 50%;
    padding-left: 40px;

    h1{
      text-align: center;
      font-weight: 500;
      letter-spacing: 4px;
      font-size:30px
  }
    h4{
      text-align: center;
      margin-bottom: 20px;
      font-weight: 500;
      letter-spacing: 4px
    }
    p{
      font-size: 16px;
    }
  }
`;
const About = () => {
  return (
    <AboutContainer className="article">
      <img src={tableImg} alt="table_img"/>
    <div className='information'>
      <h1>About Catering</h1>
        <h4>Tradition since 1889</h4>
          <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use ingredients.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    </AboutContainer>
  )
}

export default About