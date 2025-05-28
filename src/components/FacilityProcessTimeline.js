import React from 'react';
import styled from 'styled-components';
import { 
  ContainerScroll, 
  ContainerSticky, 
  ProcessCard, 
  ProcessCardTitle, 
  ProcessNumber, 
  ProcessCardBody, 
  ProcessTitle, 
  ProcessDescription 
} from './ui/process-timeline';

const TimelineSection = styled.div`
  margin: 4rem 0;
`;

const TimelineHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const TimelineTitle = styled.h2`
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

const TimelineSubtitle = styled.p`
  max-width: 52ch;
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 auto;
  line-height: 1.6;
`;

const FACILITY_PROCESSES = [
  {
    id: "process-1",
    title: "Design & Engineering",
    description: "Our expert engineers work closely with clients to design optimal die casting solutions. Using advanced CAD software and simulation tools, we ensure perfect part geometry and manufacturability before production begins.",
  },
  {
    id: "process-2", 
    title: "Tool Manufacturing",
    description: "We manufacture high-precision die casting tools in-house using state-of-the-art CNC machining centers. Our tool makers ensure every die meets exact specifications for consistent, high-quality production runs.",
  },
  {
    id: "process-3",
    title: "Die Casting Production",
    description: "Our automated die casting cells operate 24/7 with precision control systems. From 125 to 3,000 tons capacity, we handle any project scale while maintaining IATF 16949 quality standards throughout production.",
  },
  {
    id: "process-4",
    title: "Quality & Finishing",
    description: "Every part undergoes rigorous quality inspection and finishing processes. From CNC machining to powder coating and assembly, we deliver finished components ready for your production line.",
  },
];

export function FacilityProcessTimeline() {
  return (
    <TimelineSection>
      <ContainerScroll
        style={{
          background: "radial-gradient(30% 80% at 0% 70%, #4338ca 0%, #3730a3 22.92%, #312e81 42.71%, #0f172a 88.54%)",
          borderRadius: "1rem",
          padding: "3rem 1.5rem",
        }}
      >
        <TimelineHeader>
          <TimelineTitle>
            Our Manufacturing
            <br />
            Process Excellence
          </TimelineTitle>
          <TimelineSubtitle>
            From initial design to final delivery, we maintain the highest standards 
            of precision and quality throughout our integrated manufacturing process.
          </TimelineSubtitle>
        </TimelineHeader>

        <ContainerSticky style={{ top: '4rem' }}>
          {FACILITY_PROCESSES.map((process, index) => (
            <ProcessCard
              key={process.id}
              itemsLength={FACILITY_PROCESSES.length}
              index={index}
            >
              <ProcessCardTitle>
                <ProcessNumber>
                  {String(index + 1).padStart(2, "0")}
                </ProcessNumber>
              </ProcessCardTitle>
              <ProcessCardBody>
                <ProcessTitle>{process.title}</ProcessTitle>
                <ProcessDescription>{process.description}</ProcessDescription>
              </ProcessCardBody>
            </ProcessCard>
          ))}
        </ContainerSticky>
      </ContainerScroll>
    </TimelineSection>
  );
}