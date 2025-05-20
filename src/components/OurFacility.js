import React from "react";
import styled from "styled-components";
import { BentoCard } from "./ui/bento-card";
import translations from "../data/translations";

const FacilitySection = styled.section`
  padding: 4rem 1rem 6rem;
  background-color: var(--color-light-bg);
  
  @media (max-width: 768px) {
    padding: 3rem 1rem 5rem;
  }
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
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  min-height: 180px;
  border-radius: 0.5rem;
  overflow: hidden;
  
  &.production-area {
    grid-column: span 2;
  }
  
  &.machine-count {
    grid-column: span 2;
  }
  
  &.experience {
    grid-column: span 2;
  }
  
  &.quality-rating {
    grid-column: span 2;
  }
  
  @media (max-width: 640px) {
    &.production-area,
    &.machine-count,
    &.experience,
    &.quality-rating {
      grid-column: span 1;
    }
  }
`;

const OurFacility = () => {
  // Get current language from localStorage or default to English
  const userLang = typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en';
  const messages = translations[userLang];
  
  const facilityData = [
    {
      title: messages?.productionAreaTitle || "Production Area",
      value: "5,000 m²",
      subtitle: messages?.productionAreaSubtitle || "State-of-the-art factory space",
      colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
      className: "production-area",
      delay: 0.2
    },
    {
      title: messages?.machineCountTitle || "Die Cast Machines",
      value: "12",
      subtitle: messages?.machineCountSubtitle || "High-precision equipment",
      colors: ["#60A5FA", "#34D399", "#93C5FD"],
      className: "machine-count",
      delay: 0.4
    },
    {
      title: messages?.experienceTitle || "Years of Experience",
      value: "25+",
      subtitle: messages?.experienceSubtitle || "Industry expertise since 1998",
      colors: ["#F59E0B", "#A78BFA", "#FCD34D"],
      className: "experience",
      delay: 0.6
    },
    {
      title: messages?.qualityRatingTitle || "Quality Rating",
      value: "4.9/5",
      subtitle: messages?.qualityRatingSubtitle || "ISO 9001 certified processes",
      colors: ["#EC4899", "#F472B6", "#3B82F6"],
      className: "quality-rating",
      delay: 0.8
    }
  ];
  
  return (
    <FacilitySection id="facility">
      <Container>
        <SectionHeader>
          <Title className="slide-in-left">{messages?.facilityTitle || "Our Facility"}</Title>
          <Subtitle className="slide-in-right">{messages?.facilitySubtitle || "State-of-the-art manufacturing capabilities"}</Subtitle>
        </SectionHeader>
        
        <BentoGrid>
          {facilityData.map((item, index) => (
            <GridItem key={index} className={item.className}>
              <BentoCard
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
                colors={item.colors}
                delay={item.delay}
              />
            </GridItem>
          ))}
        </BentoGrid>
      </Container>
    </FacilitySection>
  );
};

export default OurFacility;