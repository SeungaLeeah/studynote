import React,{useCallback, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import data from '../data'
import SearchSection from './SearchSection';


const NavBarContainer = styled.div`
width: 100%;
.NavBar-top { 
  .container{
  width: 1200px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
    .sns-icon{
    width: 200px;
    display: flex;
    justify-content: space-between;
    }
    .container {
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
  }
}
`;
 const MenuContainer = styled.div`
border-top: 1px solid black;
border-bottom: 2px solid black;
  .container{
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: auto;
    .member {
      display: flex;
      justify-content: space-around;
      a{
      color: #3C2821;
      opacity: 0.8;
      font-weight: bold;
      padding: 25px;
        &:first-child {
        color: #FF7C98;
        }
      }
    }
    .gnb {
    display: flex;
    justify-content: space-around;
      a{
      color: #3C2821;
      font-weight: bold;
      padding: 25px;
      }
    }
  }
`;
const SubmenuContainer= styled.div`
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #693337;
  }
  .hidden-menu {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        padding-bottom: 16px;
        color: rgb(132, 123, 123);
        font-style: 14px;
        font-weight: 300;
        letter-spacing: -0.65px;
        line-height: 16.8px;
        cursor: pointer;
      }
    }
  }
`;
const SearchBar = styled.div`
  width: 30px;
`;


const NavBar = () => {
  const [button, setButton] = useState(false);
  const [mouhover, setMouHover] = useState(false);
  const onMouHover=()=> setMouHover(!mouhover);

  const onMouOutHover=()=> setMouHover(mouhover);
  const onButtonChange = useCallback(() => {
    setButton(!button);
  }, [button]);
  const {navbar:{logo, icon, app, flavor, searchBtn, closeBtn}} = data;
  return (
  <>
  <NavBarContainer>
  <div className="container">
    <div className='snsIcon'>
        <ul>
          {icon.map((v,i)=>(
            <li key={i}>
              <Link to='/'>
                <img src={v} alt='icon'/>
              </Link>
            </li>
          ))}
        </ul>
    </div>
    <div className="logo">
      <Link to="">
        <div className='logo' logo={logo}></div>
      </Link>
    </div>
    <ul className="container">
      <li><Link to="">고객센터</Link></li>
      <li><Link to="">CONTACT US</Link></li>
      <li className="search">
      <button type="button" onClick={onButtonChange}>
        {button === false ? <img src={searchBtn}alt="search-icon" /> 
        : <img src={closeBtn} alt="close-icon" />}
      </button>
      </li>
    </ul>
  </div>
</NavBarContainer>

<MenuContainer>
    <div className="container">
        <ul className="member">
          <li><Link to="">LOGIN</Link></li>
          <li><Link to="">JOIN</Link></li>
        </ul>
        <div onMouseOver={onMouHover} onMouseOut={onMouOutHover}>
        <ul className="gnb">
          <li><Link to="">FAVOR OF THE MONTH</Link></li>
          <li><Link to="">MENU</Link></li>
          <li><Link to="">영양 성분 및 알레르기</Link></li>
          <li><Link to="">EVENT</Link></li>
          <li><Link to="">STORE</Link></li>
          <li><Link to="">ABOUT</Link></li>
        </ul>
        <SearchSection buttonState={button} />
    </div>
  </div>
</MenuContainer>
{button &&(
      <SubmenuContainer>
        <div className='hidden-menu'>
          <img src={app} alt="app"/>
          <div className='flavorImg'>
            <img src={flavor} alt="flavor"/>
          </div>
        </div>
        <ul>
            <li><Link to='/'>아이스크림</Link></li>
            <li><Link to='/'>아이스크림케이크</Link></li>
            <li><Link to='/'>음료</Link></li>
            <li><Link to='/'>커피</Link></li>
            <li><Link to='/'>디저트</Link></li>
        </ul>
        <ul>
            <li><Link to='/'>아이스크림</Link></li>
            <li><Link to='/'>음료</Link></li>
            <li><Link to='/'>케이크</Link></li>
        </ul>
        <ul>
            <li><Link to='/'>진행중이벤트</Link></li>
            <li><Link to='/'>당첨자발표</Link></li>
        </ul>
        <ul>
            <li><Link to='/'>매장찾기</Link></li>
            <li><Link to='/'>고객센터</Link></li>
            <li><Link to='/'>단체주문</Link></li>
        </ul>
        <ul>
            <li><Link to='/'>공지사항</Link></li>
            <li><Link to='/'>보도자료</Link></li>
            <li><Link to='/'>채용정보</Link></li>
            <li><Link to='/'>점포개설문의</Link></li>
            <li><Link to='/'>CONTACT US</Link></li>
        </ul>
        <SearchBar hidden={button}/>
      </SubmenuContainer>
    )};
</>
);
};
export default React.memo(NavBar);