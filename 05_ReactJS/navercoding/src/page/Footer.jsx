import React from 'react'
import styled from 'styled-components';

const FooterSection = styled.div`
margin-top: 30px;
font-size: 12px;
font-weight: 100;
text-align: center;
color: gray;
word-spacing: 1px;

.underLine{
    display: inline;
    justify-content: space-evenly;
    span{
    border-right: 0.5px solid #d5d5d5;
    padding: 0 10px;
        &:last-child{
            border-right: none;
        }
        &:hover{
            text-decoration: underline;
            color: #03c75a;
            cursor: pointer;
        }
    }   
}

.copyRight{
    margin-top: 10px;
    padding-bottom: 20px;
    font-weight: 400;
    &:hover{
            text-decoration: underline;
            color: #03c75a;
            cursor: pointer;
        }
}
`;
const Footer = () => {
  return (
    <FooterSection>
        <div className="underLine">
            <span>이용약관</span>
            <span><b>개인정보처리방침</b></span>
            <span>책임의 한계와 법적고지</span>
            <span>회원정보 고객센터</span>
        </div>
        <div className="copyRight">
            <span>&copy; NAVER Corp.</span>
        </div>
    </FooterSection>

  )
}

export default React.memo(Footer);