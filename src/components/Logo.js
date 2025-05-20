import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: auto;
    width: 220px;
  }
  
  @media (max-width: 768px) {
    img {
      width: 180px;
    }
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src="/images/logo.png" alt="Die Cast Mexico Logo" style={{ width: '220px', height: 'auto' }} />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
