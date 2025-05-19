import React, { useState, useEffect } from "react";
import { Link } from "gatsby-plugin-intl";
import styled from "styled-components";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.scrolled ? "var(--white)" : "transparent"};
  padding: 1rem 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${props => (props.mobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--white);
    padding: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? "var(--gray-dark)" : "var(--white)"};
  margin-left: 1.5rem;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover:after,
  &.active:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 0.75rem 0;
    color: var(--gray-dark);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.scrolled ? "var(--gray-dark)" : "var(--white)"};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const ContactButton = styled(Link)`
  background-color: var(--primary);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  font-weight: 500;
  margin-left: 1.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    color: var(--white);
  }
  
  @media (max-width: 768px) {
    margin: 0.75rem 0;
  }
`;

const Navbar = ({ messages }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrolled]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarInner>
        <Logo />
        
        <MobileMenuButton 
          onClick={toggleMobileMenu}
          scrolled={scrolled}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </MobileMenuButton>
        
        <NavLinks mobileMenuOpen={mobileMenuOpen}>
          <NavLink to="/" activeClassName="active" scrolled={scrolled}>
            {messages.home}
          </NavLink>
          <NavLink to="/#services" activeClassName="active" scrolled={scrolled}>
            {messages.services}
          </NavLink>
          <NavLink to="/#industries" activeClassName="active" scrolled={scrolled}>
            {messages.industries}
          </NavLink>
          <NavLink to="/#about" activeClassName="active" scrolled={scrolled}>
            {messages.about}
          </NavLink>
          
          <ContactButton to="/contact">
            {messages.contact}
          </ContactButton>
        </NavLinks>
        
        <RightSection>
          <LanguageSwitcher />
        </RightSection>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
