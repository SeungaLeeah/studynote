import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const HeaderContainer = styled.header`
 .jumbotron{
        padding: 80px;
        text-align: center;
        background: #1abc9c;
        color: #fff;

        h1 {
        font-size: 40px;
        }
    }
`;

const NavContainer = styled.nav`
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;

    div {
        max-width: 1200px;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;

        a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
           
            &.right {
                margin-left: auto;
            }
            &:hover {
                background-color: #ddd;
                color: black;
            }
            &.active {
                background-color: #666;
                color: white;
            }
        }
    } 
`;

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <div className="jumbotron">
                    <h1>My Website</h1>
                    <p> A <b>responsive</b> website created by me.</p>
                </div>
            </HeaderContainer>
            <NavContainer>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/link1">Link1</NavLink>
                    <NavLink to="/link2">Link2</NavLink>
                    <NavLink to="/link3" className="right">Link3</NavLink>
                </div>
            </NavContainer>
        </div>
    );
};
export default Header;