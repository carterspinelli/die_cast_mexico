import React from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const MapSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
            <SVGMap viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
              {/* Americas Outline */}
              <g id="americas">
                {/* North America */}
                <path
                  d="M150 50 L250 40 L350 45 L450 55 L500 80 L520 120 L510 160 L480 200 L420 220 L350 230 L280 240 L200 250 L150 220 L120 180 L110 140 L130 100 Z"
                  fill="#e2e8f0"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
                
                {/* Mexico - highlighted */}
                <path
                  d="M200 250 L280 240 L350 230 L380 260 L360 290 L320 310 L280 320 L240 315 L200 300 Z"
                  fill="#0c1220"
                  stroke="#1e293b"
                  strokeWidth="2"
                  opacity="0.9"
                />
                
                {/* Jalisco State - special highlight */}
                <circle
                  cx="250"
                  cy="280"
                  r="8"
                  fill="#60a5fa"
                  stroke="white"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0.7;1"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* Central America */}
                <path
                  d="M280 320 L320 310 L340 330 L335 350 L320 360 L300 365 L285 360 L275 345 Z"
                  fill="#e2e8f0"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
                
                {/* South America */}
                <path
                  d="M320 360 L380 370 L420 390 L450 420 L480 460 L490 500 L485 540 L470 570 L440 580 L400 575 L360 565 L330 550 L310 520 L305 480 L315 440 L320 400 Z"
                  fill="#e2e8f0"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
                
                {/* Caribbean Islands */}
                <circle cx="380" cy="300" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1"/>
                <circle cx="390" cy="310" r="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1"/>
                <circle cx="395" cy="320" r="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1"/>
              </g>
              
              {/* Location marker with pulse effect */}
              <g id="location-marker">
                <circle
                  cx="250"
                  cy="280"
                  r="15"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values="15;25;15"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              
              {/* Location label */}
              <g id="location-label">
                <rect
                  x="190"
                  y="230"
                  width="120"
                  height="35"
                  rx="8"
                  fill="white"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
                />
                <text
                  x="250"
                  y="245"
                  textAnchor="middle"
                  fill="#0c1220"
                  fontSize="12"
                  fontWeight="600"
                >
                  Die Cast Mexico
                </text>
                <text
                  x="250"
                  y="258"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="10"
                  fontWeight="500"
                >
                  Jalisco, México
                </text>
              </g>
              
              {/* Compass */}
              <g id="compass" transform="translate(650, 80)">
                <circle cx="0" cy="0" r="30" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                <path d="M0,-20 L5,0 L0,20 L-5,0 Z" fill="#60a5fa"/>
                <text x="0" y="-35" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">N</text>
                <text x="35" y="5" textAnchor="middle" fill="#64748b" fontSize="8">E</text>
                <text x="0" y="45" textAnchor="middle" fill="#64748b" fontSize="8">S</text>
                <text x="-35" y="5" textAnchor="middle" fill="#64748b" fontSize="8">W</text>
              </g>
              
              {/* Trade routes visualization */}
              <g id="trade-routes" opacity="0.3">
                <path
                  d="M250 280 Q200 200 150 150"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M250 280 Q350 350 400 450"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </SVGMap>
          </MapWrapper>
        </MapContainer>
      </Container>
    </MapSection>
  );
};

export default AmericasMap;