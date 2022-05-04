import React from "react";
import styled from "styled-components";

import Side from '../component/Side';
import Main from "../component/Main";

const ContentContainer= styled.section`
    max-width: 1200px;
    margin: auto;
    background-color: #eee;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
`;
const Content=() => {
    return (
        <ContentContainer>
            <Side/>
            <Main/>
        </ContentContainer>
    );
};
export default Content;