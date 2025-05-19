import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  .logo-image {
    height: 50px;
    width: auto;
  }
  
  @media (max-width: 768px) {
    .logo-image {
      height: 40px;
    }
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <StaticImage
          src="../images/die_cast_mx_logo_new.png"
          alt="Die Cast Mexico Logo"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={60}
          className="logo-image"
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
