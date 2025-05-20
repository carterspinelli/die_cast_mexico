import React from "react";
import styled from "styled-components";
import { cn } from "./utils";

const StyledCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid var(--color-border, #e2e8f0);
  background-color: var(--color-card, white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.375rem;
`;

const StyledCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: var(--color-text-heading, #1a202c);
`;

const StyledCardDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted, #718096);
`;

const StyledCardContent = styled.div`
  padding: 1.5rem;
  padding-top: ${props => props.noPadding ? '0' : '1.5rem'};
`;

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
`;

export const Card = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <StyledCard ref={ref} className={cn(className)} {...props} />
  );
});
Card.displayName = "Card";

export const CardHeader = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <StyledCardHeader ref={ref} className={cn(className)} {...props} />
  );
});
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <StyledCardTitle ref={ref} className={cn(className)} {...props} />
  );
});
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <StyledCardDescription ref={ref} className={cn(className)} {...props} />
  );
});
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef(({ className, noPadding = false, ...props }, ref) => {
  return (
    <StyledCardContent ref={ref} className={cn(className)} noPadding={noPadding} {...props} />
  );
});
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <StyledCardFooter ref={ref} className={cn(className)} {...props} />
  );
});
CardFooter.displayName = "CardFooter";