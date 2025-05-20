import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";

// Main container
const FooterContainer = styled.footer`
  background-color: #0d2b4b;
  color: #fff;
  padding: 5rem 0 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CompanySection = styled.div`
  flex: 1;
  max-width: 100%;
  
  @media (min-width: 1024px) {
    max-width: 30%;
  }
`;

const Logo = styled.div`
  margin-bottom: 1.5rem;
`;

const LogoImg = styled.img`
  height: 60px;
  display: block;
`;

const Description = styled.p`
  color: #a1a1aa;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 300px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #a1a1aa;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #60a5fa;
  }
`;

const LinksSection = styled.div`
  flex: 2;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LinksColumn = styled.div``;

const ColumnTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`;

const LinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;
    
    &:hover {
      color: #60a5fa;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #374151;
  margin-bottom: 2rem;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyright = styled.p`
  color: #a1a1aa;
  font-size: 0.875rem;
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
`;

const LegalLink = styled.a`
  color: #a1a1aa;
  font-size: 0.875rem;
  text-decoration: none;
  
  &:hover {
    color: #60a5fa;
  }
`;

const CertificationImage = styled.img`
  height: 40px;
`;

const NewModernFooter = () => {
  const { language, messages } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  // Define our sections based on current footer content
  const sections = [
    {
      title: messages.services || "Services",
      links: [
        { name: "Die Casting", href: localizedLink("/#services") },
        { name: "Mould & Fixture Design", href: localizedLink("/#services") },
        { name: "CNC Precision Machining", href: localizedLink("/#services") },
        { name: "Surface Treatment", href: localizedLink("/#services") },
        { name: "Testing & Assembly", href: localizedLink("/#services") },
      ],
    },
    {
      title: messages.industries || "Industries",
      links: [
        { name: "Telecommunications", href: localizedLink("/#industries") },
        { name: "Mechatronics & Automation", href: localizedLink("/#industries") },
        { name: "Power Tools", href: localizedLink("/#industries") },
        { name: "Automotive", href: localizedLink("/#industries") },
        { name: "Lighting", href: localizedLink("/#industries") },
        { name: "Instrumentation", href: localizedLink("/#industries") },
        { name: "Pneumatic & Hydraulic", href: localizedLink("/#industries") },
        { name: "Marine Products", href: localizedLink("/#industries") },
      ],
    },
    {
      title: messages.contact || "Contact",
      links: [
        { 
          name: "Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.", 
          href: "https://maps.google.com/?q=Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal."
        },
        { name: "+52 33 3968 3660", href: "tel:+523339683660" },
        { name: messages.footerEmailValue || "info@diecastmexico.com", href: `mailto:${messages.footerEmailValue || "info@diecastmexico.com"}` },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram size={20} />, href: "https://instagram.com/diecastmx", label: "Instagram" },
    { icon: <FaFacebook size={20} />, href: "https://facebook.com/diecastmx", label: "Facebook" },
    { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/company/diecastmx", label: "LinkedIn" },
  ];

  const legalLinks = [
    { name: messages.termsConditions || "Terms and Conditions", href: "#" },
    { name: messages.privacyPolicy || "Privacy Policy", href: "#" },
  ];

  return (
    <FooterContainer>
      <Container>
        <TopSection>
          <CompanySection>
            <Logo>
              <a href={localizedLink("/")}>
                <LogoImg src="/images/updated_footer_logo.png" alt="Die Cast Mexico" />
              </a>
            </Logo>
            <Description>
              {messages.footerDescription || "High-quality die casting solutions for automotive, telecommunications, and industrial applications. Precision manufacturing in Guadalajara, Mexico."}
            </Description>
            <SocialIcons>
              {socialLinks.map((social, idx) => (
                <SocialLink key={idx} href={social.href} aria-label={social.label}>
                  {social.icon}
                </SocialLink>
              ))}
            </SocialIcons>
          </CompanySection>
          
          <LinksSection>
            {sections.map((section, idx) => (
              <LinksColumn key={idx}>
                <ColumnTitle>{section.title}</ColumnTitle>
                <LinksList>
                  {section.links.map((link, linkIdx) => (
                    <LinkItem key={linkIdx}>
                      <a href={link.href}>{link.name}</a>
                    </LinkItem>
                  ))}
                </LinksList>
              </LinksColumn>
            ))}
          </LinksSection>
        </TopSection>
        
        <Divider />
        
        <BottomSection>
          <Copyright>© {currentYear} Die Cast Mexico. {messages.footerRights || "All rights reserved."}</Copyright>
          <LegalLinks>
            <CertificationImage src="/images/iso9001_diecast.webp" alt="ISO 9001:2015 Certified" />
            {legalLinks.map((link, idx) => (
              <LegalLink key={idx} href={link.href}>
                {link.name}
              </LegalLink>
            ))}
          </LegalLinks>
        </BottomSection>
      </Container>
    </FooterContainer>
  );
};

export default NewModernFooter;