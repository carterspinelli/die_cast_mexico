import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Capabilities from "../components/Capabilities";
import IndustriesTabsSimple from "../components/IndustriesTabsSimple";
import FacilityHero from "../components/FacilityHero";
import KeyCollaborations from "../components/KeyCollaborations";
import styled from "styled-components";
import images from "../data/images";
import { useLanguage } from "../context/LanguageContext";

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
  const { messages } = useLanguage();
  
  return (
    <Layout>
      <SEO 
        title="Die Cast Mexico" 
        description="Professional die casting services in Mexico for automotive, energy, telecommunications, and marine industries."
      />
      
      <Hero messages={messages} />
      
      <Services messages={messages} />
      
      <FacilityHero />
      
      <Capabilities />
      
      <IndustriesTabsSimple />
      
      <KeyCollaborations />
      
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
