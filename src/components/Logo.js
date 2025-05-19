import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 60px;
    width: auto;
  }
  
  @media (max-width: 768px) {
    img {
      height: 50px;
    }
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src="/images/logo.png" alt="Die Cast Mexico Logo" style={{ height: '60px', width: 'auto' }} />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
