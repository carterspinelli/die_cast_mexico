import React from "react";
import styled from "styled-components";

// Main facility stats container
const StatsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

// Gradient background that creates the curved shape
const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #a78bfa 0%, #3b82f6 50%, #34d399 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
  z-index: 1;
`;

// Content positioned over the background
const StatsContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
  color: white;
`;

// Stat groups with consistent styling
const StatGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const StatTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 0.25rem 0;
  color: ${props => props.dark ? '#1F2937' : 'white'};
`;

const StatValue = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: ${props => props.dark ? '#1F2937' : 'white'};
`;

const StatDescription = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: ${props => props.dark ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
`;

const FacilityStats = () => {
  return (
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
  );
};

export default FacilityStats;