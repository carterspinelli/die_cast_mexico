import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import styled from "styled-components";
import { useLanguage, getLocalizedPath } from "../../context/LanguageContext";
import Logo from "../Logo";
import LanguageSwitcher from "../LanguageSwitcher";

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
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
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

const LogoWrapper = styled.div`
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const ContactButton = styled(Link)`
  background-color: #0c1220;
  color: var(--white);
  padding: 0.6rem 1.25rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(12, 18, 32, 0.2);
  
  &:hover {
    background-color: #172b49;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(12, 18, 32, 0.25);
    color: var(--white);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  position: relative;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 0.25rem;
  transition: all 0.2s ease;
  color: var(--gray-dark);
  text-decoration: none;
  
  &:hover {
    color: #0c1220;
    transform: translateY(-1px);
  }
`;

const TubelightNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { language, messages } = useLanguage();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
      if (typeof window !== "undefined") {
        const servicesSection = document.getElementById("services");
        const industriesSection = document.getElementById("industries");
        const aboutSection = document.getElementById("about");
        
        const scrollPosition = window.scrollY + 200; // Add offset for better detection
        
        if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
          setActiveSection("about");
        } else if (industriesSection && scrollPosition >= industriesSection.offsetTop) {
          setActiveSection("industries");
        } else if (servicesSection && scrollPosition >= servicesSection.offsetTop) {
          setActiveSection("services");
        } else {
          setActiveSection("home");
        }
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
  
  const navItems = [
    { name: "home", label: messages.home, url: localizedLink("/") },
    { name: "services", label: messages.services, url: localizedLink("/#services") },
    { name: "about", label: messages.about, url: localizedLink("/#about") },
    { name: "industries", label: messages.industries, url: localizedLink("/#industries") },
  ];

  return (
    <NavbarContainer scrolled={scrolled ? 1 : 0}>
      <NavbarInner scrolled={scrolled ? 1 : 0}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        
        <NavLinks>
          {navItems.map((item) => {
            const isActive = activeSection === item.name;

            return (
              <NavItem
                key={item.name}
                to={item.url}
                onClick={() => setActiveSection(item.name)}
                className={isActive ? "active" : ""}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#0c1220",
                      zIndex: 1
                    }}
                  />
                )}
              </NavItem>
            );
          })}
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

export default TubelightNavbar;