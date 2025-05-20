import React from "react";
import styled, { keyframes } from "styled-components";
import { AnimatedGradient } from "./animated-gradient-with-svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  background: white;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out ${props => props.delay}s forwards;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem;
  backdrop-filter: blur(4px);
  
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out ${props => props.delay}s forwards;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CardValue = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--color-secondary);
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out ${props => props.delay}s forwards;
  
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const CardSubtitle = styled.p`
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out ${props => props.delay}s forwards;
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  height: 100%;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SpanTwo = styled.div`
  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

const SpanThree = styled.div`
  @media (min-width: 768px) {
    grid-column: span 3;
  }
`;

// Facility Card Component with Animated Gradient Background
const FacilityCard = ({ title, value, subtitle, colors, delay = 0 }) => {
  return (
    <CardContainer delay={delay}>
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <ContentWrapper>
        <CardTitle delay={delay + 0.3}>{title}</CardTitle>
        <CardValue delay={delay + 0.4}>{value}</CardValue>
        {subtitle && (
          <CardSubtitle delay={delay + 0.5}>{subtitle}</CardSubtitle>
        )}
      </ContentWrapper>
    </CardContainer>
  );
};

const FacilityStats = () => {
  return (
    <GridContainer>
      <CardGrid>
        <SpanTwo>
          <FacilityCard
            title="Manufacturing Capacity"
            value="35,000 m²"
            subtitle="Total facility size serving North America"
            colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
            delay={0.2}
          />
        </SpanTwo>
        <FacilityCard
          title="Die Cast Machines"
          value="24"
          subtitle="High pressure casting machines"
          colors={["#60A5FA", "#34D399", "#93C5FD"]}
          delay={0.4}
        />
        <FacilityCard
          title="Capacity Utilization"
          value="85%"
          subtitle="Average monthly utilization"
          colors={["#F59E0B", "#A78BFA", "#FCD34D"]}
          delay={0.6}
        />
        <SpanTwo>
          <FacilityCard
            title="CNC Machining Centers"
            value="18"
            subtitle="Precision machining equipment"
            colors={["#3B82F6", "#A78BFA", "#FBCFE8"]}
            delay={0.8}
          />
        </SpanTwo>
        <SpanThree>
          <FacilityCard
            title="On-Time Delivery Rate"
            value="99.7%"
            subtitle="Based on over 1,200 shipments annually to automotive and industrial clients"
            colors={["#EC4899", "#F472B6", "#3B82F6"]}
            delay={1}
          />
        </SpanThree>
      </CardGrid>
    </GridContainer>
  );
};

export default FacilityStats;