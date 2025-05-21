import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const FadeInSection = styled.div`
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: translateY(${props => (props.isVisible ? 0 : "20px")});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;
`;

const LazyComponent = ({ children, threshold = 0.2, fadeIn = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { threshold }
    );
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  if (fadeIn) {
    return (
      <FadeInSection ref={domRef} isVisible={isVisible}>
        {children}
      </FadeInSection>
    );
  }

  // If fadeIn is false, just use basic lazy loading without animation
  return (
    <div ref={domRef}>
      {isVisible ? children : <div style={{ height: "10px" }} />}
    </div>
  );
};

export default LazyComponent;