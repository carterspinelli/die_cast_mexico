import React from "react";
import { Slot } from "@radix-ui/react-slot";
import styled from "styled-components";

// Styled version of the button with variants
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
  }
  
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  /* Default variant */
  background-color: ${props => props.variant === "default" ? "#0c1220" : "transparent"};
  color: ${props => props.variant === "default" ? "white" : "inherit"};
  
  &:hover {
    background-color: ${props => props.variant === "default" ? "#172b49" : "rgba(243, 244, 246, 0.1)"};
  }
  
  /* Other variants can be added here */
  ${props => props.variant === "outline" && `
    border: 1px solid #e2e8f0;
    background-color: transparent;
    
    &:hover {
      background-color: #f7fafc;
    }
  `}
  
  ${props => props.variant === "ghost" && `
    &:hover {
      background-color: #f7fafc;
    }
  `}
  
  ${props => props.variant === "link" && `
    color: #0c1220;
    text-decoration: underline;
    height: auto;
    padding: 0;
    
    &:hover {
      text-decoration: none;
    }
  `}
  
  /* Size variants */
  ${props => props.size === "sm" && `
    height: 2.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.75rem;
  `}
  
  ${props => props.size === "lg" && `
    height: 2.75rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1rem;
  `}
  
  ${props => props.size === "icon" && `
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
  `}
  
  /* Custom styles passed via className */
  ${props => props.className}
`;

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <StyledButton
        as={Comp}
        className={className}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";