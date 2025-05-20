import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import FacilityStats from "./ui/facility-cards";

const FacilitySection = styled.section`
  padding: 4rem 1rem 6rem;
  background-color: var(--color-white);
  
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

const StatsContainer = styled.div`
  margin-top: 2rem;
`;

const OurFacility = () => {
  const { messages } = useLanguage();
  
  return (
    <FacilitySection id="facility">
      <Container>
        <SectionHeader>
          <Title className="slide-in-left">{messages.facilityTitle || "Our Facility"}</Title>
          <Subtitle className="slide-in-right">
            {messages.facilitySubtitle || "State-of-the-art manufacturing capabilities serving North America"}
          </Subtitle>
        </SectionHeader>
        
        <StatsContainer>
          <FacilityStats />
        </StatsContainer>
      </Container>
    </FacilitySection>
  );
};

export default OurFacility;