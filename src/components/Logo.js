import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    height: 50px;
    width: auto;
  }
  
  @media (max-width: 768px) {
    svg {
      height: 40px;
    }
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <rect x="10" y="15" width="35" height="30" rx="2" fill="url(#gradient)" />
          <path d="M15 25 L25 20 L35 25 L35 35 L25 40 L15 35 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
          <circle cx="25" cy="30" r="5" fill="#475569" />
          <text x="55" y="30" fontFamily="Roboto, sans-serif" fontSize="16" fontWeight="700" fill="#1e3a8a">DIE CAST</text>
          <text x="55" y="45" fontFamily="Roboto, sans-serif" fontSize="16" fontWeight="700" fill="#3b82f6">MEXICO</text>
        </svg>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
