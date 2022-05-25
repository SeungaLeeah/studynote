import React from 'react';
import ReactDOM from 'react-dom/client';
/* import App from './App'; */
import { BrowserRouter } from 'react-router-dom';
import App from './Test';

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
