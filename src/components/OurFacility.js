import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const FacilitySection = styled.section`
  padding: 4rem 1rem 6rem;
  background-color: #f8f9fa;
  
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

// Main facility stats container styled to match the reference image exactly
const FacilityCard = styled.div`
  position: relative;
  width: 100%;
  min-height: 550px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

// The diagonal gradient background overlay
const DiagonalGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #9c6eff 0%, #3c7cf6 50%, #34d399 100%);
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 0;
`;

// Content container with padding
const StatsContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 2.5rem;
  width: 100%;
  height: 100%;
`;

// Individual stat item 
const StatItem = styled.div`
  margin-bottom: 1.75rem;
`;

// Stat title (smaller text)
const StatTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: #1f2937;
`;

// Stat value (large number)
const StatValue = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0.25rem 0;
  color: #111827;
`;

// Description text
const StatDescription = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: #4b5563;
`;

const OurFacility = () => {
  const { messages } = useLanguage();
  
  return (
    <FacilitySection id="facility">
      <Container>
        <SectionHeader>
          <Title>{messages.facilityTitle || "Our Facility"}</Title>
          <Subtitle>
            {messages.facilitySubtitle || "State-of-the-art equipment and experienced professionals"}
          </Subtitle>
        </SectionHeader>
        
        <FacilityCard>
          <DiagonalGradient />
          <StatsContent>
            <StatItem>
              <StatTitle>Manufacturing Capacity</StatTitle>
              <StatValue>35,000 m²</StatValue>
              <StatDescription>Total facility size serving North America</StatDescription>
            </StatItem>
            
            <StatItem>
              <StatTitle>Die Cast Machines</StatTitle>
              <StatValue>24</StatValue>
              <StatDescription>High pressure casting machines</StatDescription>
            </StatItem>
            
            <StatItem>
              <StatTitle>Capacity Utilization</StatTitle>
              <StatValue>85%</StatValue>
              <StatDescription>Average monthly utilization</StatDescription>
            </StatItem>
            
            <StatItem>
              <StatTitle>CNC Machining Centers</StatTitle>
              <StatValue>18</StatValue>
              <StatDescription>Precision machining equipment</StatDescription>
            </StatItem>
            
            <StatItem>
              <StatTitle>On-Time Delivery Rate</StatTitle>
              <StatValue>99.7%</StatValue>
              <StatDescription>Based on over 1,200 shipments annually to automotive and industrial clients</StatDescription>
            </StatItem>
          </StatsContent>
        </FacilityCard>
      </Container>
    </FacilitySection>
  );
};

export default OurFacility;