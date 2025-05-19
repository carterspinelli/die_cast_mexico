import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Industries from "../components/Industries";
import styled from "styled-components";
import translations from "../data/translations";
import images from "../data/images";

const AboutSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background-color: var(--white);
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const Container = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Title = styled.h2`
  color: var(--primary-dark);
  margin-bottom: var(--spacing-sm);
`;

const Subtitle = styled.p`
  color: var(--gray);
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  height: 400px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-md);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: var(--spacing-lg);
  }
`;

const AboutText = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const AboutDescription = styled.p`
  margin-bottom: var(--spacing-md);
  color: var(--gray-dark);
  font-size: 1.125rem;
`;

const AboutMission = styled.div`
  background-color: var(--gray-light);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  border-left: 4px solid var(--primary);
  margin-top: var(--spacing-lg);
  font-style: italic;
  color: var(--gray-dark);
`;

const FacilitySection = styled.section`
  padding: var(--spacing-2xl) 0;
  background-color: var(--background);
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: var(--white);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  color: var(--white);
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const StatTitle = styled.h3`
  color: var(--primary-dark);
  margin-bottom: var(--spacing-sm);
`;

const StatDescription = styled.p`
  color: var(--gray);
`;

const IndexPage = () => {
  const intl = useIntl();
  const locale = intl.locale;
  const messages = translations[locale];
  
  return (
    <Layout>
      <SEO 
        title="Die Cast Mexico" 
        description="Professional die casting services in Mexico for automotive, energy, telecommunications, and marine industries."
      />
      
      <Hero messages={messages} />
      
      <Services messages={messages} />
      
      <FacilitySection>
        <Container>
          <SectionHeader>
            <Title className="slide-in-left">{messages.facilityTitle}</Title>
            <Subtitle className="slide-in-right">{messages.facilitySubtitle}</Subtitle>
          </SectionHeader>
          
          <StatsGrid>
            <StatCard className="fade-in">
              <StatIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </StatIcon>
              <StatTitle>{messages.capacityTitle}</StatTitle>
              <StatDescription>{messages.capacityDesc}</StatDescription>
            </StatCard>
            
            <StatCard className="fade-in">
              <StatIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </StatIcon>
              <StatTitle>{messages.technologyTitle}</StatTitle>
              <StatDescription>{messages.technologyDesc}</StatDescription>
            </StatCard>
            
            <StatCard className="fade-in">
              <StatIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </StatIcon>
              <StatTitle>{messages.staffTitle}</StatTitle>
              <StatDescription>{messages.staffDesc}</StatDescription>
            </StatCard>
          </StatsGrid>
        </Container>
      </FacilitySection>
      
      <Industries messages={messages} />
      
      <AboutSection id="about">
        <Container>
          <SectionHeader>
            <Title className="slide-in-left">{messages.aboutTitle}</Title>
            <Subtitle className="slide-in-right">{messages.aboutSubtitle}</Subtitle>
          </SectionHeader>
          
          <AboutContent>
            <AboutImage 
              className="slide-in-left"
              imageUrl={images.dieCastingMachinery[1]} 
            />
            
            <AboutText className="slide-in-right">
              <AboutDescription>
                {messages.aboutDesc}
              </AboutDescription>
              
              <AboutMission>
                {messages.mission}
              </AboutMission>
            </AboutText>
          </AboutContent>
        </Container>
      </AboutSection>
    </Layout>
  );
};

export default IndexPage;
