import React from 'react';
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from './component/Header';
import Content from './pages/Content';
import Footer from './component/Footer';


const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR';
    }
    .container {
    padding: 20px;
    }
    .fakeimg {
    background-color: #aaa;
    width: auto;
    padding: 20px;
    height:200px;
    }
  `;

const Meta = props => {
  return (
    <Helmet>
        <meta charSet='utf-8'/>
        <title>{props.title}</title>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet"></link>
    </Helmet>
   );
  };
  function App() {
    return (
    <div>
      <Meta/>
      <GlobalStyle/>

      <Header/>

      <Routes>
        <Route path='/' element={<Content />} exact={true}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;