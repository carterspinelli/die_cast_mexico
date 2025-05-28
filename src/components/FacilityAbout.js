import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";
import { AnimatedFacilityShowcase } from "./AnimatedFacilityShowcase";

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





const CertificationLogos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const CertificationContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CertificationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CertificationDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e8f0;
  margin: 0.5rem 0;
`;

const AchievementsBox = styled.div`
  background-color: #ffffff;
  color: #1e293b;
  border-radius: 0.75rem;
  padding: 2.5rem 4rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
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
  color: #0f172a;
`;

const AchievementsDescription = styled.p`
  max-width: 768px;
  color: #64748b;
  font-size: 1.1rem;
`;

const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  justify-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const CapabilityBox = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.06);
    border-color: #cbd5e1;
  }
`;

const CapabilityHeader = styled.div`
  background: #f8fafc;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  position: relative;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 640px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

const CapabilityIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    color: white;
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${CapabilityBox}:hover & {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
  }
`;

const CapabilityTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
  line-height: 1.4;
  
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const CapabilityContent = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 640px) {
    padding: 1.5rem;
    gap: 0.875rem;
  }
`;

const CapabilityItem = styled.div`
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.125rem;
  transition: all 0.2s ease;
  border: 1px solid #f3f4f6;
  
  &:hover {
    background: #f3f4f6;
    border-color: #e5e7eb;
  }
  
  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

const CapabilityLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const CapabilityValue = styled.div`
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
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
              <CertificationLogos>
                <InfoBoxLogo 
                  src="/images/iso9001_diecast.webp" 
                  alt={translate(messages, 'isoLogoAlt', "ISO 9001 Certification")}
                  style={{ height: '3.5rem' }}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
                <InfoBoxLogo 
                  src="/images/iatf_16949_logo.png" 
                  alt={translate(messages, 'iatfLogoAlt', "IATF 16949 Certification")}
                  style={{ height: '3.5rem' }}
                  data-aos="zoom-in"
                  data-aos-delay="550"
                />
              </CertificationLogos>
              <CertificationContent>
                <CertificationItem data-aos="fade-up" data-aos-delay="600">
                  <InfoBoxTitle>{translate(messages, 'iso9001Title', "ISO 9001:2015 Certified")}</InfoBoxTitle>
                  <InfoBoxText>
                    {translate(messages, 'iso9001Description', "Our quality management system is certified to ISO 9001:2015 standards, ensuring consistent quality and continuous improvement in all our processes.")}
                  </InfoBoxText>
                </CertificationItem>
                
                <CertificationDivider />
                
                <CertificationItem data-aos="fade-up" data-aos-delay="700">
                  <InfoBoxTitle>{translate(messages, 'iatf16949Title', "IATF 16949 Certification")}</InfoBoxTitle>
                  <InfoBoxText>
                    {translate(messages, 'iatf16949Description', "Our goal is to be certified in IATF 16949 by 1st Quarter 2026")}
                  </InfoBoxText>
                </CertificationItem>
              </CertificationContent>
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
            
            <AnimatedFacilityShowcase 
              facilityHighlights={[
                {
                  id: 1,
                  name: "Carlos Rodriguez",
                  role: "Plant Manager",
                  department: "Operations",
                  content: "Our facility operates with the highest standards of precision and quality. We've invested in cutting-edge technology to ensure every part meets exact specifications.",
                  rating: 5,
                  avatar: "/images/team-member-1.jpg",
                },
                {
                  id: 2,
                  name: "Maria González",
                  role: "Quality Director",
                  department: "Quality Assurance",
                  content: "IATF 16949 certification reflects our commitment to automotive industry standards. Our quality systems ensure zero-defect delivery to our customers.",
                  rating: 5,
                  avatar: "/images/team-member-2.jpg",
                },
                {
                  id: 3,
                  name: "Roberto Silva",
                  role: "Production Engineer",
                  department: "Engineering",
                  content: "With over 50 die casting machines ranging from 125 to 3,000 tons, we handle projects of any scale while maintaining exceptional quality standards.",
                  rating: 5,
                  avatar: "/images/team-member-3.jpg",
                },
              ]}
              certifications={["IATF 16949", "ISO 9001", "NADCA", "AIAG"]}
            />
            

            
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