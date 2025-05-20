import React from "react";
import styled from "styled-components";

// Styled components for the Badge
const BadgeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid ${props => props.variant === "outline" ? "var(--color-border, #e2e8f0)" : "transparent"};
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;
  background-color: ${props => {
    switch (props.variant) {
      case "default":
        return "var(--color-primary, #3b82f6)";
      case "secondary":
        return "var(--color-secondary, #64748b)";
      case "destructive":
        return "var(--color-destructive, #ef4444)";
      case "outline":
        return "transparent";
      default:
        return "var(--color-primary, #3b82f6)";
    }
  }};
  color: ${props => props.variant === "outline" ? "var(--color-text, #1e293b)" : "#ffffff"};
  
  &:hover {
    background-color: ${props => {
      if (props.variant === "outline") return "transparent";
      
      switch (props.variant) {
        case "default":
          return "var(--color-primary-hover, #2563eb)";
        case "secondary":
          return "var(--color-secondary-hover, #475569)";
        case "destructive":
          return "var(--color-destructive-hover, #dc2626)";
        default:
          return "var(--color-primary-hover, #2563eb)";
      }
    }};
  }
`;

export function Badge({ className, variant = "default", children, ...props }) {
  return (
    <BadgeContainer
      className={className}
      variant={variant}
      {...props}
    >
      {children}
    </BadgeContainer>
  );
}