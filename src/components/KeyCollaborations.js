import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import images from "../data/images";

const CollaborationsSection = styled.section`
  padding: 6rem 1rem;
  background-color: #f8f9fc;
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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--color-secondary);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 800px;
  margin: 2rem auto 3rem;
  line-height: 1.6;
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  img {
    height: 100px;
    object-fit: contain;
    margin-bottom: 1.5rem;
  }
`;

const LogoName = styled.h4`
  font-size: 1.15rem;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const KeyCollaborations = () => {
  const { messages: translations } = useLanguage();
  
  return (
    <CollaborationsSection id="collaborations">
      <Container>
        <SectionHeader>
          <Title className="slide-in-left">{translations.collaborationsTitle}</Title>
          <Description className="slide-in-right">
            {translations.collaborationsDesc}
          </Description>
        </SectionHeader>
        
        <LogosContainer>
          <Logo className="fade-in">
            <img src={images.collaborations.nadca} alt="NADCA - North American Die Casting Association" />
            <LogoName>{translations.nadcaTitle}</LogoName>
          </Logo>
          
          <Logo className="fade-in">
            <img src={images.collaborations.aiag} alt="AIAG - Automotive Industry Action Group" />
            <LogoName>{translations.aiagTitle}</LogoName>
          </Logo>
        </LogosContainer>
      </Container>
    </CollaborationsSection>
  );
};

export default KeyCollaborations;