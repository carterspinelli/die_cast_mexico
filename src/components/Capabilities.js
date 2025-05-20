import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { AnimatedGradient } from "./ui/animated-gradient-with-svg";

const CapabilitiesSection = styled.section`
  padding: 5rem 1rem;
  background-color: var(--color-light-bg);
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
  color: var(--color-primary);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 700px;
  margin: 0 auto;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SpecsCard = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  z-index: 1;
`;

const SpecsTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  z-index: 2;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--color-accent);
  }
`;

const SpecsList = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  z-index: 2;
`;

const SpecItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const SpecLabel = styled.span`
  font-weight: 500;
  color: var(--color-text);
  position: relative;
  z-index: 2;
`;

const SpecValue = styled.span`
  font-weight: 600;
  color: var(--color-secondary);
  position: relative;
  z-index: 2;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Capabilities = () => {
  const { messages: translations } = useLanguage();
  
  return (
    <CapabilitiesSection>
      <Container>
        <SectionHeader>
          <Title>{translations.capabilitiesTitle}</Title>
          <Subtitle>{translations.capabilitiesSubtitle}</Subtitle>
        </SectionHeader>
        <SpecsGrid>
          <SpecsCard>
            <AnimatedGradient colors={["#3B82F6", "#60A5FA", "#93C5FD"]} speed={10} />
            <CardContent>
              <SpecsTitle>{translations.machineTitle}</SpecsTitle>
              <SpecsList>
                <SpecItem>
                  <SpecLabel>{translations.tonnageCapacity}</SpecLabel>
                  <SpecValue>{translations.tonnageRange}</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>{translations.shotWeight}</SpecLabel>
                  <SpecValue>{translations.shotWeightRange}</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>{translations.partWeight}</SpecLabel>
                  <SpecValue>{translations.partWeightRange}</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>{translations.dieSize}</SpecLabel>
                  <SpecValue>{translations.dieSizeRange}</SpecValue>
                </SpecItem>
              </SpecsList>
            </CardContent>
          </SpecsCard>
          <SpecsCard>
            <AnimatedGradient colors={["#60A5FA", "#34D399", "#93C5FD"]} speed={12} />
            <CardContent>
              <SpecsTitle>{translations.qualitySpecsTitle}</SpecsTitle>
              <SpecsList>
                <SpecItem>
                  <SpecLabel>{translations.dimensionalTolerance}</SpecLabel>
                  <SpecValue>{translations.dimensionalToleranceValue}</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>{translations.surfaceFinish}</SpecLabel>
                  <SpecValue>{translations.surfaceFinishValue}</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>{translations.wallThickness}</SpecLabel>
                  <SpecValue>{translations.wallThicknessValue}</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>{translations.materialPurity}</SpecLabel>
                  <SpecValue>{translations.materialPurityValue}</SpecValue>
                </SpecItem>
              </SpecsList>
            </CardContent>
          </SpecsCard>
        </SpecsGrid>
      </Container>
    </CapabilitiesSection>
  );
};

export default Capabilities;