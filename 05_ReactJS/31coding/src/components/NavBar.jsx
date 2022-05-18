import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';


const NavContainer = styled.div`

`;
const MenuContainer = styled.div`

`;

const SubmenuContainer= styled.div`

`;

const NavBar = () => { 
  const [hidden, setHidden] = useState(false);

  const onHidden = () => setHidden(!hidden);
  
  const {navbar:{logo, icon, app, flavor, searchBtn}} = data;
  return (
  <NavContainer>
    <div className='navHead container'>
      {/* logo */}
      <div className='logo' logo={logo}></div>

      {/* snsIcon */}
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
      {/* contact */}
      <div className='contact'>
        <ul>
          <li><Link to="/">고객센터</Link></li>
          <li><Link to="/">CONTACT US</Link></li>
        </ul>
        <img src={searchBtn} alt="searchBtn"/>
      </div>
    </div>


    <MenuContainer>
      <div className="menubar" onMouseEnter={onHidden}>
        <div className="member">
          <p className="menu-login">LOGIN</p>
          <p className="menu-join">JOIN</p>
        </div>
          <p>FLAVOR OF MONTH</p>
          <p>MENU</p>
          <p>영양 성분 및 알레르기</p>
          <p>EVENT</p>
          <p>STORE</p>
          <p>ABOUT</p>
      </div>
    </MenuContainer>
    {/* null 병합연산자로 hidden 만들기 */}
    {hidden &&(
      <SubmenuContainer>
        <div className='hidden'>
          <img src={app} alt="app"/>
          <div className='flavorImg'>
            <img src={flavor} alt="flavor"/>
          </div>
        </div>
        <div>
            <p>아이스크림</p>
            <p>아이스크림케이크</p>
            <p>음료</p>
            <p>커피</p>
            <p>디저트</p>
        </div>
        <div>
            <p>아이스크림</p>
            <p>음료</p>
            <p>케이크</p>
        </div>
        <div>
            <p>진행중이벤트</p>
            <p>당첨자발표</p>
        </div>
        <div>
            <p>매장찾기</p>
            <p>고객센터</p>
            <p>단체주문</p>
        </div>
        <ul>
            <li>공지사항</li>
            <li>보도자료</li>
            <li>채용정보</li>
            <li>점포개설문의</li>
            <li>CONTACT US</li>
        </ul>
      </SubmenuContainer>
    )};
    </NavContainer>
  );
};

export default React.memo(NavBar);