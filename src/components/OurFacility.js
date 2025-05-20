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

// Facility Stats Components
const StatsContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #a78bfa 0%, #3b82f6 50%, #34d399 100%);
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 100% 100%);
  z-index: 1;
`;

const StatsContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
`;

const StatGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const StatTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 0.25rem 0;
  color: #1F2937;
`;

const StatValue = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: #1F2937;
`;

const StatDescription = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: rgba(31, 41, 55, 0.8);
`;

const OurFacility = () => {
  const { messages } = useLanguage();
  
  return (
    <FacilitySection id="facility">
      <Container>
        <SectionHeader>
          <Title className="slide-in-left">{messages.facilityTitle || "Our Facility"}</Title>
          <Subtitle className="slide-in-right">
            {messages.facilitySubtitle || "State-of-the-art equipment and experienced professionals"}
          </Subtitle>
        </SectionHeader>
        
        <StatsContainer>
          <GradientBackground />
          <StatsContent>
            <StatGroup>
              <StatTitle>Manufacturing Capacity</StatTitle>
              <StatValue>35,000 m²</StatValue>
              <StatDescription>Total facility size serving North America</StatDescription>
            </StatGroup>
            
            <StatGroup>
              <StatTitle>Die Cast Machines</StatTitle>
              <StatValue>24</StatValue>
              <StatDescription>High pressure casting machines</StatDescription>
            </StatGroup>
            
            <StatGroup>
              <StatTitle>Capacity Utilization</StatTitle>
              <StatValue>85%</StatValue>
              <StatDescription>Average monthly utilization</StatDescription>
            </StatGroup>
            
            <StatGroup>
              <StatTitle>CNC Machining Centers</StatTitle>
              <StatValue>18</StatValue>
              <StatDescription>Precision machining equipment</StatDescription>
            </StatGroup>
            
            <StatGroup>
              <StatTitle>On-Time Delivery Rate</StatTitle>
              <StatValue>99.7%</StatValue>
              <StatDescription>Based on over 1,200 shipments annually to automotive and industrial clients</StatDescription>
            </StatGroup>
          </StatsContent>
        </StatsContainer>
      </Container>
    </FacilitySection>
  );
};

export default OurFacility;