import React from "react";
import styled from "styled-components";
import { cn } from "../../utils/classNames";

const BadgeVariants = {
  default: {
    background: "var(--color-primary, #0066cc)",
    color: "#ffffff",
    hover: "var(--color-primary-hover, #0055aa)",
  },
  secondary: {
    background: "var(--color-secondary, #f1f5f9)",
    color: "var(--color-primary, #0066cc)",
    hover: "var(--color-secondary-hover, #e2e8f0)",
  },
  destructive: {
    background: "var(--color-destructive, #ef4444)",
    color: "#ffffff",
    hover: "var(--color-destructive-hover, #dc2626)",
  },
  outline: {
    background: "transparent",
    color: "var(--color-foreground, #1e293b)",
    borderColor: "var(--color-border, #e2e8f0)",
    hover: "var(--color-accent, #f1f5f9)",
  },
};

const StyledBadge = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  transition: background-color 0.2s, color 0.2s;
  border: 1px solid transparent;
  
  ${(props) => {
    const variant = BadgeVariants[props.$variant || "default"];
    return `
      background-color: ${variant.background};
      color: ${variant.color};
      
      &:hover {
        background-color: ${variant.hover};
      }
      
      ${
        props.$variant === "outline"
          ? `
        border-color: ${variant.borderColor};
        &:hover {
          color: var(--color-foreground-hover, #0f172a);
        }
      `
          : ""
      }
    `;
  }}
`;

const Badge = ({ className, variant = "default", children, ...props }) => {
  return (
    <StyledBadge className={cn(className)} $variant={variant} {...props}>
      {children}
    </StyledBadge>
  );
};

export { Badge, BadgeVariants };