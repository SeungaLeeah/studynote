import React,{useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import data from '../data'
const MenuContainer = styled.div`
border-top: 1px solid #d5d5d5;
border-bottom: 1px solid black;
justify-content: space-between;
height: 40px;

.bottom_nav{
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  height: 40px;
  
  .member {
    display: flex;
    font-size: 12px;
    li{
    color: #3C2821;
    opacity: 0.8;
    font-weight: bold;
    padding: 0 25px;
    margin-top: 12px;
      &:first-child {
      color: #FF7C98;
      }
    }
  }
  .gnb {
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
      li{
        font-size: 13px;
        color: #3C2821;
        font-weight: bold;
        padding:0 45px;
        line-height: 38px;
      }
  }
}
`;

const SubNavContainer= styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-height: 275px;
  z-index: 99999;
  .openMenu {
    height: auto;
    display: flex;
      .appImg{
        width:200px;
        height: 200px;
        margin-top: 50px;        
      }
      .flavorImg{
        margin-left: 40px;
        opacity: 1;
        transition: 1.5s ease-in;
      }
  }
    .menuItem {
      display: flex;
      text-align: center;
      width: 100%;
      margin-left: 12px;
      ul{
        justify-content: flex-start;
        flex: 1 1 790px;
        margin-top: 20px;
        &:nth-child(2),
        &:nth-child(3){
          margin-left: 40px;
        }
      li {
        width:100%;
        padding-bottom: 16px;
        color: gray;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: -1px;
        line-height: 16.8px;
        cursor: pointer;
      }
    }
    }

`;
const MenuNav = () => {

 const [openPage,setOpenPage] = useState(false);

 const onOpen = (e) =>{
   setOpenPage(openPage => true);
 }

 const onOut = (e) =>{
   setOpenPage(openPage =>false);
 }

    const {navbar:{ app, flavor}} = data;
  return (
<>
    <MenuContainer>
    <div className="bottom_nav">
        <ul className="member">
          <li><Link to="">LOGIN</Link></li>
          <li><Link to="">JOIN</Link></li>
        </ul>
        <div onMouseOver={onOpen} onMouseOut={onOut} >
        <ul className="gnb">
          <li><Link to="">FAVOR OF THE MONTH</Link></li>
          <li><Link to="">MENU</Link></li>
          <li><Link to="">?????? ?????? ??? ????????????</Link></li>
          <li><Link to="">EVENT</Link></li>
          <li><Link to="">STORE</Link></li>
          <li><Link to="">ABOUT</Link></li>
        </ul>
    </div>
  </div>
  
</MenuContainer>
{openPage &&(
    <SubNavContainer>
    
        <div className='openMenu' onMouseOver={onOpen} onMouseOut={onOut}>
          <img className='appImg' src={app} alt="app"/>
          <div className='flavorImg'>
            <img src={flavor} alt="flavor"/>
          </div>
        </div>
        <div className='menuItem'>
        <ul>
            <li><Link to='/'>???????????????</Link></li>
            <li><Link to='/'>????????????????????????</Link></li>
            <li><Link to='/'>??????</Link></li>
            <li><Link to='/'>??????</Link></li>
            <li><Link to='/'>?????????</Link></li>
        </ul>
        <ul>
            <li><Link to='/'>???????????????</Link></li>
            <li><Link to='/'>??????</Link></li>
            <li><Link to='/'>?????????</Link></li>
        </ul>
        <ul>
            <li><Link to='/'>??????????????????</Link></li>
            <li><Link to='/'>???????????????</Link></li>
        </ul>
        <ul>
            <li><Link to='/'>????????????</Link></li>
            <li><Link to='/'>????????????</Link></li>
            <li><Link to='/'>????????????</Link></li>
        </ul>
        <ul>
            <li><Link to='/'>????????????</Link></li>
            <li><Link to='/'>????????????</Link></li>
            <li><Link to='/'>????????????</Link></li>
            <li><Link to='/'>??????????????????</Link></li>
            <li><Link to='/'>CONTACT US</Link></li>
        </ul>
        </div>
      </SubNavContainer>
      )}
      </>
  )
}

export default React.memo(MenuNav);