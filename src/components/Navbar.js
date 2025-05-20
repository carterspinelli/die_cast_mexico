import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";

// Main navbar container with flex center layout
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 1rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
  transition: padding 0.3s ease;
  
  ${props => props.scrolled && `
    padding: 0.75rem 1rem;
  `}
`;

// Inner rounded container with shadow
const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.scrolled ? "var(--white)" : "rgba(255, 255, 255, 0.9)"};
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 1.5rem;
  width: 100%;
  max-width: var(--container-max-width);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

// Logo wrapper with animation
const LogoWrapper = styled.div`
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

// Desktop navigation links
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Individual nav link styling
const NavLink = styled(Link)`
  color: var(--gray-dark);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #172b49;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #172b49;
    transform: translateY(-1px);
  }
  
  &:hover:after,
  &.active:after {
    width: 100%;
  }
`;

// CTA Button styling
const ContactButton = styled(Link)`
  background-color: #172b49;
  color: var(--white);
  padding: 0.6rem 1.25rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(23, 43, 73, 0.2);
  
  &:hover {
    background-color: #213c69;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(23, 43, 73, 0.25);
    color: var(--white);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Right section container
const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

// Mobile toggle button
const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 1rem;
  transition: transform 0.2s ease;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &:active {
    transform: scale(0.9);
  }
  
  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray-dark);
  }
`;

// Mobile menu overlay
const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--white);
  z-index: 1001;
  padding: 2rem;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;

// Close button for mobile menu
const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--gray-dark);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--gray-light);
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

// Mobile menu link styling
const MobileNavLink = styled(Link)`
  color: var(--gray-dark);
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid var(--gray-light);
  transition: color 0.3s ease;
  
  &:hover {
    color: #172b49;
  }
`;

// Mobile CTA Button
const MobileCTAButton = styled(Link)`
  margin-top: 2rem;
  background-color: #172b49;
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #213c69;
    color: var(--white);
  }
`;

const Navbar = ({ messages }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
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
    <>
      <NavbarContainer scrolled={scrolled ? 1 : 0}>
        <NavbarInner scrolled={scrolled ? 1 : 0}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          
          <NavLinks>
            <NavLink to={localizedLink("/")} activeClassName="active">
              {messages.home}
            </NavLink>
            <NavLink to={localizedLink("/#services")} activeClassName="active">
              {messages.services}
            </NavLink>
            <NavLink to={localizedLink("/#industries")} activeClassName="active">
              {messages.industries}
            </NavLink>
            <NavLink to={localizedLink("/#about")} activeClassName="active">
              {messages.about}
            </NavLink>
          </NavLinks>
          
          <RightSection>
            <LanguageSwitcher />
            <ContactButton to={localizedLink("/contact")}>
              {messages.contact}
            </ContactButton>
            <MobileMenuButton 
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </MobileMenuButton>
          </RightSection>
        </NavbarInner>
      </NavbarContainer>
      
      {/* Mobile Menu */}
      <MobileMenuOverlay isOpen={mobileMenuOpen}>
        <CloseButton onClick={toggleMobileMenu}>×</CloseButton>
        
        <MobileNavLink to={localizedLink("/")} onClick={toggleMobileMenu}>
          {messages.home}
        </MobileNavLink>
        <MobileNavLink to={localizedLink("/#services")} onClick={toggleMobileMenu}>
          {messages.services}
        </MobileNavLink>
        <MobileNavLink to={localizedLink("/#industries")} onClick={toggleMobileMenu}>
          {messages.industries}
        </MobileNavLink>
        <MobileNavLink to={localizedLink("/#about")} onClick={toggleMobileMenu}>
          {messages.about}
        </MobileNavLink>
        
        <MobileCTAButton to={localizedLink("/contact")} onClick={toggleMobileMenu}>
          {messages.contact}
        </MobileCTAButton>
      </MobileMenuOverlay>
    </>
  );
};

export default Navbar;
