import React,{ memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Top from './components/Top';

/* import Blog from './pages/Blog';
import Book from './pages/Book';
import Cafe from './pages/Cafe';
import Image from './pages/Image';
import Web from './pages/Web'; */
import KakaoSearch from './pages/KakaoSearch'

const App = memo(() =>{
    return (
      <div>
        <Top/>

        <Routes>
          {/* <Route path="blog" element={<Blog/>}/>
          <Route path="book" element={<Book/>}/>
          <Route path="cafe" element={<Cafe/>}/>
          <Route path="image" element={<Image/>}/>
          <Route path="web" element={<Web/>}/> */}

          {/* api를 변수로 지정해서 값을 불러오기 */}
          <Route path="/:api" element={<KakaoSearch/>}/> 
        </Routes>
      </div>
  );
});

export default App;