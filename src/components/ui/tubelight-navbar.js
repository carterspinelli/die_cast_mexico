import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import styled from "styled-components";
import { useLanguage, getLocalizedPath } from "../../context/LanguageContext";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  transition: padding 0.3s ease;
`;

const NavbarInner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  padding: 0.25rem;
  border-radius: 9999px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled(Link)`
  position: relative;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  color: var(--gray-dark);
  text-decoration: none;
  
  &:hover {
    color: #0c1220;
  }
`;

const TubelightNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { language, messages } = useLanguage();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  useEffect(() => {
    const handleScroll = () => {
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
  }, []);
  
  const navItems = [
    { name: "home", label: messages.home, url: localizedLink("/") },
    { name: "services", label: messages.services, url: localizedLink("/#services") },
    { name: "industries", label: messages.industries, url: localizedLink("/#industries") },
    { name: "about", label: messages.about, url: localizedLink("/#about") },
  ];

  return (
    <NavbarContainer>
      <NavbarInner>
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
                  layoutId="lamp"
                  className="lamp"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    backgroundColor: "rgba(12, 18, 32, 0.05)",
                    borderRadius: "9999px",
                    zIndex: -1
                  }}
                >
                  <div 
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "32px",
                      height: "4px",
                      backgroundColor: "#0c1220",
                      borderTopLeftRadius: "9999px",
                      borderTopRightRadius: "9999px"
                    }}
                  >
                    <div 
                      style={{
                        position: "absolute",
                        width: "48px",
                        height: "24px",
                        backgroundColor: "rgba(12, 18, 32, 0.2)",
                        borderRadius: "9999px",
                        filter: "blur(8px)",
                        top: "-8px",
                        left: "-8px"
                      }}
                    />
                    <div 
                      style={{
                        position: "absolute",
                        width: "32px",
                        height: "24px",
                        backgroundColor: "rgba(12, 18, 32, 0.2)",
                        borderRadius: "9999px",
                        filter: "blur(8px)",
                        top: "-4px"
                      }}
                    />
                    <div 
                      style={{
                        position: "absolute",
                        width: "16px",
                        height: "16px",
                        backgroundColor: "rgba(12, 18, 32, 0.2)",
                        borderRadius: "9999px",
                        filter: "blur(4px)",
                        top: "0",
                        left: "8px"
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </NavItem>
          );
        })}
      </NavbarInner>
    </NavbarContainer>
  );
};

export default TubelightNavbar;