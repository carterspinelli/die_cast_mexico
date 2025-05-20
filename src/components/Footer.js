import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";
import images from "../data/images";

// Main container
const FooterContainer = styled.footer`
  background-color: #0c1220;
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
`;

const NavLink = styled(Link)`
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
  
  &:hover {
    color: #60a5fa;
  }
`;

const ExternalLink = styled.a`
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
  
  &:hover {
    color: #60a5fa;
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

const Footer = ({ messages }) => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  const services = [
    { name: "Die Casting", path: "/#services" },
    { name: "Mould & Fixture Design", path: "/#services" },
    { name: "CNC Precision Machining", path: "/#services" },
    { name: "Surface Treatment", path: "/#services" },
    { name: "Testing & Assembly", path: "/#services" },
  ];
  
  const industries = [
    { name: "Telecommunications", path: "/#industries" },
    { name: "Mechatronics & Automation", path: "/#industries" },
    { name: "Power Tools", path: "/#industries" },
    { name: "Automotive", path: "/#industries" },
    { name: "Lighting", path: "/#industries" },
    { name: "Instrumentation", path: "/#industries" },
    { name: "Pneumatic & Hydraulic", path: "/#industries" },
    { name: "Marine Products", path: "/#industries" },
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
                <LogoImg src="/images/die_cast_mx_footer_logo.png" alt="Die Cast Mexico" />
              </a>
            </Logo>
            <Description>
              {messages.footerDescription || "High-quality die casting solutions for automotive, telecommunications, and industrial applications. Precision manufacturing in Guadalajara, Mexico."}
            </Description>
          </CompanySection>
          
          <LinksSection>
            <LinksColumn>
              <ColumnTitle>{messages.services}</ColumnTitle>
              <LinksList>
                {services.map((service, idx) => (
                  <LinkItem key={idx}>
                    <NavLink to={localizedLink(service.path)}>
                      {service.name}
                    </NavLink>
                  </LinkItem>
                ))}
              </LinksList>
            </LinksColumn>
            
            <LinksColumn>
              <ColumnTitle>{messages.industries}</ColumnTitle>
              <LinksList>
                {industries.map((industry, idx) => (
                  <LinkItem key={idx}>
                    <NavLink to={localizedLink(industry.path)}>
                      {industry.name}
                    </NavLink>
                  </LinkItem>
                ))}
              </LinksList>
            </LinksColumn>
            
            <LinksColumn>
              <ColumnTitle>{messages.contact}</ColumnTitle>
              <LinksList>
                <LinkItem>
                  <ExternalLink 
                    href="https://maps.google.com/?q=Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal." 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.
                  </ExternalLink>
                </LinkItem>
                <LinkItem>
                  <ExternalLink href="tel:+523339683660">
                    +52 33 3968 3660
                  </ExternalLink>
                </LinkItem>
                <LinkItem>
                  <ExternalLink href={`mailto:${messages.footerEmailValue}`}>
                    {messages.footerEmailValue}
                  </ExternalLink>
                </LinkItem>
              </LinksList>
            </LinksColumn>
          </LinksSection>
        </TopSection>
        
        <Divider />
        
        <BottomSection>
          <Copyright>© {currentYear} Die Cast Mexico. {messages.footerRights}.</Copyright>
          <LegalLinks>
            <CertificationImage src={images.certification} alt="ISO 9001:2015 Certified" />
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

export default Footer;