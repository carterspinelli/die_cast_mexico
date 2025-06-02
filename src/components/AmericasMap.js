import React from 'react';
import styled from 'styled-components';
import { useLanguage, translate } from '../context/LanguageContext';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
`;

const MapInfo = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0c1220;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 2rem;
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

const Badge = styled.div`
  position: absolute;
  background: linear-gradient(135deg, #0c1220 0%, #1e293b  50%, #334155 100%);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(12, 18, 32, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    border-radius: 2rem;
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
    border-radius: 2rem;
    animation: shimmer 4s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
`;

const TwinkleLight = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: #60a5fa;
  border-radius: 50%;
  box-shadow: 0 0 10px #60a5fa, 0 0 20px #60a5fa, 0 0 30px #60a5fa;
  animation: twinkle 2s ease-in-out infinite;
  
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  
  &:nth-child(2) { animation-delay: 0.5s; }
  &:nth-child(3) { animation-delay: 1s; }
  &:nth-child(4) { animation-delay: 1.5s; }
`;

const BadgeIcon = styled.span`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '✦';
    color: #60a5fa;
    font-size: 1rem;
    animation: sparkle 3s ease-in-out infinite;
  }
  
  @keyframes sparkle {
    0%, 100% { opacity: 0.6; transform: rotate(0deg); }
    50% { opacity: 1; transform: rotate(180deg); }
  }
`;

const SVGMap = styled.svg`
  width: 100%;
  height: auto;
  max-width: 600px;
  margin: 0 auto;
  display: block;
`;

const GlobalStyles = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  
  @keyframes sparkle {
    0%, 100% { opacity: 0.6; transform: rotate(0deg); }
    50% { opacity: 1; transform: rotate(180deg); }
  }
`;

const AmericasMap = () => {
  const { messages } = useLanguage();

  return (
    <MapSection>
      <style>{GlobalStyles}</style>
      <Container>
        <MapContainer>
          <MapInfo data-aos="fade-up">
            <Title>
              {messages?.strategicLocationTitle || "Strategic Location"}
            </Title>
            <Description>
              {messages?.strategicLocationDesc || "Strategically positioned in Jalisco, Mexico, we serve as your gateway to the Americas with unparalleled access to both North and South American markets."}
            </Description>
          </MapInfo>
          
          <MapWrapper data-aos="fade-up" data-aos-delay="200">
            {/* Strategic Location Badges */}
            <div style={{ 
              position: 'absolute', 
              top: '10%', 
              left: '5%',
              background: 'linear-gradient(135deg, #0c1220 0%, #1e293b 50%, #334155 100%)',
              color: 'white',
              padding: '0.75rem 1.25rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: '0 8px 25px rgba(12, 18, 32, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              zIndex: 10
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#60a5fa', animation: 'sparkle 3s ease-in-out infinite' }}>✦</span>
                {messages?.nafta || "NAFTA Access"}
              </span>
              <div style={{ 
                position: 'absolute', 
                top: '8px', 
                right: '8px',
                width: '6px',
                height: '6px',
                background: '#60a5fa',
                borderRadius: '50%',
                boxShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa',
                animation: 'twinkle 2s ease-in-out infinite'
              }} />
            </div>
            
            <div style={{ 
              position: 'absolute', 
              top: '15%', 
              right: '8%',
              background: 'linear-gradient(135deg, #0c1220 0%, #1e293b 50%, #334155 100%)',
              color: 'white',
              padding: '0.75rem 1.25rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: '0 8px 25px rgba(12, 18, 32, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              zIndex: 10
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#60a5fa', animation: 'sparkle 3s ease-in-out infinite 0.5s' }}>✦</span>
                {messages?.pacificCoast || "Pacific Coast"}
              </span>
              <div style={{ 
                position: 'absolute', 
                top: '12px', 
                left: '12px',
                width: '6px',
                height: '6px',
                background: '#60a5fa',
                borderRadius: '50%',
                boxShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa',
                animation: 'twinkle 2s ease-in-out infinite 0.5s'
              }} />
            </div>
            
            <div style={{ 
              position: 'absolute', 
              bottom: '25%', 
              left: '10%',
              background: 'linear-gradient(135deg, #0c1220 0%, #1e293b 50%, #334155 100%)',
              color: 'white',
              padding: '0.75rem 1.25rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: '0 8px 25px rgba(12, 18, 32, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              zIndex: 10
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#60a5fa', animation: 'sparkle 3s ease-in-out infinite 1s' }}>✦</span>
                {messages?.centralLocation || "Central Location"}
              </span>
              <div style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '10px',
                width: '6px',
                height: '6px',
                background: '#60a5fa',
                borderRadius: '50%',
                boxShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa',
                animation: 'twinkle 2s ease-in-out infinite 1s'
              }} />
            </div>
            
            <div style={{ 
              position: 'absolute', 
              bottom: '20%', 
              right: '5%',
              background: 'linear-gradient(135deg, #0c1220 0%, #1e293b 50%, #334155 100%)',
              color: 'white',
              padding: '0.75rem 1.25rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: '0 8px 25px rgba(12, 18, 32, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              zIndex: 10
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#60a5fa', animation: 'sparkle 3s ease-in-out infinite 1.5s' }}>✦</span>
                {messages?.tradeRoutes || "Trade Routes"}
              </span>
              <div style={{ 
                position: 'absolute', 
                bottom: '10px', 
                left: '8px',
                width: '6px',
                height: '6px',
                background: '#60a5fa',
                borderRadius: '50%',
                boxShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa',
                animation: 'twinkle 2s ease-in-out infinite 1.5s'
              }} />
            </div>
            
            <img 
              src="/images/mexico_jalisco_map.png" 
              alt="Mexico map with Jalisco state highlighted" 
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                display: 'block',
                margin: '0 auto'
              }}
            />
            
            {/* Additional twinkling lights scattered around the map */}
            <div style={{ 
              position: 'absolute', 
              top: '30%', 
              left: '15%',
              width: '6px',
              height: '6px',
              background: '#60a5fa',
              borderRadius: '50%',
              boxShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa',
              animation: 'twinkle 2s ease-in-out infinite 2s'
            }} />
            <div style={{ 
              position: 'absolute', 
              top: '45%', 
              right: '20%',
              width: '6px',
              height: '6px',
              background: '#60a5fa',
              borderRadius: '50%',
              boxShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa',
              animation: 'twinkle 2s ease-in-out infinite 2.5s'
            }} />
            <div style={{ 
              position: 'absolute', 
              bottom: '40%', 
              left: '25%',
              width: '6px',
              height: '6px',
              background: '#60a5fa',
              borderRadius: '50%',
              boxShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa',
              animation: 'twinkle 2s ease-in-out infinite 3s'
            }} />
            <div style={{ 
              position: 'absolute', 
              bottom: '50%', 
              right: '15%',
              width: '6px',
              height: '6px',
              background: '#60a5fa',
              borderRadius: '50%',
              boxShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa',
              animation: 'twinkle 2s ease-in-out infinite 3.5s'
            }} />
          </MapWrapper>
        </MapContainer>
      </Container>
    </MapSection>
  );
};

export default AmericasMap;