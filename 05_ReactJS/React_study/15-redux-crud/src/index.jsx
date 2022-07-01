import React from 'react';
import ReactDOM from 'react-dom/client';

// test 완료 후, 다시 /를 빼서 App으로 변경해놓기
/**/
import App from './App';
/*/
import App from './Test';
/**/
//test를 위해 App의 경로를 Test로 수정해놓음

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider로 감싸주면 상태값이 App을 통해 하위 컴포넌트로 전파됨 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
