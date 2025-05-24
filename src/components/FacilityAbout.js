import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";

const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  margin-bottom: 3.5rem;
  text-align: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`;

const Description = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.5;
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 1.75rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 620px;
  object-fit: cover;
  border-radius: 0.75rem;
`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  @media (min-width: 992px) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  background-color: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    width: 50%;
  }
  
  @media (min-width: 992px) {
    width: auto;
  }
`;

const InfoBoxLogo = styled.img`
  height: 3rem;
  width: auto;
  margin-right: auto;
`;

const InfoBoxTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const InfoBoxText = styled.p`
  color: #64748b;
`;





const AchievementsBox = styled.div`
  background-color: #0c1220;
  color: white;
  border-radius: 0.75rem;
  padding: 2.5rem 4rem;
  position: relative;
  overflow: hidden;
`;

const AchievementsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

// Helper for handling translations with fallbacks for both Spanish and English
const translate = (messages, key, fallback) => {
  if (!messages) return fallback;
  return messages[key] || fallback;
};

const AchievementsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  color: white;
`;

const AchievementsDescription = styled.p`
  max-width: 768px;
  color: #b4c6e0;
  font-size: 0.95rem;
`;

const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const CapabilityBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const CapabilityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CapabilityIcon = styled.div`
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CapabilityTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const CapabilityContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CapabilityItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.75rem;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const CapabilityLabel = styled.div`
  font-size: 0.9rem;
  color: #b4c6e0;
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const CapabilityValue = styled.div`
  color: white;
  font-size: 0.95rem;
  line-height: 1.4;
`;

const BasicInfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2.5rem;
  margin-top: 3rem;
  text-align: center;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const AchievementsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2.5rem;
  margin-top: 2.5rem;
  text-align: center;
`;

const Achievement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const AchievementLabel = styled.p`
  color: #b4c6e0;
  font-size: 0.9rem;
`;

const AchievementValue = styled.span`
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const FacilityAbout = () => {
  const { messages } = useLanguage();
  
  const achievements = [
    {
      label: translate(messages, 'achievementsYearsLabel', "Years in Operation"),
      value: translate(messages, 'achievementsYearsValue', "Since 2018")
    },
    {
      label: translate(messages, 'achievementsLandLabel', "Total Land Area"),
      value: translate(messages, 'achievementsLandValue', "30,000 m²")
    },
    {
      label: translate(messages, 'achievementsBuildingLabel', "Building Size"),
      value: translate(messages, 'achievementsBuildingValue', "15,000 m²")
    }
  ];
  
  return (
    <Section id="about">
      <Container>
        <HeaderGrid data-aos="fade-up">
          <Title data-aos="fade-up" data-aos-delay="100">{translate(messages, 'facilityAboutTitle', "Our Facility & Company Profile")}</Title>
          <Description data-aos="fade-up" data-aos-delay="200">
            {translate(messages, 'facilityAboutDescription', "Die Cast Mexico's state-of-the-art facility located in Monterrey, Mexico opened in Q4 2018. With 30,000 square meters of land and a 15,000 square meter facility, we have the capacity to handle large production runs while maintaining the highest quality standards.")}
          </Description>
        </HeaderGrid>
        
        <ContentGrid>
          <MainImage 
            src="/images/plant_2_diecast.png" 
            alt={translate(messages, 'facilityImageAlt', "Die Cast Mexico Facility")}
            data-aos="fade-right"
            data-aos-delay="300"
          />
          
          <SideContent data-aos="fade-left" data-aos-delay="400">
            <InfoBox style={{ height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <InfoBoxLogo 
                  src="/images/iso9001_diecast.webp" 
                  alt={translate(messages, 'isoLogoAlt', "ISO 9001 Certification")}
                  style={{ height: '3.5rem' }}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
              </div>
              <div>
                <InfoBoxTitle data-aos="fade-up" data-aos-delay="600">{translate(messages, 'iso9001Title', "ISO 9001:2015 Certified")}</InfoBoxTitle>
                <InfoBoxText data-aos="fade-up" data-aos-delay="700">
                  {translate(messages, 'iso9001Description', "Our quality management system is certified to ISO 9001:2015 standards, ensuring consistent quality and continuous improvement in all our processes.")}
                </InfoBoxText>
              </div>
              <Button 
                variant="outline" 
                as="a" 
                href="/contact"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                {translate(messages, 'contactUsBtn', "Contact Us")}
              </Button>
            </InfoBox>
          </SideContent>
        </ContentGrid>
        
        <div style={{ marginTop: '4rem' }} data-aos="fade-up" data-aos-delay="200">
          <AchievementsBox>
            <AchievementsHeader>
              <AchievementsTitle data-aos="fade-up" data-aos-delay="300">{translate(messages, 'achievementsTitle', "Manufacturing Capabilities")}</AchievementsTitle>
              <AchievementsDescription data-aos="fade-up" data-aos-delay="400">
                {translate(messages, 'achievementsDesc', "Since our founding in 2018, we've quickly established a reputation for excellence in high-pressure die casting, delivering precision components across multiple industries.")}
              </AchievementsDescription>
            </AchievementsHeader>
            
            <CapabilitiesGrid>
              <CapabilityBox data-aos="fade-up" data-aos-delay="500">
                <CapabilityHeader>
                  <CapabilityIcon>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/>
                    </svg>
                  </CapabilityIcon>
                  <CapabilityTitle>Overview</CapabilityTitle>
                </CapabilityHeader>
                <CapabilityContent>
                  <CapabilityItem>
                    <CapabilityLabel>Workforce</CapabilityLabel>
                    <CapabilityValue>125+</CapabilityValue>
                  </CapabilityItem>
                  <CapabilityItem>
                    <CapabilityLabel>Material Capacity</CapabilityLabel>
                    <CapabilityValue>Up to 250ton/month aluminum ingots</CapabilityValue>
                  </CapabilityItem>
                  <CapabilityItem>
                    <CapabilityLabel>Aluminum Alloys</CapabilityLabel>
                    <CapabilityValue>AlSi12(Fe), A380, A360, A413, ADC12</CapabilityValue>
                  </CapabilityItem>
                </CapabilityContent>
              </CapabilityBox>

              <CapabilityBox data-aos="fade-up" data-aos-delay="600">
                <CapabilityHeader>
                  <CapabilityIcon>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </CapabilityIcon>
                  <CapabilityTitle>Manufacturing</CapabilityTitle>
                </CapabilityHeader>
                <CapabilityContent>
                  <CapabilityItem>
                    <CapabilityLabel>Die Casting</CapabilityLabel>
                    <CapabilityValue>8 full automatic manufacturing cells</CapabilityValue>
                  </CapabilityItem>
                  <CapabilityItem>
                    <CapabilityLabel>CNC Machining</CapabilityLabel>
                    <CapabilityValue>19 horizontal 4 axis machines</CapabilityValue>
                  </CapabilityItem>
                  <CapabilityItem>
                    <CapabilityLabel>Mechanical Assembly</CapabilityLabel>
                    <CapabilityValue>Dowel pins, labels, helicoils, plugs, etc.</CapabilityValue>
                  </CapabilityItem>
                </CapabilityContent>
              </CapabilityBox>

              <CapabilityBox data-aos="fade-up" data-aos-delay="700">
                <CapabilityHeader>
                  <CapabilityIcon>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </CapabilityIcon>
                  <CapabilityTitle>Surface Finishing</CapabilityTitle>
                </CapabilityHeader>
                <CapabilityContent>
                  <CapabilityItem>
                    <CapabilityLabel>FIP Gasket</CapabilityLabel>
                    <CapabilityValue>Precision gasket application</CapabilityValue>
                  </CapabilityItem>
                  <CapabilityItem>
                    <CapabilityLabel>Powder Painting</CapabilityLabel>
                    <CapabilityValue>Akzo Nobel, Cardinal, Sherwin Williams</CapabilityValue>
                  </CapabilityItem>
                  <CapabilityItem>
                    <CapabilityLabel>Liquid Painting</CapabilityLabel>
                    <CapabilityValue>Custom color solutions</CapabilityValue>
                  </CapabilityItem>
                  <CapabilityItem>
                    <CapabilityLabel>Nickel Plating</CapabilityLabel>
                    <CapabilityValue>High-quality surface finish</CapabilityValue>
                  </CapabilityItem>
                  <CapabilityItem>
                    <CapabilityLabel>Surface Treatment</CapabilityLabel>
                    <CapabilityValue>Tri-chrome passivation on Aluminum: Surtec 650®</CapabilityValue>
                  </CapabilityItem>
                </CapabilityContent>
              </CapabilityBox>
            </CapabilitiesGrid>
            
            <BasicInfoGrid>
              {achievements.map((achievement, idx) => (
                <Achievement 
                  key={achievement.label + idx}
                  data-aos="fade-up" 
                  data-aos-delay={800 + (idx * 100)}
                >
                  <AchievementLabel>{achievement.label}</AchievementLabel>
                  <AchievementValue>{achievement.value}</AchievementValue>
                </Achievement>
              ))}
            </BasicInfoGrid>
          </AchievementsBox>
        </div>
      </Container>
    </Section>
  );
};

export default FacilityAbout;