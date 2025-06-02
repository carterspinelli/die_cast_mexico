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
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const MapInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const LocationCard = styled.div`
  background: linear-gradient(135deg, #0a0f1b 0%, #1a2332 25%, #2c3e50 75%, #4a5568 100%);
  border-radius: 1.5rem;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(10, 15, 27, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    opacity: 0.4;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
`;

const LocationContent = styled.div`
  position: relative;
  z-index: 1;
  color: white;
`;

const LocationTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
`;

const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const LocationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const LocationLabel = styled.span`
  font-size: 0.9rem;
  color: #94a3b8;
  font-weight: 500;
`;

const LocationValue = styled.span`
  font-size: 1rem;
  color: white;
  font-weight: 600;
`;

const MapWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const SVGMap = styled.svg`
  width: 100%;
  height: auto;
  max-width: 500px;
  margin: 0 auto;
  display: block;
`;

const AmericasMap = () => {
  const { messages } = useLanguage();

  return (
    <MapSection>
      <Container>
        <MapContainer>
          <MapInfo data-aos="fade-right">
            <Title>
              {messages?.strategicLocationTitle || "Strategic Location"}
            </Title>
            <Description>
              {messages?.strategicLocationDesc || "Strategically positioned in Jalisco, Mexico, we serve as your gateway to the Americas with unparalleled access to both North and South American markets."}
            </Description>
            <LocationCard>
              <LocationContent>
                <LocationTitle>
                  {messages?.facilityLocationTitle || "Facility Location"}
                </LocationTitle>
                <LocationDetails>
                  <LocationItem>
                    <LocationLabel>{messages?.stateLabel || "State"}</LocationLabel>
                    <LocationValue>Jalisco, México</LocationValue>
                  </LocationItem>
                  <LocationItem>
                    <LocationLabel>{messages?.cityLabel || "City"}</LocationLabel>
                    <LocationValue>Zapopan</LocationValue>
                  </LocationItem>
                  <LocationItem>
                    <LocationLabel>{messages?.regionLabel || "Region"}</LocationLabel>
                    <LocationValue>{messages?.regionValue || "North America"}</LocationValue>
                  </LocationItem>
                  <LocationItem>
                    <LocationLabel>{messages?.timeZoneLabel || "Time Zone"}</LocationLabel>
                    <LocationValue>UTC-6</LocationValue>
                  </LocationItem>
                </LocationDetails>
              </LocationContent>
            </LocationCard>
          </MapInfo>
          
          <MapWrapper data-aos="fade-left">
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