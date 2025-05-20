import React from "react";
import styled from "styled-components";

// Styled component for the Button
const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  /* Variants */
  background-color: ${props => {
    switch (props.variant) {
      case "default":
        return "var(--color-primary, #0f172a)";
      case "destructive":
        return "var(--color-destructive, #ef4444)";
      case "outline":
        return "transparent";
      case "secondary":
        return "var(--color-secondary, #64748b)";
      case "ghost":
        return "transparent";
      case "link":
        return "transparent";
      default:
        return "var(--color-primary, #0f172a)";
    }
  }};
  
  color: ${props => {
    switch (props.variant) {
      case "default":
        return "#ffffff";
      case "destructive":
        return "#ffffff";
      case "outline":
        return "var(--color-text, #0f172a)";
      case "secondary":
        return "#ffffff";
      case "ghost":
        return "var(--color-text, #0f172a)";
      case "link":
        return "var(--color-primary, #0f172a)";
      default:
        return "#ffffff";
    }
  }};
  
  border: ${props => props.variant === "outline" ? "1px solid var(--color-border, #e2e8f0)" : "none"};
  
  &:hover {
    background-color: ${props => {
      switch (props.variant) {
        case "default":
          return "var(--color-primary-dark, #0c132e)";
        case "destructive":
          return "var(--color-destructive-hover, #dc2626)";
        case "outline":
          return "var(--color-accent, #f8fafc)";
        case "secondary":
          return "var(--color-secondary-hover, #475569)";
        case "ghost":
          return "var(--color-accent, #f8fafc)";
        case "link":
          return "transparent";
        default:
          return "var(--color-primary-dark, #0c132e)";
      }
    }};
    
    color: ${props => {
      switch (props.variant) {
        case "link":
          return "var(--color-primary-hover, #2563eb)";
        case "outline":
        case "ghost":
          return "var(--color-text-hover, #0f172a)";
        default:
          return props.color;
      }
    }};
    
    text-decoration: ${props => props.variant === "link" ? "underline" : "none"};
  }
  
  /* Sizes */
  height: ${props => {
    switch (props.size) {
      case "default": return "2.5rem";
      case "sm": return "2.25rem";
      case "lg": return "2.75rem";
      case "icon": return "2.5rem";
      default: return "2.5rem";
    }
  }};
  
  padding: ${props => {
    switch (props.size) {
      case "default": return "0.5rem 1rem";
      case "sm": return "0.375rem 0.75rem";
      case "lg": return "0.5rem 2rem";
      case "icon": return "0";
      default: return "0.5rem 1rem";
    }
  }};
  
  width: ${props => props.size === "icon" ? "2.5rem" : "auto"};
`;

export function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}) {
  return (
    <ButtonBase
      className={className}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}