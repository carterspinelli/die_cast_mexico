import React from "react";
import styled from "styled-components";
import { cn } from "../../utils/classNames";

const CardRoot = styled.div`
  border-radius: 0.5rem;
  border: 1px solid var(--color-border, #e2e8f0);
  background-color: var(--color-card-bg, white);
  color: var(--color-card-fg, #1e293b);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  color: var(--color-heading, #0f172a);
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-muted, #64748b);
  margin: 0;
`;

const CardContent = styled.div`
  padding: 0 1.5rem 1.5rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem 1.5rem;
`;

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <CardRoot ref={ref} className={cn(className)} {...props} />
));
Card.displayName = "Card";

export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
};