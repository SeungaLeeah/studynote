import React from "react";
import styled from "styled-components";

const SideContainer = styled.div`
& {
width: 360px;
flex: none;
border-left: 1px solid #d5d5d5;
border-right: 1px solid #d5d5d5;
}
`;
const Side = () => {
    return (
        <SideContainer className="side">
            <div className="container">
                <h2>About Me</h2>
                <h5>Photo of me:</h5>
                <div className="fakeimg">Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                <h3>More Text</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <div className="fakeimg">Image</div>
                <br />
                <div className="fakeimg">Image</div>
                <br />
                <div className="fakeimg">Image</div>
            </div>
        </SideContainer>
    );
};
export default Side;