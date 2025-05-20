import React, { useMemo, useRef } from "react";
import { useDimensions } from "../hooks/use-debounced-dimensions";

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

  const blurClass =
    blur === "light"
      ? "blur-xl"
      : blur === "medium"
      ? "blur-2xl"
      : "blur-3xl";

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${blurClass}`}>
        {colors.map((color, index) => (
          <svg
            key={index}
            className="absolute animate-background-gradient"
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
              className="opacity-30"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export { AnimatedGradient };