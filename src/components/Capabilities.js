import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const CapabilitiesSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

const shimmer = keyframes`
  0% { 
    transform: translateX(-100%); 
  }
  50% { 
    transform: translateX(100%); 
  }
  100% { 
    transform: translateX(100%); 
  }
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 1rem;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.03) 50%, transparent 70%);
    animation: ${shimmer} 3s ease-in-out infinite;
  }
`;

const StatLabel = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 2;
`;

const StatValueContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const StatValue = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const slotSpin = keyframes`
  0% { 
    transform: rotateX(0deg); 
  }
  50% { 
    transform: rotateX(180deg); 
  }
  100% { 
    transform: rotateX(360deg); 
  }
`;

const StatUnit = styled.span`
  font-size: 1.5rem;
  color: #94a3b8;
  font-weight: 400;
  margin-left: 0.5rem;
`;

const SlotMachineNumber = styled.span`
  display: inline-block;
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  &.animate {
    animation: ${slotSpin} 2s ease-out;
  }
`;

// Slot machine animation component
const AnimatedNumber = ({ value, unit, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState("000");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      
      // Animate through random numbers before settling on final value
      let iterations = 0;
      const maxIterations = 20;
      
      const interval = setInterval(() => {
        iterations++;
        if (iterations >= maxIterations) {
          setDisplayValue(value);
          setIsAnimating(false);
          clearInterval(interval);
        } else {
          // Show random numbers during animation
          const randomValue = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
          setDisplayValue(randomValue);
        }
      }, 100);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <StatValue>
      <SlotMachineNumber className={isAnimating ? 'animate' : ''}>
        {displayValue}
      </SlotMachineNumber>
      <StatUnit>{unit}</StatUnit>
    </StatValue>
  );
};

const Capabilities = () => {
  const { messages: translations } = useLanguage();

  const stats = [
    {
      label: translations?.tonnageCapacity || "Tonnage Capacity",
      value: "1600",
      unit: "tons"
    },
    {
      label: translations?.partWeight || "Part Weight", 
      value: "12",
      unit: "kg"
    }
  ];

  return (
    <CapabilitiesSection id="capabilities" data-aos="fade-up">
      <Container>
        <SectionHeader>
          <Title data-aos="fade-up">
            {translations?.capabilitiesTitle || "Our Technical Capabilities"}
          </Title>
          <Subtitle data-aos="fade-up" data-aos-delay="100">
            {translations?.capabilitiesSubtitle || "State-of-the-art equipment and precision engineering"}
          </Subtitle>
        </SectionHeader>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} data-aos="zoom-in" data-aos-delay={200 + index * 100}>
              <StatLabel>{stat.label}</StatLabel>
              <StatValueContainer>
                <AnimatedNumber 
                  value={stat.value} 
                  unit={stat.unit} 
                  delay={500 + index * 200} 
                />
              </StatValueContainer>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </CapabilitiesSection>
  );
};

export default Capabilities;