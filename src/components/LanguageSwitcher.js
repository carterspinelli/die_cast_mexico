import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { useLanguage } from "../context/LanguageContext";

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageButton = styled.button`
  background: ${props => props.active ? "#0c1220" : "transparent"};
  color: ${props => props.active ? "var(--white)" : "#0c1220"};
  border: 1px solid #0c1220;
  padding: 0.3rem 0.6rem;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all var(--transition-duration);
  
  &:hover {
    background: ${props => props.active ? "#172b49" : "var(--gray-light)"};
  }
`;

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  
  const handleLanguageSwitch = (newLanguage) => {
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
    
    // Handle Privacy Policy page navigation
    if (currentPath.includes('privacy-policy') || currentPath.includes('politica-de-privacidad')) {
      const targetPath = newLanguage === "es" ? "/es/politica-de-privacidad" : "/privacy-policy";
      changeLanguage(newLanguage);
      navigate(targetPath);
      return;
    }
    
    // Handle Terms of Service page navigation
    if (currentPath.includes('terms-of-service') || currentPath.includes('terminos-del-servicio')) {
      const targetPath = newLanguage === "es" ? "/es/terminos-del-servicio" : "/terms-of-service";
      changeLanguage(newLanguage);
      navigate(targetPath);
      return;
    }
    
    // Handle general page navigation
    let targetPath = "/";
    
    if (currentPath.startsWith('/es/')) {
      // Currently on Spanish page
      if (newLanguage === "en") {
        targetPath = currentPath.replace('/es/', '/').replace('/es', '/');
        if (targetPath !== '/') {
          targetPath = targetPath.startsWith('/') ? targetPath : '/' + targetPath;
        }
      } else {
        targetPath = currentPath;
      }
    } else {
      // Currently on English page
      if (newLanguage === "es") {
        targetPath = currentPath === '/' ? '/es/' : `/es${currentPath}`;
      } else {
        targetPath = currentPath;
      }
    }
    
    changeLanguage(newLanguage);
    navigate(targetPath);
  };
  
  return (
    <SwitcherContainer>
      <LanguageButton
        active={language === "en"}
        onClick={() => handleLanguageSwitch("en")}
      >
        EN
      </LanguageButton>
      <LanguageButton
        active={language === "es"}
        onClick={() => handleLanguageSwitch("es")}
      >
        ES
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;