import React,{useState} from "react";
import { Link } from "react-router-dom";
import data from '../data';
import styled from "styled-components";

  const FooterContainer= styled.div`
  width: 100%;
  border-top: 1px solid #FEAF2A;

    .footContainer{
      width: 1200px;
      margin: auto;
      text-align: center;
      font-size: 14px;

      .policy{
      display: flex;
      justify-content: space-between;
      margin: auto;
      align-items: center;
      padding: 30px 0;
      width: 1000px;
      color: #b1ab9f;

        li:nth-child(5){
          color: #FF7C98;
        }
      }
    }
    .family{
      width: 100%;
      height: 75px;
      background-color: #F9F8F7;
      .brandLogo{
        width: 1000px;
        margin: auto;
        display: flex;
        justify-content: center;
    
        .logoItem {
          padding: 0 22px;
          margin-top: 20px;
            &:nth-child(4) {
              margin-right: -80px;
            width: 10%;
            }
            &:nth-child(5) {
              margin-right: -30px;
            }
        img {
        height: 31px;
        }
      }
    
      .siteClick{
        width: 120px;
        height: 32px;
        border: 1px solid #b1ab9f;
        padding: 0 11px;
        background-color: white;
        border-radius: 3px;
        position: relative;
        margin-top: 18px;
        
        button{
          text-align: left;
          font-size: 11px;
          letter-spacing: 1px;
          font-weight: 100;
          color: #b1ab9f;
          background-color: white;
        }
        .clickBtn{
          position: absolute;
          right: 0;
          top: 0;
        }

        .show-menu{
          width: inherit;
          border: 1px solid #b1ab9f;
          padding: 0 11px;
          background-color: white;
          border-radius: 3px;
          text-align: left;
          font-size: 13px;
          font-weight: 400;
          line-height: 30px;
          color: gray; 
          position: absolute;
          bottom: 31px;
          left: -1px;
        }
        
        .hide-menu{
          position: absolute;
          overflow: hidden;
          display: inline-block;
          z-index: -1;
          border: 0;
          width: 1px;
          height: 1px;
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
        }
      }
    }
  }
    .information{
      padding: 10px 0;

      img{
      display:block;
      margin: auto;
      padding: 30px 0;
      }

    .infoUnder,
    .info{
    display: flex;
    justify-content: center;
    font-size: 11px;
    font-weight: 300;
    p{
      padding-right: 10px;
      line-height: 22px;
    }
    }
  }
    .copyright{
      font-size: 8px;
      text-align: center;
      margin-bottom: 70px;
      color: #d5d5d5;
    }
  `;
const Footer = () => {
  const {footer:{brandLogo,footerLogo}} = data;
  const [isOpen, setMenu] = useState(false);
  
  const toggleMenu = () => {
        setMenu(isOpen => !isOpen); 
    }
  return (
  <FooterContainer>
    <div className="footContainer">
        <ul className="policy">
          <li><Link to=''>점포개설문의</Link></li>
          <li><Link to=''>채용문의</Link></li>
          <li><Link to=''>윤리신고센터</Link></li>
          <li><Link to=''>이용약관</Link></li>
          <li><Link to=''>개인정보처리방침</Link></li>
          <li><Link to=''>영상정보처리기기운영관리방침</Link></li>
          <li><Link to=''>거래희망회사 사전등록</Link></li>
        </ul>
      </div>
      <div className="family">
      <ul className='brandLogo'>
      {brandLogo.map((v, i) => {
          return (
          <li className="logoItem" key={i}>
          <Link to="/">
          <img src={v} alt="" />
          </Link>
          </li>
          );
          })}
        
      <li className="siteClick">
        <button onClick={()=>toggleMenu()}>
          FAMILY SITE
          <div className="clickBtn"><img src={"http://www.baskinrobbins.co.kr/assets/images/common/family_size_off.png"} alt='' /></div>
        </button>
        <ul className={isOpen ? "show-menu" : "hide-menu"}>
          <li>
            <Link to="/">배스킨스쿨</Link>
          </li>
          <li>
            <Link to="/">SPC그룹사이트</Link>
          </li>
          <li>
            <Link to="/">SPCMAGAGAZINE</Link>
          </li>
          <li>
            <Link to="/">BR코리아</Link>
          </li>
          <li>
            <Link to="/">해피포인트</Link>
          </li>
          <li>
            <Link to="/">파스쿠찌</Link>
          </li>
          <li>
            <Link to="/">삼립</Link>
          </li>
          <li>
            <Link to="/">파리바게트</Link>
          </li>
          <li>
            <Link to="/">던킨도너츠</Link>
          </li>
          </ul>
          
          </li>
        </ul>
        </div>
      {/* Compony Information */}
      <div className='information'>
        <img src={footerLogo} alt="footerLogo"/>
        <div className='info'>
          <p>사업자 등록번호 : 303-81=09535</p>
          <p>비알코리아(주) 대표이사 도세호</p>
          <div></div>
          <p>
            서울특별시 서초구 남부순환로 26020(양재동 11-149번지) 
          </p>
          </div>
          <div className="infoUnder">
          <p>TEL : 080-555-3131</p> 
          <p>개인정보관리책임자 : 김경우</p>
        </div>
        </div>
        <div>
        <p className='copyright'>Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.</p>
      </div>
    </FooterContainer>
);
};
export default React.memo(Footer);