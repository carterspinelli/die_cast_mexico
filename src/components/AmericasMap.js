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
          <MapInfo data-aos="fade-up">
            <Title>
              {messages?.strategicLocationTitle || "Strategic Location"}
            </Title>
            <Description>
              {messages?.strategicLocationDesc || "Strategically positioned in Jalisco, Mexico, we serve as your gateway to the Americas with unparalleled access to both North and South American markets."}
            </Description>
          </MapInfo>
          
          <MapWrapper data-aos="fade-up" data-aos-delay="200">
            <SVGMap viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
              {/* Gradient definitions */}
              <defs>
                <radialGradient id="jaliscoGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                  <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#1e40af" stopOpacity="0.9"/>
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Mexico Map */}
              <g id="mexico">
                {/* Mexico Border */}
                <path
                  d="M 50 150 
                     L 120 130 
                     L 180 135 
                     L 220 140 
                     L 280 145 
                     L 340 150 
                     L 380 160 
                     L 420 175 
                     L 450 190 
                     L 470 210 
                     L 485 230 
                     L 490 250 
                     L 485 270 
                     L 475 290 
                     L 460 310 
                     L 440 325 
                     L 415 335 
                     L 385 340 
                     L 350 342 
                     L 315 340 
                     L 280 335 
                     L 245 330 
                     L 210 325 
                     L 175 320 
                     L 140 315 
                     L 105 310 
                     L 75 300 
                     L 50 285 
                     L 35 265 
                     L 25 240 
                     L 30 215 
                     L 40 190 
                     L 45 170 
                     Z"
                  fill="#e2e8f0"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                />
                
                {/* Jalisco State - highlighted */}
                <path
                  d="M 180 220 
                     L 220 215 
                     L 250 220 
                     L 270 230 
                     L 275 250 
                     L 270 270 
                     L 250 285 
                     L 220 290 
                     L 190 285 
                     L 170 270 
                     L 165 250 
                     L 170 235 
                     Z"
                  fill="url(#jaliscoGlow)"
                  stroke="#1e40af"
                  strokeWidth="2"
                  filter="url(#glow)"
                />
                
                {/* Jalisco Location Marker - Glowing Dot */}
                <circle
                  cx="220"
                  cy="250"
                  r="6"
                  fill="#ffffff"
                  stroke="#1e40af"
                  strokeWidth="2"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="r"
                    values="6;10;6"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.9;1;0.9"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* Pulsing outer ring */}
                <circle
                  cx="220"
                  cy="250"
                  r="12"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    values="12;20;12"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0.1;0.4"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              
              {/* Location Label */}
              <text x="220" y="275" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e40af">
                Jalisco
              </text>
            </SVGMap>
          </MapWrapper>
        </MapContainer>
      </Container>
    </MapSection>
  );
};

export default AmericasMap;