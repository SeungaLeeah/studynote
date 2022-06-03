import React from 'react';
import ReactDOM from 'react-dom/client';



// test 완료 후, 다시 /를 빼서 App으로 변경해놓기

import App from './App';

//test를 위해 App의 경로를 Test로 수정해놓음
import Meta from './Meta';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Meta/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


