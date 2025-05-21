import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import images from "../data/images";

const CollaborationsSection = styled.section`
  padding: 5rem 1rem;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  
  img {
    height: 100px;
    object-fit: contain;
    margin-bottom: 1rem;
  }
`;

const LogoName = styled.h4`
  font-size: 1.1rem;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
`;

const KeyCollaborations = () => {
  const { messages: translations } = useLanguage();
  
  return (
    <CollaborationsSection>
      <Container>
        <SectionHeader data-aos="fade-up">
          <Title data-aos="fade-up" data-aos-delay="100">{translations.collaborationsTitle}</Title>
          <Description data-aos="fade-up" data-aos-delay="200">
            {translations.collaborationsDesc}
          </Description>
        </SectionHeader>
        
        <LogosContainer data-aos="fade-up" data-aos-delay="300">
          <Logo data-aos="zoom-in" data-aos-delay="400">
            <img src={images.collaborations.nadca} alt="NADCA - North American Die Casting Association" />
            <LogoName data-aos="fade-up" data-aos-delay="500">{translations.nadcaTitle}</LogoName>
          </Logo>
          
          <Logo data-aos="zoom-in" data-aos-delay="600">
            <img src={images.collaborations.aiag} alt="AIAG - Automotive Industry Action Group" />
            <LogoName data-aos="fade-up" data-aos-delay="700">{translations.aiagTitle}</LogoName>
          </Logo>
        </LogosContainer>
      </Container>
    </CollaborationsSection>
  );
};

export default KeyCollaborations;