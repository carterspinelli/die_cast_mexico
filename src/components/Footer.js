import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "./Logo";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";
import images from "../data/images";

const FooterContainer = styled.footer`
  background-color: var(--gray-dark);
  color: var(--white);
  padding: var(--spacing-xl) 0;
`;

const FooterContent = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-lg);
  }
`;

const FooterTitle = styled.h4`
  color: var(--white);
  margin-bottom: var(--spacing-md);
  font-size: 1.125rem;
`;

const FooterNavLink = styled(Link)`
  display: block;
  color: var(--gray-light);
  margin-bottom: var(--spacing-sm);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-light);
  }
`;

const FooterText = styled.p`
  color: var(--gray-light);
  margin-bottom: var(--spacing-sm);
`;

const FooterContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
`;

const ContactIcon = styled.div`
  margin-right: var(--spacing-sm);
  color: var(--primary-light);
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ContactText = styled.div`
  color: var(--gray-light);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--gray);
  color: var(--white);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    transform: translateY(-3px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const FooterBottom = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-lg) var(--container-padding) 0;
  border-top: 1px solid var(--secondary);
  margin-top: var(--spacing-lg);
  text-align: center;
  color: var(--gray-light);
`;

const Footer = ({ messages }) => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo />
          <FooterText>
            Die Cast Mexico - {messages.footerRights} © {currentYear}
          </FooterText>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16-1.9 1.47-4.3 2.35-6.9 2.35-.45 0-.9-.03-1.33-.08 2.46 1.56 5.37 2.47 8.5 2.47 10.2 0 15.75-8.42 15.75-15.75 0-.23 0-.46-.02-.7.9-.67 1.7-1.5 2.3-2.45z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>{messages.services}</FooterTitle>
          <FooterNavLink to={localizedLink("/#services")}>
            {messages.highPressureTitle}
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#services")}>
            {messages.moldingTitle}
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#services")}>
            {messages.finishingTitle}
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#services")}>
            {messages.qualityTitle}
          </FooterNavLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>{messages.industries}</FooterTitle>
          <FooterNavLink to={localizedLink("/#industries")}>
            {messages.automotiveTitle}
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            {messages.energyTitle}
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            {messages.telecomTitle}
          </FooterNavLink>
          <FooterNavLink to={localizedLink("/#industries")}>
            {messages.marineTitle}
          </FooterNavLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>{messages.contact}</FooterTitle>
          <FooterContactItem>
            <ContactIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </ContactIcon>
            <ContactText>
              <strong>{messages.footerAddress}:</strong><br />
              {messages.footerAddressValue}
            </ContactText>
          </FooterContactItem>
          
          <FooterContactItem>
            <ContactIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </ContactIcon>
            <ContactText>
              <strong>{messages.footerPhone}:</strong><br />
              +52 (81) 8123-4567
            </ContactText>
          </FooterContactItem>
          
          <FooterContactItem>
            <ContactIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </ContactIcon>
            <ContactText>
              <strong>{messages.footerEmail}:</strong><br />
              {messages.footerEmailValue}
            </ContactText>
          </FooterContactItem>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={images.certification} alt="ISO 9001:2015 Certified" style={{ height: '70px', marginRight: '1rem' }} />
          <p>© {currentYear} Die Cast Mexico. {messages.footerRights}.</p>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
