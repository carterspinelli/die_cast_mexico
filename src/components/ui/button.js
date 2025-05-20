import React from "react";
import styled from "styled-components";
import { cn } from "../../utils/classNames";

const ButtonVariants = {
  default: {
    background: "var(--color-primary, #0c1220)",
    color: "#ffffff",
    hover: "var(--color-primary-hover, #172b49)",
    active: "var(--color-primary-active, #0d1a29)",
  },
  destructive: {
    background: "var(--color-destructive, #ef4444)",
    color: "#ffffff",
    hover: "var(--color-destructive-hover, #dc2626)",
    active: "var(--color-destructive-active, #b91c1c)",
  },
  outline: {
    background: "transparent",
    color: "var(--color-foreground, #1e293b)",
    borderColor: "var(--color-border, #e2e8f0)",
    hover: "var(--color-accent, #f1f5f9)",
    active: "var(--color-accent-dark, #e2e8f0)",
  },
  secondary: {
    background: "var(--color-secondary, #f1f5f9)",
    color: "var(--color-secondary-fg, #1e293b)",
    hover: "var(--color-secondary-hover, #e2e8f0)",
    active: "var(--color-secondary-active, #cbd5e1)",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-foreground, #1e293b)",
    hover: "var(--color-accent, #f1f5f9)",
    active: "var(--color-accent-dark, #e2e8f0)",
  },
  link: {
    background: "transparent",
    color: "var(--color-primary, #0c1220)",
    hover: "transparent",
    active: "transparent",
    textDecoration: "underline",
  },
};

const SizeVariants = {
  default: {
    height: "2.5rem",
    padding: "0.5rem 1rem",
  },
  sm: {
    height: "2.25rem",
    padding: "0.375rem 0.75rem",
    fontSize: "0.875rem",
  },
  lg: {
    height: "2.75rem",
    padding: "0.625rem 2rem",
    fontSize: "1.125rem",
  },
  icon: {
    height: "2.5rem",
    width: "2.5rem",
    padding: "0.5rem",
  },
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 150ms;
  cursor: pointer;
  border: 1px solid transparent;
  
  ${(props) => {
    const variant = ButtonVariants[props.$variant || "default"];
    const size = SizeVariants[props.$size || "default"];
    
    return `
      background-color: ${variant.background};
      color: ${variant.color};
      height: ${size.height};
      ${size.width ? `width: ${size.width};` : ""}
      padding: ${size.padding};
      ${size.fontSize ? `font-size: ${size.fontSize};` : ""}
      ${variant.borderColor ? `border-color: ${variant.borderColor};` : ""}
      ${variant.textDecoration ? `text-decoration: ${variant.textDecoration};` : ""}
      
      &:hover:not(:disabled) {
        background-color: ${variant.hover};
        ${variant.hoverColor ? `color: ${variant.hoverColor};` : ""}
        ${variant.textDecoration ? "text-decoration: underline;" : ""}
      }
      
      &:active:not(:disabled) {
        background-color: ${variant.active};
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
  }}
  
  a& {
    text-decoration: none;
  }
`;

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", children, asChild, ...props }, ref) => {
    // If we're using asChild, we'll need to clone the children and spread props
    if (asChild && React.Children.count(children) === 1) {
      const child = React.Children.only(children);
      return React.cloneElement(child, {
        ref,
        className: cn(className),
        ...props,
      });
    }
    
    return (
      <StyledButton
        className={cn(className)}
        $variant={variant}
        $size={size}
        ref={ref}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);
Button.displayName = "Button";

export { Button, ButtonVariants };