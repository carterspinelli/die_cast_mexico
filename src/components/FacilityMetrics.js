import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(180px, auto);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  padding: 2rem;
  height: 100%;
  
  &.blue {
    background: linear-gradient(120deg, #3B82F6, #60A5FA, #93C5FD);
  }
  
  &.green {
    background: linear-gradient(120deg, #10B981, #34D399, #6EE7B7);
  }
  
  &.amber {
    background: linear-gradient(120deg, #F59E0B, #FBBF24, #FCD34D);
  }
  
  &.pink {
    background: linear-gradient(120deg, #EC4899, #F472B6, #FBCFE8);
  }
`;

const MetricTitle = styled.h3`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

const MetricValue = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.75rem;
`;

const MetricSubtitle = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
`;

const FacilityMetrics = () => {
  const metrics = [
    {
      title: "Production Area",
      value: "5,000 m²",
      subtitle: "State-of-the-art factory space",
      className: "blue",
    },
    {
      title: "Die Cast Machines",
      value: "12",
      subtitle: "High-precision equipment",
      className: "green",
    },
    {
      title: "Years of Experience",
      value: "25+",
      subtitle: "Industry expertise since 1998",
      className: "amber",
    },
    {
      title: "Quality Rating",
      value: "4.9/5",
      subtitle: "ISO 9001 certified processes",
      className: "pink",
    }
  ];

  return (
    <FacilitySection id="facility">
      <Container>
        <SectionHeader>
          <Title className="slide-in-left">Our Facility</Title>
          <Subtitle className="slide-in-right">
            State-of-the-art manufacturing capabilities
          </Subtitle>
        </SectionHeader>
        
        <MetricsGrid>
          {metrics.map((metric, index) => (
            <MetricCard 
              key={index}
              className={metric.className}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <MetricTitle>{metric.title}</MetricTitle>
              <MetricValue>{metric.value}</MetricValue>
              <MetricSubtitle>{metric.subtitle}</MetricSubtitle>
            </MetricCard>
          ))}
        </MetricsGrid>
      </Container>
    </FacilitySection>
  );
};

export default FacilityMetrics;