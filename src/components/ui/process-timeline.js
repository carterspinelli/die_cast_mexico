import React, { useRef, useContext, createContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useTransform, useMotionValue } from 'framer-motion';

// Context for scroll progress
const ContainerScrollContext = createContext(undefined);

function useContainerScrollContext() {
  const context = useContext(ContainerScrollContext);
  if (!context) {
    throw new Error('useContainerScrollContext must be used within a ContainerScroll Component');
  }
  return context;
}

const ScrollContainer = styled.div`
  position: relative;
  min-height: 120vh;
`;

const StickyContainer = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
`;

const ProcessCardContainer = styled(motion.div)`
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.7) 40%, #3730a3 120%);
  color: #f8fafc;
  min-width: 70%;
  max-width: 70%;
  border-radius: 1rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-width: 90%;
    max-width: 90%;
  }
`;

const ProcessCardTitle = styled.div`
  padding: 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
`;

const ProcessNumber = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #4338ca;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const ProcessCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  flex: 1;
`;

const ProcessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

const ProcessDescription = styled.p`
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
`;

export const ContainerScroll = ({ children, className, style, ...props }) => {
  const scrollRef = useRef(null);
  const scrollYProgress = useMotionValue(0);
  
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      
      const start = elementTop - windowHeight;
      const end = elementTop + elementHeight;
      const progress = Math.max(0, Math.min(1, (scrollTop - start) / (end - start)));
      
      scrollYProgress.set(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYProgress]);

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <ScrollContainer ref={scrollRef} className={className} style={style} {...props}>
        {children}
      </ScrollContainer>
    </ContainerScrollContext.Provider>
  );
};

export const ContainerSticky = ({ children, className, ...props }) => (
  <StickyContainer className={className} {...props}>
    {children}
  </StickyContainer>
);

export const ProcessCard = ({ children, itemsLength, index, className, style, ...props }) => {
  const { scrollYProgress } = useContainerScrollContext();
  const start = index / itemsLength;
  const end = start + 1 / itemsLength;
  
  const cardRef = useRef(null);
  const [width, setWidth] = React.useState(0);
  
  React.useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
    }
  }, []);

  const x = useTransform(
    scrollYProgress,
    [start, end],
    [typeof window !== 'undefined' ? window.innerWidth : 1200, -((width) * index) + 64 * index]
  );

  return (
    <ProcessCardContainer
      ref={cardRef}
      style={{
        x: index > 0 ? x : 0,
        ...style,
      }}
      className={className}
      {...props}
    >
      {children}
    </ProcessCardContainer>
  );
};

export { ProcessCardTitle, ProcessNumber, ProcessCardBody, ProcessTitle, ProcessDescription };