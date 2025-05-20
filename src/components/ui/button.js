import React from "react";
import styled from "styled-components";
import { cn } from "./utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-dark",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-white hover:bg-secondary-dark",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// We'll use styled-components since that's what the project uses
const StyledButton = styled.button`
  ${props => {
    const variant = props.variant || 'default';
    const size = props.size || 'default';
    
    // Base styles
    let styles = `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      font-weight: 500;
      transition-property: color, background-color, border-color;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      
      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      
      &:disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    `;
    
    // Variant styles
    switch(variant) {
      case 'default':
        styles += `
          background-color: var(--color-primary);
          color: white;
          &:hover:not(:disabled) {
            background-color: var(--color-primary-dark);
          }
        `;
        break;
      case 'outline':
        styles += `
          background-color: transparent;
          border: 1px solid var(--color-border);
          &:hover:not(:disabled) {
            background-color: var(--color-accent-bg);
            color: var(--color-accent);
          }
        `;
        break;
      case 'secondary':
        styles += `
          background-color: var(--color-secondary);
          color: white;
          &:hover:not(:disabled) {
            background-color: var(--color-secondary-dark);
          }
        `;
        break;
      case 'ghost':
        styles += `
          background-color: transparent;
          &:hover:not(:disabled) {
            background-color: var(--color-accent-bg);
            color: var(--color-accent);
          }
        `;
        break;
      case 'link':
        styles += `
          background-color: transparent;
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 4px;
          padding: 0;
          height: auto !important;
          &:hover:not(:disabled) {
            text-decoration: none;
          }
        `;
        break;
    }
    
    // Size styles
    switch(size) {
      case 'default':
        styles += `
          height: 2.5rem;
          padding: 0.5rem 1rem;
        `;
        break;
      case 'sm':
        styles += `
          height: 2.25rem;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
        `;
        break;
      case 'lg':
        styles += `
          height: 2.75rem;
          padding: 0.75rem 2rem;
          border-radius: 0.375rem;
        `;
        break;
      case 'icon':
        styles += `
          height: 2.5rem;
          width: 2.5rem;
        `;
        break;
    }
    
    return styles;
  }}
`;

export const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <StyledButton
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";