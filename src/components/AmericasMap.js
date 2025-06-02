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
            <SVGMap viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
              {/* Gradient definitions */}
              <defs>
                <radialGradient id="jaliscoGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4472c4" stopOpacity="0.9"/>
                  <stop offset="70%" stopColor="#2856a8" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#1e4084" stopOpacity="0.9"/>
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Mexico Map - Based on reference image */}
              <g id="mexico">
                {/* Mexico Main Territory */}
                <path
                  d="M 50 200 
                     L 90 170 
                     L 150 160 
                     L 200 165 
                     L 250 170 
                     L 300 175 
                     L 350 180 
                     L 400 185 
                     L 450 195 
                     L 500 210 
                     L 540 230 
                     L 570 250 
                     L 590 275 
                     L 600 300 
                     L 590 325 
                     L 570 350 
                     L 540 370 
                     L 500 385 
                     L 450 395 
                     L 400 400 
                     L 350 398 
                     L 300 395 
                     L 250 390 
                     L 200 385 
                     L 150 380 
                     L 100 370 
                     L 60 350 
                     L 40 320 
                     L 30 290 
                     L 35 260 
                     L 45 230 
                     Z"
                  fill="#cbd5e1"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
                
                {/* Baja California Peninsula */}
                <path
                  d="M 40 200 
                     L 50 180 
                     L 60 160 
                     L 70 140 
                     L 75 120 
                     L 80 100 
                     L 85 80 
                     L 90 60 
                     L 95 40 
                     L 100 20 
                     L 110 15 
                     L 120 20 
                     L 115 40 
                     L 110 60 
                     L 105 80 
                     L 100 100 
                     L 95 120 
                     L 90 140 
                     L 85 160 
                     L 80 180 
                     L 75 200 
                     L 70 220 
                     L 65 240 
                     L 60 250 
                     L 55 240 
                     L 50 220 
                     Z"
                  fill="#cbd5e1"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
                
                {/* Yucatan Peninsula */}
                <path
                  d="M 580 350 
                     L 620 340 
                     L 660 350 
                     L 700 360 
                     L 730 370 
                     L 750 380 
                     L 760 390 
                     L 750 400 
                     L 730 410 
                     L 700 415 
                     L 660 410 
                     L 620 400 
                     L 590 390 
                     L 580 370 
                     Z"
                  fill="#cbd5e1"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
                
                {/* Jalisco State - highlighted based on reference */}
                <path
                  d="M 220 280 
                     L 260 275 
                     L 290 285 
                     L 310 300 
                     L 320 320 
                     L 315 340 
                     L 300 355 
                     L 280 365 
                     L 250 360 
                     L 220 350 
                     L 200 335 
                     L 195 315 
                     L 205 295 
                     Z"
                  fill="url(#jaliscoGlow)"
                  stroke="#1e40af"
                  strokeWidth="2"
                  filter="url(#glow)"
                />
                
                {/* Jalisco Location Marker - Glowing Dot */}
                <circle
                  cx="260"
                  cy="320"
                  r="5"
                  fill="#ffffff"
                  stroke="#1e40af"
                  strokeWidth="2"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="r"
                    values="5;8;5"
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
                  cx="260"
                  cy="320"
                  r="10"
                  fill="none"
                  stroke="#4472c4"
                  strokeWidth="2"
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    values="10;18;10"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0.1;0.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              
              {/* Location Label */}
              <text x="260" y="345" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e40af">
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