import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const Section = styled.section`
  padding: 5rem 0;
  background-color: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 3rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #0c1220 0%, #1e293b 100%);
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(12, 18, 32, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.02) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
`;

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
`;

const StatNumber = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
`;

// Helper function for handling translations
const translate = (messages, key, fallback) => {
  if (!messages) return fallback;
  return messages[key] || fallback;
};

// Slot machine number animation component
const AnimatedNumber = ({ finalValue, duration = 2000, delay = 0 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = parseInt(finalValue.replace(/[^\d]/g, ''));
      const increment = end / (duration / 50);
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCurrentValue(end);
          clearInterval(counter);
        } else {
          setCurrentValue(Math.floor(start));
        }
      }, 50);
      
      return () => clearInterval(counter);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [finalValue, duration, delay]);
  
  return (
    <StatNumber>
      {finalValue.includes('-') ? 
        `${currentValue} - ${parseInt(finalValue.split('-')[1])}` : 
        `${currentValue}${finalValue.replace(/\d/g, '')}`
      }
    </StatNumber>
  );
};

const TechnicalStats = () => {
  const { messages } = useLanguage();
  
  const stats = [
    {
      label: translate(messages, 'tonnageCapacity', "Tonnage Capacity"),
      value: "350 - 2000",
      unit: " tons",
      delay: 0
    },
    {
      label: translate(messages, 'partWeight', "Part Weight"),
      value: "0.1 - 12",
      unit: " kg",
      delay: 500
    }
  ];
  
  return (
    <Section>
      <Container>
        <Title data-aos="fade-up">
          {translate(messages, 'technicalStatsTitle', "Technical Capabilities")}
        </Title>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <StatValue>
                <AnimatedNumber 
                  finalValue={stat.value + stat.unit} 
                  delay={stat.delay}
                />
              </StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </Section>
  );
};

export default TechnicalStats;