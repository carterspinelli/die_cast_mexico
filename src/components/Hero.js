import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  text-align: center;
  background-color: #1e293b;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    &::before {
      background-attachment: scroll;
    }
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 var(--container-padding);
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--white);
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: #0c1220;
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #172b49;
    transform: translateY(-2px);
    color: var(--white);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  border: 2px solid var(--white);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--white);
    color: #172b49;
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  // Use the die_cast_cnc.png image as the background
  const backgroundImage = "/images/die_cast_cnc.png";
  const { language, messages } = useLanguage();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  return (
    <HeroSection backgroundImage={backgroundImage}>
      <HeroContent className="fade-in">
        <HeroTitle data-aos="fade-down" data-aos-delay="200">{messages.heroTitle}</HeroTitle>
        <HeroSubtitle data-aos="fade-up" data-aos-delay="400">{messages.heroSubtitle}</HeroSubtitle>
        <ButtonContainer data-aos="fade-up" data-aos-delay="600">
          <PrimaryButton to={localizedLink("/contact")}>{messages.cta}</PrimaryButton>
          <SecondaryButton to={localizedLink("/#services")}>{messages.learnMore}</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
