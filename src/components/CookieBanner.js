import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const BannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #0c1220 0%, #1e3a8a 100%);
  color: #ffffff;
  padding: 1rem 1.5rem;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  transform: translateY(${props => props.isVisible ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BannerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 1rem;
  }
`;

const Message = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: #e5e7eb;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  min-width: 1.5rem;
  min-height: 1.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #60a5fa;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  
  const currentLanguage = language || 'en';
  
  // Cookie notice text content
  const content = {
    en: {
      message: "By continuing to browse our website, you acknowledge that you have read and agree to our Privacy Policy and Cookie Policy."
    },
    es: {
      message: "Al continuar navegando en nuestro sitio web, reconoce que ha leído y acepta nuestra Política de Privacidad y Política de Cookies."
    }
  };
  
  const text = content[currentLanguage] || content.en;
  
  useEffect(() => {
    // Check if user has already made a choice
    if (typeof window !== 'undefined') {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (!cookieConsent) {
        // Show banner after a short delay for better UX
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1500);
        
        return () => clearTimeout(timer);
      }
    }
  }, []);
  
  const handleClose = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'acknowledged');
    }
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <BannerContainer isVisible={isVisible}>
      <BannerContent>
        <TextContent>
          <Message>{text.message}</Message>
        </TextContent>
        <CloseButton onClick={handleClose}>
          ✕
        </CloseButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default CookieBanner;