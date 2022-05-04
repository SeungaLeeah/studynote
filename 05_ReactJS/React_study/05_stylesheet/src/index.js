import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
{/* <React.StrictMode>는 엄격모드로 코드 사용에 효율을 위해 2번씩 출력 -> 최종에는 빼기 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

