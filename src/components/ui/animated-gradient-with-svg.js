import React, { useMemo, useRef } from "react";
import styled from "styled-components";
import { useDimensions } from "../hooks/use-debounced-dimensions";

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const GradientContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const BlurLayer = styled.div`
  position: absolute;
  inset: 0;
  filter: ${props => 
    props.blur === "light" 
      ? "blur(24px)" 
      : props.blur === "medium" 
        ? "blur(32px)" 
        : "blur(60px)"};
`;

const AnimatedSvg = styled.svg`
  position: absolute;
  animation: moveGradient ${props => props.animationSpeed}s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
  
  @keyframes moveGradient {
    0%, 100% {
      transform: translate(0, 0);
    }
    20% {
      transform: translate(calc(100% * ${props => props.tx1}), calc(100% * ${props => props.ty1}));
    }
    40% {
      transform: translate(calc(100% * ${props => props.tx2}), calc(100% * ${props => props.ty2}));
    }
    60% {
      transform: translate(calc(100% * ${props => props.tx3}), calc(100% * ${props => props.ty3}));
    }
    80% {
      transform: translate(calc(100% * ${props => props.tx4}), calc(100% * ${props => props.ty4}));
    }
  }
`;

const CircleElement = styled.circle`
  opacity: 0.3;
`;

const AnimatedGradient = ({
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
      <BlurLayer blur={blur}>
        {colors.map((color, index) => {
          const tx1 = Math.random() - 0.5;
          const ty1 = Math.random() - 0.5;
          const tx2 = Math.random() - 0.5;
          const ty2 = Math.random() - 0.5;
          const tx3 = Math.random() - 0.5;
          const ty3 = Math.random() - 0.5;
          const tx4 = Math.random() - 0.5;
          const ty4 = Math.random() - 0.5;
          
          return (
            <AnimatedSvg
              key={index}
              animationSpeed={1 / speed}
              tx1={tx1}
              ty1={ty1}
              tx2={tx2}
              ty2={ty2}
              tx3={tx3}
              ty3={ty3}
              tx4={tx4}
              ty4={ty4}
              style={{
                top: `${Math.random() * 50}%`,
                left: `${Math.random() * 50}%`,
              }}
              width={circleSize * randomInt(0.5, 1.5)}
              height={circleSize * randomInt(0.5, 1.5)}
              viewBox="0 0 100 100"
            >
              <CircleElement
                cx="50"
                cy="50"
                r="50"
                fill={color}
              />
            </AnimatedSvg>
          );
        })}
      </BlurLayer>
    </GradientContainer>
  );
};

export { AnimatedGradient };