import React from "react";
import styled, { keyframes } from "styled-components";

const moveAnimation = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10%, 15%);
  }
  50% {
    transform: translate(-5%, 10%);
  }
  75% {
    transform: translate(-10%, -10%);
  }
`;

const GradientContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  filter: blur(40px);
`;

const GradientCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  animation: ${moveAnimation} ${props => props.speed || '15s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  background-color: ${props => props.color || '#3B82F6'};
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
`;

const AnimatedGradient = ({ colors, speed = 15 }) => {
  return (
    <GradientContainer>
      {colors.map((color, index) => (
        <GradientCircle
          key={index}
          color={color}
          speed={`${speed + (index * 2)}s`}
          delay={`${index * 0.5}s`}
          size={`${300 + (index * 50)}px`}
          top={`${index * 10}%`}
          left={`${index * 15}%`}
        />
      ))}
    </GradientContainer>
  );
};

export { AnimatedGradient };