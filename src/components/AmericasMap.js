import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';

const MapSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const MapContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BadgesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
`;

const Badge = styled.div`
  position: absolute;
  background: linear-gradient(135deg, #0c1220 0%, #1e293b 25%, #334155 75%, #475569 100%);
  border-radius: 0.75rem;
  padding: 0.6rem 1.2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  pointer-events: auto;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  min-width: 140px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    opacity: 0.3;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    animation: shimmer 4s ease-in-out infinite;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
`;

const BadgeContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DotLight = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.6);
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% { 
      opacity: 1; 
      transform: scale(1);
      box-shadow: 0 0 10px rgba(96, 165, 250, 0.6);
    }
    50% { 
      opacity: 0.7; 
      transform: scale(1.2);
      box-shadow: 0 0 20px rgba(96, 165, 250, 0.8);
    }
  }
`;

const BadgeText = styled.span`
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const StrategicBadge = styled(Badge)`
  top: 10%;
  left: 10%;
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @media (max-width: 768px) {
    top: 8%;
    left: 8%;
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }
`;

const GatewayBadge = styled(Badge)`
  top: 15%;
  right: 15%;
  animation: float 6s ease-in-out infinite 2s;
  
  @media (max-width: 768px) {
    top: 35%;
    right: 8%;
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }
`;

const AccessBadge = styled(Badge)`
  bottom: 20%;
  left: 15%;
  animation: float 6s ease-in-out infinite 4s;
  
  @media (max-width: 768px) {
    bottom: 50%;
    left: 15%;
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }
`;

const MarketsBadge = styled(Badge)`
  bottom: 25%;
  right: 10%;
  animation: float 6s ease-in-out infinite 1s;
  
  @media (max-width: 768px) {
    bottom: 8%;
    right: 8%;
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }
`;

const MapWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 700px;
  margin: 0 auto;
`;

const SVGMap = styled.svg`
  width: 100%;
  height: auto;
  max-width: 600px;
  margin: 0 auto;
  display: block;
`;

const AmericasMap = () => {
  const { messages } = useLanguage();

  return (
    <MapSection>
      <Container>
        <MapContainer>
          <Subtitle data-aos="fade-up">
            {messages?.strategicLocationSubtitle || "Strategically located in Jalisco, Mexico"}
          </Subtitle>
          
          <MapWrapper data-aos="fade-up" data-aos-delay="200">
            <BadgesContainer>
              <StrategicBadge data-aos="fade-in" data-aos-delay="400">
                <BadgeContent>
                  <DotLight />
                  <BadgeText>{messages?.strategicLocationBadge || "Strategic Location"}</BadgeText>
                </BadgeContent>
              </StrategicBadge>
              
              <GatewayBadge data-aos="fade-in" data-aos-delay="600">
                <BadgeContent>
                  <DotLight />
                  <BadgeText>{messages?.gatewayBadge || "Gateway to Americas"}</BadgeText>
                </BadgeContent>
              </GatewayBadge>
              
              <AccessBadge data-aos="fade-in" data-aos-delay="800">
                <BadgeContent>
                  <DotLight />
                  <BadgeText>{messages?.accessBadge || "Unparalleled Access"}</BadgeText>
                </BadgeContent>
              </AccessBadge>
              
              <MarketsBadge data-aos="fade-in" data-aos-delay="1000">
                <BadgeContent>
                  <DotLight />
                  <BadgeText>{messages?.marketsBadge || "Global Markets"}</BadgeText>
                </BadgeContent>
              </MarketsBadge>
            </BadgesContainer>
            
            <img 
              src="/images/mexico_jalisco_map.png" 
              alt="Mexico map with Jalisco state highlighted" 
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                display: 'block',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
              }}
            />
          </MapWrapper>
        </MapContainer>
      </Container>
    </MapSection>
  );
};

export default AmericasMap;