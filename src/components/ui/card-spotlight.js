import React, { useState } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import styled, { keyframes } from "styled-components";

const sparkleAnimation = keyframes`
  0%, 100% { 
    opacity: 0;
    transform: scale(0.8);
  }
  50% { 
    opacity: 1;
    transform: scale(1);
  }
`;

const SpotlightCard = styled(motion.div)`
  position: relative;
  background: #000000;
  border-radius: 0.75rem;
  padding: 2.5rem;
  border: 1px solid #262626;
  transition: all 0.3s ease;
  overflow: hidden;
  
  &:hover {
    border-color: #3b82f6;
  }
`;

const SpotlightOverlay = styled(motion.div)`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: 0.75rem;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.active {
    opacity: 1;
  }
`;

const DotsOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0);
  background-size: 20px 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
  
  &.active {
    opacity: 1;
  }
`;

const SparkleEffect = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #3b82f6;
  border-radius: 50%;
  animation: ${sparkleAnimation} 2s infinite;
  pointer-events: none;
  z-index: 2;
  
  &:nth-child(1) { top: 20%; left: 30%; animation-delay: 0s; }
  &:nth-child(2) { top: 60%; left: 70%; animation-delay: 0.5s; }
  &:nth-child(3) { top: 40%; left: 20%; animation-delay: 1s; }
  &:nth-child(4) { top: 80%; left: 50%; animation-delay: 1.5s; }
  &:nth-child(5) { top: 15%; left: 80%; animation-delay: 0.25s; }
  &:nth-child(6) { top: 70%; left: 25%; animation-delay: 0.75s; }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  color: white;
`;

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
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
      className={`group/spotlight ${className || ''}`}
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
      <DotsOverlay className={isHovering ? 'active' : ''} />
      {isHovering && (
        <>
          <SparkleEffect />
          <SparkleEffect />
          <SparkleEffect />
          <SparkleEffect />
          <SparkleEffect />
          <SparkleEffect />
        </>
      )}
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </SpotlightCard>
  );
};