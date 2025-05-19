import React from "react";
import styled from "styled-components";
import images from "../data/images";

const IndustriesSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background-color: var(--background);
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const Container = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Title = styled.h2`
  color: var(--primary-dark);
  margin-bottom: var(--spacing-sm);
`;

const Subtitle = styled.p`
  color: var(--gray);
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto;
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IndustryCard = styled.div`
  position: relative;
  height: 320px;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    
    .industry-overlay {
      background-color: rgba(0, 0, 0, 0.4);
    }
    
    .industry-content {
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const IndustryImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const IndustryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  transition: background-color 0.3s ease;
`;

const IndustryContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-lg);
  color: var(--white);
  z-index: 2;
  transform: translateY(50px);
  transition: transform 0.3s ease;
`;

const IndustryTitle = styled.h3`
  color: var(--white);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
`;

const IndustryDescription = styled.p`
  color: var(--white);
  margin-bottom: 0;
`;

const SearchServicesContainer = styled.div`
  margin-top: var(--spacing-2xl);
  padding: var(--spacing-xl) var(--spacing-lg);
  background-color: var(--primary-dark);
  border-radius: var(--border-radius-md);
  text-align: center;
  color: var(--white);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const SearchServicesTitle = styled.h3`
  color: var(--white);
  margin-bottom: var(--spacing-md);
  font-size: 1.75rem;
`;

const SearchServicesButton = styled.a`
  display: inline-block;
  background-color: var(--white);
  color: var(--primary-dark);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--gray-light);
    transform: translateY(-2px);
  }
`;

const Industries = ({ messages }) => {
  return (
    <IndustriesSection id="industries">
      <Container>
        <SectionHeader>
          <Title className="slide-in-left">{messages.industriesTitle}</Title>
          <Subtitle className="slide-in-right">{messages.industriesSubtitle}</Subtitle>
        </SectionHeader>
        
        <IndustryGrid>
          <IndustryCard className="fade-in">
            <IndustryImage imageUrl={images.automotiveManufacturing[0]} />
            <IndustryOverlay className="industry-overlay" />
            <IndustryContent className="industry-content">
              <IndustryTitle>{messages.automotiveTitle}</IndustryTitle>
              <IndustryDescription>{messages.automotiveDesc}</IndustryDescription>
            </IndustryContent>
          </IndustryCard>
          
          <IndustryCard className="fade-in">
            <IndustryImage imageUrl={images.energyComponents[0]} />
            <IndustryOverlay className="industry-overlay" />
            <IndustryContent className="industry-content">
              <IndustryTitle>{messages.energyTitle}</IndustryTitle>
              <IndustryDescription>{messages.energyDesc}</IndustryDescription>
            </IndustryContent>
          </IndustryCard>
          
          <IndustryCard className="fade-in">
            <IndustryImage imageUrl={images.telecomEquipment[0]} />
            <IndustryOverlay className="industry-overlay" />
            <IndustryContent className="industry-content">
              <IndustryTitle>{messages.telecomTitle}</IndustryTitle>
              <IndustryDescription>{messages.telecomDesc}</IndustryDescription>
            </IndustryContent>
          </IndustryCard>
          
          <IndustryCard className="fade-in">
            <IndustryImage imageUrl={images.aluminumParts[0]} />
            <IndustryOverlay className="industry-overlay" />
            <IndustryContent className="industry-content">
              <IndustryTitle>{messages.marineTitle}</IndustryTitle>
              <IndustryDescription>{messages.marineDesc}</IndustryDescription>
            </IndustryContent>
          </IndustryCard>
        </IndustryGrid>
        
        <SearchServicesContainer className="slide-in-left">
          <SearchServicesTitle>{messages.searchServices}</SearchServicesTitle>
          <SearchServicesButton href="/contact">
            {messages.cta}
          </SearchServicesButton>
        </SearchServicesContainer>
      </Container>
    </IndustriesSection>
  );
};

export default Industries;
