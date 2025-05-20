import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useExpandable } from "../hooks/use-expandable";

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  overflow: hidden;
  padding: 1.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${props => props.hasDescription ? '1rem' : '0'};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-primary);
  
  img, svg {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-secondary);
  margin: 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  color: var(--color-text);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  
  &:hover {
    background-color: #f7fafc;
  }
`;

const Description = styled.p`
  color: var(--color-text);
  font-size: 0.925rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
`;

const ContentContainer = styled(motion.div)`
  overflow: hidden;
`;

const Content = styled.div`
  background-color: #f7f9fc;
  border-radius: 6px;
  padding: 1.5rem;
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: var(--color-text);
  font-size: 0.925rem;
  
  &:before {
    content: "•";
    color: var(--color-primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5rem;
  }
`;

const StatusContainer = styled.div`
  font-size: 0.875rem;
  color: #718096;
  margin-top: 0.5rem;
`;

const StatusValue = styled.code`
  background-color: #f1f1f1;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.875rem;
  padding: 0.2rem 0.5rem;
`;

const ExpandableIndustryCard = ({ 
  title, 
  icon, 
  description, 
  details
}) => {
  const contentRef = useRef(null);
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable(false);
  
  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, animatedHeight]);
  
  return (
    <Card>
      <CardHeader hasDescription={description}>
        <TitleContainer>
          {icon && <IconContainer>{icon}</IconContainer>}
          <Title>{title}</Title>
        </TitleContainer>
        
        <Button onClick={toggleExpand}>
          {isExpanded ? 'Hide Details' : 'Show Details'}
        </Button>
      </CardHeader>
      
      {description && <Description>{description}</Description>}
      
      <ContentContainer
        style={{ height: animatedHeight }}
      >
        <Content ref={contentRef}>
          <DetailsList>
            {details && details.map((detail, index) => (
              <DetailItem key={index}>{detail}</DetailItem>
            ))}
          </DetailsList>
        </Content>
      </ContentContainer>
      
      <StatusContainer>
        Current state: <StatusValue>{isExpanded ? 'expanded' : 'collapsed'}</StatusValue>
      </StatusContainer>
    </Card>
  );
};

export default ExpandableIndustryCard;