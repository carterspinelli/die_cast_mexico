import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Separator } from './ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const FacilitySection = styled.section`
  padding: 6rem 0;
  overflow: hidden;
  background: rgba(248, 250, 252, 0.3);
`;

const Container = styled.div`
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  width: 100%;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const LeftColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  width: fit-content;
  
  svg {
    margin-right: 0.25rem;
    height: 0.875rem;
    width: 0.875rem;
    color: #2563eb;
  }
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: #0f172a;
  
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  max-width: 600px;
  color: #64748b;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

const NavigationDots = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1rem;
`;

const Dot = styled.button`
  height: 0.625rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  background: ${props => props.active ? '#2563eb' : 'rgba(100, 116, 139, 0.3)'};
  width: ${props => props.active ? '2.5rem' : '0.625rem'};
  
  &:focus {
    outline: none;
  }
`;

const RightColumn = styled(motion.div)`
  position: relative;
  height: 100%;
  margin-right: 2.5rem;
  min-height: 300px;
  
  @media (min-width: 768px) {
    min-height: 400px;
  }
`;

const CardContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const IconRow = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  gap: 0.5rem;
`;

const StarIcon = styled(FaStar)`
  height: 1.25rem;
  width: 1.25rem;
  color: #eab308;
  fill: currentColor;
`;

const ContentWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  position: absolute;
  top: -0.5rem;
  left: -0.5rem;
  height: 2rem;
  width: 2rem;
  color: rgba(59, 130, 246, 0.2);
  transform: rotate(180deg);
`;

const ContentText = styled.p`
  position: relative;
  z-index: 10;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6;
  color: #1e293b;
`;

const SeparatorWrapper = styled.div`
  margin: 1rem 0;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfileInfo = styled.div`
  h3 {
    font-weight: 600;
    margin: 0 0 0.25rem 0;
    color: #1e293b;
  }
  
  p {
    font-size: 0.875rem;
    color: #64748b;
    margin: 0;
  }
`;

const DecorativeElement = styled.div`
  position: absolute;
  height: 6rem;
  width: 6rem;
  border-radius: 0.75rem;
  background: rgba(59, 130, 246, 0.05);
  
  &.bottom-left {
    bottom: -1.5rem;
    left: -1.5rem;
  }
  
  &.top-right {
    top: -1.5rem;
    right: -1.5rem;
  }
`;

const LogoCloud = styled(motion.div)`
  margin-top: 6rem;
  text-align: center;
`;

const LogoCloudTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 2rem;
`;

const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem 3rem;
`;

const LogoItem = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(100, 116, 139, 0.5);
`;

export function AnimatedFacilityShowcase({
  title = "World-Class Manufacturing Facility",
  subtitle = "Our state-of-the-art die casting facility combines advanced technology with decades of expertise to deliver exceptional results for our clients.",
  badgeText = "IATF 16949 Certified",
  facilityHighlights = [],
  autoRotateInterval = 6000,
  certifications = [],
  certificationsTitle = "Certified by leading industry organizations",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Auto rotate highlights
  useEffect(() => {
    if (autoRotateInterval <= 0 || facilityHighlights.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % facilityHighlights.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotateInterval, facilityHighlights.length]);

  if (facilityHighlights.length === 0) {
    return null;
  }

  return (
    <FacilitySection>
      <Container>
        <Grid
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left side: Heading and navigation */}
          <LeftColumn variants={itemVariants}>
            <ContentSpace>
              {badgeText && (
                <Badge>
                  <FaShieldAlt />
                  <span>{badgeText}</span>
                </Badge>
              )}

              <Title>{title}</Title>

              <Subtitle>{subtitle}</Subtitle>

              <NavigationDots>
                {facilityHighlights.map((_, index) => (
                  <Dot
                    key={index}
                    active={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View highlight ${index + 1}`}
                  />
                ))}
              </NavigationDots>
            </ContentSpace>
          </LeftColumn>

          {/* Right side: Facility highlight cards */}
          <RightColumn variants={itemVariants}>
            {facilityHighlights.map((highlight, index) => (
              <CardContainer
                key={highlight.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <Card>
                  <IconRow>
                    {Array(highlight.rating)
                      .fill(0)
                      .map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                  </IconRow>

                  <ContentWrapper>
                    <QuoteIcon />
                    <ContentText>"{highlight.content}"</ContentText>
                  </ContentWrapper>

                  <SeparatorWrapper>
                    <Separator />
                  </SeparatorWrapper>

                  <ProfileSection>
                    <Avatar>
                      <AvatarImage src={highlight.avatar} alt={highlight.name} />
                      <AvatarFallback>{highlight.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <ProfileInfo>
                      <h3>{highlight.name}</h3>
                      <p>{highlight.role}, {highlight.department}</p>
                    </ProfileInfo>
                  </ProfileSection>
                </Card>
              </CardContainer>
            ))}

            {/* Decorative elements */}
            <DecorativeElement className="bottom-left" />
            <DecorativeElement className="top-right" />
          </RightColumn>
        </Grid>

        {/* Certifications cloud */}
        {certifications.length > 0 && (
          <LogoCloud variants={itemVariants} initial="hidden" animate="visible">
            <LogoCloudTitle>{certificationsTitle}</LogoCloudTitle>
            <LogoGrid>
              {certifications.map((cert) => (
                <LogoItem key={cert}>{cert}</LogoItem>
              ))}
            </LogoGrid>
          </LogoCloud>
        )}
      </Container>
    </FacilitySection>
  );
}