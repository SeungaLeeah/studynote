import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/** 메뉴링크 --> NavLink: 현재 머물고 있는 페이지와 관련된 링크에 CSS 적용 */
const MenuLinkContainer = styled (NavLink)` 
/* styled component를 이용하여 NavLink를 확장을 시킴
--> 기본적인 CSS는 styled와 결합하고, URL과 mapping 되었을 경우 active가 따로 적용됨  */

    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 2px;
    color: #222;
     
    /* CSS의 가상클래스 hover */
    &:hover{
        color:#22b8cf;
    }

    &:after{
        content:'|';
        display: inline-block;
        padding: 0 7px;
        color: #ccc;
    }

    &:last-child{
        &:after{
            /* 글자색을 흰색으로 지정하여 화면에서 숨긴다. */
            color:#fff;
        }
    }
    
    /* 
        URL이 현재 메뉴를 가르키는 경우(클론이 아닌 점에 주의)
        활성 메뉴에 적용되는 기본 클래스 이름이 'active'이다.
    */
   &.active{
       text-decoration: underline;
       color:#22b8cf;

       &:after{
           /* 흰색 선을 추가하여 .active에서 지정한 border를 덮을 수 있도록 지정한다.(가림효과) */
           border-bottom: 4px solid #fff !important;
       }
   }

`;
/* to=NavLink 이고, Children은 그대로 넣는다 
그래서 <MenuLinkContainer to={to}>{children}</MenuLinkContainer>를 사용하면 
링크를 재사용할 수 있다. */
const MenuLink =({to, children})=> <MenuLinkContainer to={to}>{children}</MenuLinkContainer>
export default React.memo(MenuLink);

/* 위에와 같은 코드를 한번 더 축약한다면 -->
export default ({to, children})=> <MenuLinkContainer to={to}>{children}</MenuLinkContainer> */