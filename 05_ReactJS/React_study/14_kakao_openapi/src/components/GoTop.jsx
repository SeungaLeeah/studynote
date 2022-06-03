import React,{ memo } from 'react';
import styled from 'styled-components';

import btnTop from '../assets/img/btnTop.png';

const TopButton =styled.button`
    width: 50px;
    height: 50px;
    background: url(${btnTop}) center center no-repeat;
    background-size: 100% 100%;
    border: 0;
    cursor: pointer;    
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 100;
`;
const GoTop = memo(() =>{
    return (
        <TopButton onClick={e => {
            //리액트 코드는 ajax 처리나 상태값 관리에만 국한됨
            /* 화면상의 이벤트를 줄 때는 바닐라 스크립드로 다 들어감  */
            // 스크롤을 다시 처음 위치로 부드럽게 보내는 이벤트
            window.scrollTo({top: 0, behavior:'smooth'});
        }}/>
    );
});

export default GoTop;