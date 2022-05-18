import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Meta from './Meta';
import GlobalStyled from './GlobalStyled';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meta/>
    <GlobalStyled/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


