import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from '../data';

const MenuContainer = styled.div`
    height: 1157px;
        .title {
        text-align: center;
        padding-top: 78px;
        padding-bottom: 50px;
        }
        .img {
        display: block;
        text-align: center;
        }
        .bg {
        position: relative;
            .item {
            position: absolute;
            }
            .icecream {
            top: 168px;
            left: 486px;
            width: 395px;
            height: 302px;
            }
            .cake {
            top: 168px;
            left: 919px;
            width: 276px;
            height: 472px;
            }
            .beverage {
            top: 508px;
            left: 284px;
            width: 230px;
            height: 366px;
            }
            .coffee {
            top: 508px;
            left: 552px;
            width: 329px;
            height: 292px;
            }
            .gift {
            top: 678px;
            left: 919px;
            width: 276px;
            height: 183px;
            }
            .dessert {
            top: 839px;
            left: 552px;
            width: 329px;
            height: 177px;
            }
    }
`;

const MenuSection = () => {
const {menu:{bgImg, title, mainImg}} = data;
    return (
    <MenuContainer bgImg={bgImg}>
        <div className="menu-bg">
        <img className="title" src={title} alt="" />
        <div className="img">
        <img src={mainImg} alt="" />
        </div>
            <Link to="/">
                <div className="menu icecream"></div>
            </Link>
            <Link to="/">
                <div className="menu cake"></div>
            </Link>
            <Link to="/">
                <div className="menu beverage"></div>
            </Link>
            <Link to="/">
                <div className="menu coffee"></div>
            </Link>
            <Link to="/">
                <div className="menu gift"></div>
            </Link>
            <Link to="/">
                <div className="menu dessert"></div>
            </Link>
        </div>
    </MenuContainer>
    );
};
export default MenuSection;