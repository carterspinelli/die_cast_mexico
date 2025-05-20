import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useExpandable } from "../hooks/use-expandable";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Button } from "./button";

const StyledCard = styled(Card)`
  margin-bottom: 1.5rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  overflow: hidden;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const IconContainer = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 28px;
    height: 28px;
    fill: var(--color-primary);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionText = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-text);
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border, #e2e8f0);
  display: flex;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
  
  &::before {
    content: '•';
    color: var(--color-primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5rem;
  }
`;

const ExpandableIndustryCard = ({ 
  title, 
  icon, 
  description, 
  details,
  image
}) => {
  const contentRef = useRef(null);
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable(false);
  
  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, animatedHeight]);
  
  return (
    <StyledCard>
      {image && <CardImage image={image} />}
      
      <CardHeader>
        <HeaderContent>
          <TitleContainer>
            {icon && <IconContainer>{icon}</IconContainer>}
            <CardTitle>{title}</CardTitle>
          </TitleContainer>
          
          <Button 
            variant="outline"
            size="sm"
            onClick={toggleExpand}
          >
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </Button>
        </HeaderContent>
        
        <DescriptionText>{description}</DescriptionText>
      </CardHeader>
      
      <motion.div
        style={{ height: animatedHeight }}
        className="overflow-hidden"
      >
        <CardContent ref={contentRef} noPadding>
          <DetailsList>
            {details && details.map((detail, index) => (
              <DetailItem key={index}>{detail}</DetailItem>
            ))}
          </DetailsList>
        </CardContent>
      </motion.div>
    </StyledCard>
  );
};

export default ExpandableIndustryCard;