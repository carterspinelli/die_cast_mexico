import React, { useState } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import styled from "styled-components";

const SpotlightCard = styled(motion.div)`
  position: relative;
  background: linear-gradient(135deg, #0c1220 0%, #1e293b 100%);
  border-radius: 1.25rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
    border-color: rgba(59, 130, 246, 0.3);
  }
`;

const SpotlightOverlay = styled(motion.div)`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: 1.25rem;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.active {
    opacity: 0.6;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  color: white;
`;

export const CardSpotlight = ({
  children,
  radius = 300,
  color = "rgba(59, 130, 246, 0.15)",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  return (
    <SpotlightCard
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <SpotlightOverlay
        className={isHovering ? 'active' : ''}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
        }}
      />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </SpotlightCard>
  );
};