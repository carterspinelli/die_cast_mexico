import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ScrollContainer = styled.div`
  height: 30rem;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 2.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.5s ease;
  
  @media (max-width: 768px) {
    height: auto;
    overflow-y: visible;
    overflow: visible;
    touch-action: pan-y;
  }
`;

const ContentColumn = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 0 1rem;
`;

const ContentInner = styled.div`
  max-width: 36rem;
`;

const ContentItem = styled.div`
  margin: 5rem 0;
`;

const Spacer = styled.div`
  height: 10rem;
`;

const CardTitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f1f5f9;
  margin-bottom: 1rem;
`;

const CardDescription = styled(motion.p)`
  color: #cbd5e1;
  margin-top: 2.5rem;
  max-width: 24rem;
`;

const PreviewPanel = styled.div`
  display: none;
  height: 15rem;
  width: 20rem;
  border-radius: 0.375rem;
  background-color: white;
  position: sticky;
  top: 2.5rem;
  overflow: hidden;
  transition: background 0.5s ease;
  
  @media (min-width: 1024px) {
    display: block;
  }
  
  @media (max-width: 768px) {
    position: relative;
    display: none;
  }
`;

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  // Set up refs for each section
  useEffect(() => {
    sectionRefs.current = Array(content.length)
      .fill()
      .map((_, i) => sectionRefs.current[i] || React.createRef());
  }, [content.length]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollPosition = container.scrollTop + container.clientHeight / 3;
      
      // Find the section that is currently in view
      let active = 0;
      sectionRefs.current.forEach((ref, index) => {
        if (!ref.current) return;
        
        const offsetTop = ref.current.offsetTop;
        if (scrollPosition >= offsetTop) {
          active = index;
        }
      });
      
      setActiveCard(active);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const backgroundColors = useMemo(() => [
    "rgb(15 23 42)", // slate-900
    "rgb(0 0 0)", // black
    "rgb(23 23 23)", // neutral-900
  ], []);

  const linearGradients = useMemo(() => [
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))", // pink-500 to indigo-500
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))", // orange-500 to yellow-500
  ], []);

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <ScrollContainer
      style={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      ref={containerRef}
    >
      <ContentColumn>
        <ContentInner>
          {content.map((item, index) => (
            <ContentItem 
              key={`item-${index}`} 
              ref={sectionRefs.current[index]}
            >
              <CardTitle
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {item.title}
              </CardTitle>
              <CardDescription
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {item.description}
              </CardDescription>
            </ContentItem>
          ))}
          <Spacer />
        </ContentInner>
      </ContentColumn>
      <PreviewPanel
        style={{ background: backgroundGradient }}
        className={contentClassName}
      >
        {content[activeCard]?.content ?? null}
      </PreviewPanel>
    </ScrollContainer>
  );
};