import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const CapabilitiesSection = styled.section`
  padding: 5rem 1rem;
  background-color: white;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const SpecsCard = styled.div`
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MachineSpecsCard = styled(SpecsCard)`
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
`;

const QualitySpecsCard = styled(SpecsCard)`
  background: linear-gradient(135deg, #F0F8FF 0%, #E6E6FA 100%);
`;

const MetricsCard = styled(SpecsCard)`
  background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%);
`;

const PerformanceCard = styled(SpecsCard)`
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const CardValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const SpecsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const SpecItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const SpecLabel = styled.span`
  font-weight: 500;
  color: #555;
`;

const SpecValue = styled.span`
  font-weight: 600;
  color: #333;
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
          {/* Machine Specifications Card */}
          <MachineSpecsCard>
            <CardTitle>{translations.machineTitle}</CardTitle>
            <CardValue>400T</CardValue>
            <CardDescription>{translations.tonnageCapacity}: {translations.tonnageRange}</CardDescription>
            <SpecsList>
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
          </MachineSpecsCard>
          
          {/* Quality Specifications Card */}
          <QualitySpecsCard>
            <CardTitle>{translations.qualitySpecsTitle}</CardTitle>
            <CardValue>ISO 9001</CardValue>
            <CardDescription>{translations.dimensionalTolerance}: {translations.dimensionalToleranceValue}</CardDescription>
            <SpecsList>
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
          </QualitySpecsCard>
          
          {/* Production Metrics Card */}
          <MetricsCard>
            <CardTitle>{translations.productionMetricsTitle}</CardTitle>
            <CardValue>97.5%</CardValue>
            <CardDescription>{translations.productionEfficiency}</CardDescription>
            <SpecsList>
              <SpecItem>
                <SpecLabel>{translations.cycleTime}</SpecLabel>
                <SpecValue>{translations.cycleTimeValue}</SpecValue>
              </SpecItem>
              <SpecItem>
                <SpecLabel>{translations.uptime}</SpecLabel>
                <SpecValue>{translations.uptimeValue}</SpecValue>
              </SpecItem>
            </SpecsList>
          </MetricsCard>
          
          {/* Performance Standards Card */}
          <PerformanceCard>
            <CardTitle>{translations.performanceTitle}</CardTitle>
            <CardValue>NADCA</CardValue>
            <CardDescription>{translations.qualityStandards}</CardDescription>
            <SpecsList>
              <SpecItem>
                <SpecLabel>{translations.defectRate}</SpecLabel>
                <SpecValue>{translations.defectRateValue}</SpecValue>
              </SpecItem>
              <SpecItem>
                <SpecLabel>{translations.leadTime}</SpecLabel>
                <SpecValue>{translations.leadTimeValue}</SpecValue>
              </SpecItem>
            </SpecsList>
          </PerformanceCard>
        </SpecsGrid>
      </Container>
    </CapabilitiesSection>
  );
};

export default Capabilities;