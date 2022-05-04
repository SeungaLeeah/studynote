import React from "react";
import styled from "styled-components";
const FooterItem = styled.div`
padding: 20px;
text-align: center;
background: #ddd;
`;
const Footer = () => {
return (
<FooterItem>
<footer className="footer">
<h2>Footer</h2>
</footer>
</FooterItem>
);
};
export default Footer;