import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.scrolled ? "var(--white)" : "transparent"};
  padding: 0.75rem 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? "0 2px 10px rgba(0, 0, 0, 0.05)" : "none"};
  width: 100%;
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  width: ${props => props.scrolled ? '90%' : '100%'};
  background-color: ${props => props.scrolled ? "var(--white)" : "transparent"};
  border-radius: ${props => props.scrolled ? "12px" : "0"};
  box-shadow: ${props => props.scrolled ? "0 2px 15px rgba(0, 0, 0, 0.08)" : "none"};
  ${props => props.scrolled ? 'margin-top: 10px;' : ''}
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
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: ${props => props.isActive ? 'rgba(0,0,0,0.05)' : 'transparent'};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)'};
  }
  
  &.active {
    background-color: ${props => props.scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)'};
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
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 500;
  margin-left: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);
  
  &:hover {
    background-color: var(--primary-dark);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
  
  @media (max-width: 768px) {
    margin: 0.75rem 0;
  }
`;

const Navbar = ({ messages }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  
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
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  return (
    <NavbarContainer scrolled={scrolled ? 1 : 0}>
      <NavbarInner scrolled={scrolled ? 1 : 0}>
        <Logo />
        
        <MobileMenuButton 
          onClick={toggleMobileMenu}
          scrolled={scrolled ? 1 : 0}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </MobileMenuButton>
        
        <NavLinks mobileMenuOpen={mobileMenuOpen ? 1 : 0}>
          <NavLink to={localizedLink("/")} activeClassName="active" scrolled={scrolled ? 1 : 0}>
            {messages.home}
          </NavLink>
          <NavLink to={localizedLink("/#services")} activeClassName="active" scrolled={scrolled ? 1 : 0}>
            {messages.services}
          </NavLink>
          <NavLink to={localizedLink("/#industries")} activeClassName="active" scrolled={scrolled ? 1 : 0}>
            {messages.industries}
          </NavLink>
          <NavLink to={localizedLink("/#about")} activeClassName="active" scrolled={scrolled ? 1 : 0}>
            {messages.about}
          </NavLink>
        </NavLinks>
        
        <RightSection>
          <LanguageSwitcher />
          <ContactButton to={localizedLink("/contact")}>
            {messages.contact}
          </ContactButton>
        </RightSection>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
