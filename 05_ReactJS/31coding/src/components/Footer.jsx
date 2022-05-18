import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';

const FooterContainer = styled.div`

`;

const Footer = () => {
  const {footer:{brandLogo,footerLogo}} = data;
  const [option, setOption] = useState('');
  return (
    <FooterContainer>
       {/* policy */}
      <div className='container policy'>
        <ul className='policyList'>
          <li>
            <Link to='/'>점포개설문의</Link>
          </li>
          <li>
            <Link to="/">채용문의</Link>
            </li>
          <li>
          <Link to='/'>윤리신고센터</Link>
            </li>
          <li>
          <Link to='/'>이용약관</Link>
          </li>
          <li color='#ff7c98'>
            <Link to='/'>개인정보처리방침</Link>
          </li>
          <li>
            <Link to='/'>영상정보처리기기운영관리방침</Link>
          </li>
          <li>
          <Link to='/'>거래희망회사 사전등록</Link>
          </li>
        </ul>
        </div>

        {/* brand */}
        <div>
        <ul className='brand'>
          <li>
            <Link to='/'><img src={brandLogo[0]} alt="brandLogo"/></Link>
          </li>
          <li>
            <Link to='/'><img src={brandLogo[1]} alt="brandLogo"/></Link>
          </li>
          <li>
            <Link to='/'><img src={brandLogo[2]} alt="brandLogo"/></Link>
          </li>
          <li className='smallIcon'>
            <Link to='/'><img src={brandLogo[3]} alt="brandLogo"/></Link>
          </li>
          <li className='smallIcon'>
            <Link to='/'><img src={brandLogo[4]} alt="brandLogo"/></Link>
          </li>
          <li className='smallIcon'>
            <Link to='/'><img src={brandLogo[5]} alt="brandLogo"/></Link>
          </li>
        </ul>
      </div>

      {/* familysite */}
      <div className='familySite'>
        <button onClick={()=>setOption((prev)=>!prev)}>
          FAMILY SITE
        </button>
        <ul className={option ? 'option' : ''}>
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
      </div>
      {/* Compony Information */}
      <div className='information'>
        <img src={footerLogo} alt="footerLogo"/>
        <div className='footer1'>
          <p>사업자 등록번호 : 303-81=09535</p>
          <p>비알코리아(주) 대표이사 도세호</p>
          <address>
            서울특별시 서초구 남부순환로 26020(양재동 11-149번지) 
          </address>
        </div>
        <div className='footer2'>
          <p>TEL : 080-555-3131</p> 
          <p>개인정보관리책임자 : 김경우</p>
        </div>
        <p className='copyright'>Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default React.memo(Footer);