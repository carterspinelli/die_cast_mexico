import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProcessSection = styled.div`
  margin: 4rem 0;
  background: radial-gradient(30% 80% at 0% 70%, #4338ca 0%, #3730a3 22.92%, #312e81 42.71%, #0f172a 88.54%);
  border-radius: 1rem;
  padding: 3rem 1.5rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 120vh;
`;

const ProcessHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const ProcessTitle = styled.h2`
  background: linear-gradient(90deg, rgba(79, 70, 229, 0.6), #f8fafc, rgba(79, 70, 229, 0.6));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ProcessSubtitle = styled.p`
  max-width: 52ch;
  font-size: 0.875rem;
  color: #cbd5e1;
  margin: 0 auto;
  line-height: 1.6;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 4rem;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
`;

const ProcessCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  min-width: 70%;
  max-width: 70%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    min-width: 90%;
    max-width: 90%;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ProcessCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProcessNumber = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #4338ca;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ProcessCardTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 600;
  color: #f8fafc;
  margin: 0;
  line-height: 1.3;
`;

const ProcessDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
  opacity: 0.8;
`;

const FACILITY_PROCESSES = [
  {
    id: 1,
    title: "Design & Engineering",
    description: "Expert engineers design optimal die casting solutions using advanced CAD software and simulation tools for perfect manufacturability.",
  },
  {
    id: 2, 
    title: "Tool Manufacturing",
    description: "High-precision die casting tools manufactured in-house using state-of-the-art CNC machining centers for exact specifications.",
  },
  {
    id: 3,
    title: "Die Casting Production",
    description: "Automated die casting cells operate 24/7 with precision control systems, handling 125 to 3,000 tons capacity projects.",
  },
  {
    id: 4,
    title: "Quality & Finishing",
    description: "Rigorous quality inspection and finishing processes including CNC machining, powder coating, and final assembly.",
  },
];

export function FacilityProcess() {
  return (
    <ProcessSection>
      <ProcessHeader>
        <ProcessTitle>
          Our Manufacturing
          <br />
          Process Excellence
        </ProcessTitle>
        <ProcessSubtitle>
          From initial design to final delivery, we maintain the highest standards 
          of precision and quality throughout our integrated manufacturing process.
        </ProcessSubtitle>
      </ProcessHeader>

      <StickyContainer>
        {FACILITY_PROCESSES.map((process, index) => {
          return (
            <ProcessCard
              key={process.id}
              initial={{ x: index > 0 ? 1200 : 0 }}
              animate={{ x: 0 }}
              transition={{ 
                delay: index * 0.5,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <ProcessCardHeader>
                <ProcessNumber>
                  {String(index + 1).padStart(2, "0")}
                </ProcessNumber>
                <ProcessCardTitle>{process.title}</ProcessCardTitle>
              </ProcessCardHeader>
              <ProcessDescription>{process.description}</ProcessDescription>
            </ProcessCard>
          );
        })}
      </StickyContainer>
    </ProcessSection>
  );
}