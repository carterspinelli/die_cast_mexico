import React, { useMemo, useRef } from "react";
import styled from 'styled-components';
import { useDimensions } from "../hooks/use-debounced-dimensions";

const GradientContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const BlurredContainer = styled.div`
  position: absolute;
  inset: 0;
  filter: ${props => 
    props.blur === 'light' ? 'blur(40px)' : 
    props.blur === 'medium' ? 'blur(60px)' : 
    'blur(100px)'
  };
`;

const AnimatedSVG = styled.svg`
  position: absolute;
  animation: backgroundGradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
  
  @keyframes backgroundGradient {
    0%, 100% {
      transform: translate(0, 0);
      animation-delay: var(--background-gradient-delay, 0s);
    }
    20% {
      transform: translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)));
    }
    40% {
      transform: translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)));
    }
    60% {
      transform: translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)));
    }
    80% {
      transform: translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)));
    }
  }
`;

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const AnimatedGradient = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  return (
    <GradientContainer ref={containerRef}>
      <BlurredContainer blur={blur}>
        {colors.map((color, index) => (
          <AnimatedSVG
            key={index}
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 50}%`,
              "--background-gradient-speed": `${1 / speed}s`,
              "--tx-1": Math.random() - 0.5,
              "--ty-1": Math.random() - 0.5,
              "--tx-2": Math.random() - 0.5,
              "--ty-2": Math.random() - 0.5,
              "--tx-3": Math.random() - 0.5,
              "--ty-3": Math.random() - 0.5,
              "--tx-4": Math.random() - 0.5,
              "--ty-4": Math.random() - 0.5,
            }}
            width={circleSize * randomInt(0.5, 1.5)}
            height={circleSize * randomInt(0.5, 1.5)}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="50"
              fill={color}
              style={{ opacity: 0.3 }}
            />
          </AnimatedSVG>
        ))}
      </BlurredContainer>
    </GradientContainer>
  );
};