import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { AnimatedGradient } from "./ui/animated-gradient";

const MetricsSection = styled.section`
  padding: 4rem 1rem;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  height: auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    min-height: 400px;
  }
`;

const MetricCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: 200px;
  background: #ffffff;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  
  @media (min-width: 768px) {
    height: 100%;
    
    &.large {
      grid-column: span 2;
    }
  }
`;

const CardContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(4px);
  
  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const MetricTitle = styled(motion.h3)`
  font-size: 1rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const MetricValue = styled(motion.p)`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e293b;
  
  @media (min-width: 640px) {
    font-size: 3rem;
  }
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const MetricSubtitle = styled(motion.p)`
  font-size: 0.875rem;
  color: rgba(30, 41, 59, 0.8);
  line-height: 1.4;
`;

const BentoCard = ({
  title,
  value,
  subtitle,
  colors,
  delay,
  large = false,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <MetricCard
      className={large ? 'large' : ''}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <CardContent
        variants={container}
        initial="hidden"
        animate="show"
      >
        <MetricTitle variants={item}>
          {title}
        </MetricTitle>
        <MetricValue variants={item}>
          {value}
        </MetricValue>
        {subtitle && (
          <MetricSubtitle variants={item}>
            {subtitle}
          </MetricSubtitle>
        )}
      </CardContent>
    </MetricCard>
  );
};

export const FacilityMetrics = () => {
  return (
    <MetricsSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Facility Excellence in Numbers</SectionTitle>
          <SectionSubtitle>
            Our state-of-the-art facility delivers outstanding results through advanced technology and skilled craftsmanship
          </SectionSubtitle>
        </SectionHeader>
        
        <MetricsGrid>
          <BentoCard
            title="Overview"
            value="125+"
            subtitle="Workforce • Up to 250ton/month aluminum ingots • AlSi12(Fe), A380, A360, A413, ADC12 alloys"
            colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
            delay={0.2}
            large={true}
          />
          <BentoCard
            title="Die Casting"
            value="8"
            subtitle="Full automatic manufacturing cells"
            colors={["#10B981", "#34D399", "#6EE7B7"]}
            delay={0.4}
          />
          <BentoCard
            title="CNC Machining"
            value="19"
            subtitle="Horizontal 4-axis machines"
            colors={["#F59E0B", "#FBBF24", "#FCD34D"]}
            delay={0.6}
          />
          <BentoCard
            title="Manufacturing"
            value="FIP"
            subtitle="Precision gasket application • Mechanical assembly with dowel pins, labels, helicoils, plugs"
            colors={["#8B5CF6", "#A78BFA", "#C4B5FD"]}
            delay={0.8}
            large={true}
          />
          <BentoCard
            title="Surface Finishing"
            value="Multi"
            subtitle="Powder & liquid painting by Akzo Nobel, Cardinal, Sherwin Williams • Nickel plating • Tri-chrome passivation Surtec 650®"
            colors={["#EC4899", "#F472B6", "#F9A8D4"]}
            delay={1}
            large={true}
          />
        </MetricsGrid>
      </Container>
    </MetricsSection>
  );
};