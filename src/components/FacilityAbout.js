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

const SecondaryImage = styled.img`
  flex-grow: 1;
  flex-basis: 0;
  border-radius: 0.75rem;
  object-fit: contain;
  height: 100%;
  max-height: 200px;
  width: 100%;
  background-color: #f8f9fa;
  padding: 1rem;
  
  @media (min-width: 768px) {
    width: 50%;
    max-height: none;
  }
  
  @media (min-width: 992px) {
    min-height: 0;
    width: 100%;
  }
`;



const AchievementsBox = styled.div`
  background-color: #f8f9fa;
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
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
`;

const AchievementsDescription = styled.p`
  max-width: 768px;
  color: #64748b;
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
  gap: 1rem;
`;

const AchievementLabel = styled.p`
  color: #64748b;
`;

const AchievementValue = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 3rem;
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
    },
    {
      label: translate(messages, 'achievementsQualityLabel', "Quality Approval"),
      value: translate(messages, 'achievementsQualityValue', "99.9%")
    }
  ];
  
  return (
    <Section id="about">
      <Container>
        <HeaderGrid>
          <Title>{translate(messages, 'facilityAboutTitle', "Our Facility & Company Profile")}</Title>
          <Description>
            {translate(messages, 'facilityAboutDescription', "Die Cast Mexico's state-of-the-art facility located in Monterrey, Mexico opened in Q4 2018. With 30,000 square meters of land and a 15,000 square meter facility, we have the capacity to handle large production runs while maintaining the highest quality standards.")}
          </Description>
        </HeaderGrid>
        
        <ContentGrid>
          <MainImage 
            src="/images/plant_2_diecast.png" 
            alt={translate(messages, 'facilityImageAlt', "Die Cast Mexico Facility")}
          />
          
          <SideContent>
            <InfoBox>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <InfoBoxLogo 
                  src="/images/iso9001_diecast.webp" 
                  alt={translate(messages, 'isoLogoAlt', "ISO 9001 Certification")}
                  style={{ height: '3.5rem' }}
                />
              </div>
              <div>
                <InfoBoxTitle>{translate(messages, 'certifiedTitle', "ISO 9001 Certified")}</InfoBoxTitle>
                <InfoBoxText>
                  {translate(messages, 'certifiedDesc', "We maintain the highest standards of quality and reliability, delivering premium die casting services tailored to your specifications.")}
                </InfoBoxText>
              </div>
              <Button variant="outline" as="a" href="#contact">
                {translate(messages, 'contactUsBtn', "Contact Us")}
              </Button>
            </InfoBox>
            
            <SecondaryImage 
              src="/images/die_cast_02.png" 
              alt={translate(messages, 'manufacturingImageAlt', "Die Cast Manufacturing Process")}
            />
          </SideContent>
        </ContentGrid>
        

        
        <AchievementsBox>
          <AchievementsHeader>
            <AchievementsTitle>{translate(messages, 'achievementsTitle', "Our Achievements")}</AchievementsTitle>
            <AchievementsDescription>
              {translate(messages, 'achievementsDesc', "With decades of experience in high-pressure die casting, we've built a reputation for excellence in delivering precision components across multiple industries.")}
            </AchievementsDescription>
          </AchievementsHeader>
          
          <AchievementsGrid>
            {achievements.map((achievement, idx) => (
              <Achievement key={achievement.label + idx}>
                <AchievementLabel>{achievement.label}</AchievementLabel>
                <AchievementValue>{achievement.value}</AchievementValue>
              </Achievement>
            ))}
          </AchievementsGrid>
        </AchievementsBox>
      </Container>
    </Section>
  );
};

export default FacilityAbout;