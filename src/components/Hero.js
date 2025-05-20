import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useLanguage, getLocalizedPath } from "../context/LanguageContext";

const HeroSection = styled.section`
  padding: 8rem 1rem 6rem;
  background-color: #f8f9fc;
  display: flex;
  align-items: center;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
    background-size: 80px 80px;
    opacity: 0.3;
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: 7rem 1rem 4rem;
    min-height: 80vh;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  
  @media (max-width: 992px) {
    order: 2;
    max-width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  span {
    color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: var(--color-text);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: var(--color-primary);
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(0, 118, 255, 0.25);
  
  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.35);
    color: white;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--color-secondary);
  padding: 0.875rem 1.75rem;
  border-radius: 0.375rem;
  font-weight: 600;
  border: 2px solid var(--color-primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-secondary);
    color: white;
    transform: translateY(-2px);
    border-color: var(--color-secondary);
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 40%;
  
  @media (max-width: 992px) {
    width: 80%;
    max-width: 400px;
    order: 1;
  }
`;

const HeroDecorationGrid = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-image: linear-gradient(to right, var(--color-border) 1px, transparent 1px), 
                    linear-gradient(to bottom, var(--color-border) 1px, transparent 1px);
  background-size: 25px 25px;
  opacity: 0.2;
  top: -2rem;
  right: -2rem;
  border-radius: 8px;
  z-index: -1;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  svg {
    width: 60%;
    height: auto;
    fill: var(--color-primary);
  }
`;

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
  </svg>
);

const Hero = ({ messages }) => {
  const { language } = useLanguage();
  
  // Helper function to create localized paths
  const localizedLink = (path) => getLocalizedPath(path, language);
  
  return (
    <HeroSection id="home">
      <Container>
        <HeroContent className="slide-in-left">
          <HeroTitle>
            <span>Die Cast</span> {messages.heroTitle}
          </HeroTitle>
          <HeroSubtitle>{messages.heroSubtitle}</HeroSubtitle>
          <ButtonContainer>
            <PrimaryButton to={localizedLink("/contact")}>{messages.cta}</PrimaryButton>
            <SecondaryButton to={localizedLink("/#services")}>{messages.learnMore}</SecondaryButton>
          </ButtonContainer>
        </HeroContent>
        
        <HeroImageWrapper className="slide-in-right">
          <HeroDecorationGrid />
          <HeroImage>
            <GearIcon />
          </HeroImage>
        </HeroImageWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
