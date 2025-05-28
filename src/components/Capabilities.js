import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const CapabilitiesSection = styled.section`
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
  color: #0c1220;
  margin-bottom: 1rem;
  font-weight: 700;
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
  margin-top: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

const StatsCard = styled.div`
  background: linear-gradient(135deg, #0a0f1b 0%, #1a2332 25%, #2c3e50 75%, #4a5568 100%);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(10, 15, 27, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    opacity: 0.4;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
  transform: translateY(0);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
  }
`;

const StatsCardContent = styled.div`
  position: relative;
  z-index: 1;
`;

const StatsLabel = styled.div`
  color: #94a3b8;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
`;

const StatsValue = styled.div`
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
  font-family: 'Arial', sans-serif;
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const StatsUnit = styled.div`
  color: #60a5fa;
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// Odometer effect hook
const useOdometer = (target, duration = 2000, isVisible = false) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);
  
  return current;
};

// Intersection Observer hook
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  return [ref, isVisible];
};

// Helper function to handle translations
const translate = (messages, key, fallback) => {
  if (!messages) return fallback;
  return messages[key] || fallback;
};

const TechnicalCapabilities = () => {
  const { messages } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver(0.3);
  
  // Odometer values
  const tonnageMin = useOdometer(350, 2000, isVisible);
  const tonnageMax = useOdometer(2000, 2500, isVisible);
  const partWeightMin = useOdometer(0.1, 1500, isVisible);
  const partWeightMax = useOdometer(12, 2000, isVisible);

  return (
    <CapabilitiesSection>
      <Container>
        <SectionHeader data-aos="fade-up">
          <Title>
            {translate(messages, 'capabilitiesTitle', 'Our Technical Capabilities')}
          </Title>
          <Subtitle>
            {translate(messages, 'capabilitiesSubtitle', 'State-of-the-art equipment and precision engineering')}
          </Subtitle>
        </SectionHeader>
        
        <StatsGrid ref={ref}>
          <StatsCard data-aos="fade-up" data-aos-delay="200">
            <StatsCardContent>
              <StatsLabel>
                {translate(messages, 'tonnageCapacity', 'Tonnage Capacity')}
              </StatsLabel>
              <StatsValue>
                {tonnageMin} - {tonnageMax.toLocaleString()}
              </StatsValue>
              <StatsUnit>
                {translate(messages, 'tonnageUnit', 'Tons')}
              </StatsUnit>
            </StatsCardContent>
          </StatsCard>
          
          <StatsCard data-aos="fade-up" data-aos-delay="400">
            <StatsCardContent>
              <StatsLabel>
                {translate(messages, 'partWeight', 'Part Weight')}
              </StatsLabel>
              <StatsValue>
                {partWeightMin} - {partWeightMax}
              </StatsValue>
              <StatsUnit>
                {translate(messages, 'partWeightUnit', 'kg')}
              </StatsUnit>
            </StatsCardContent>
          </StatsCard>
        </StatsGrid>
      </Container>
    </CapabilitiesSection>
  );
};

export default TechnicalCapabilities;