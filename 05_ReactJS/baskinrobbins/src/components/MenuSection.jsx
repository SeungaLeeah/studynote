import React from "react";
import styled from "styled-components";
import data from '../data';

const MenuContainer = styled.div`

    height: 1150px;
    margin: auto;
    background: url("http://www.baskinrobbins.co.kr/assets/images/main/bg_menu.jpg") no-repeat ;
    background-position: center center;
    

        .title {
        text-align: center;
        display: block;
        padding-top: 70px;
        padding-bottom: 40px;
            img{
                width: 80px;
            }
        }
        .img {
        text-align: center;
            img{
            cursor: pointer;
            }
        }     
    
`;

const MenuSection = () => {
const {menu:{ title, mainImg}} = data;
    return (
    <MenuContainer>
        <div className="title">
        <img src={title} alt="" />
        </div>
        <div className="img">
        <img src={mainImg} alt="" />
        </div>
    </MenuContainer>
    );
};
export default React.memo(MenuSection);