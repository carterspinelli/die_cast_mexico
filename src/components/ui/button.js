import React from "react";
import { cva } from "class-variance-authority";
import styled from "styled-components";

const ButtonVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      ghost: "bg-transparent hover:bg-gray-100",
      link: "text-blue-500 underline-offset-4 hover:underline",
    },
    size: {
      default: "px-4 py-2",
      sm: "px-3 py-1 text-sm",
      lg: "px-6 py-3 text-lg",
      icon: "w-10 h-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
  
  ${props => props.variant === "default" && `
    background-color: #2563eb;
    color: white;
    &:hover {
      background-color: #1d4ed8;
    }
  `}
  
  ${props => props.variant === "outline" && `
    border: 1px solid #e5e7eb;
    background-color: transparent;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `}
  
  ${props => props.variant === "secondary" && `
    background-color: #f3f4f6;
    color: #1f2937;
    &:hover {
      background-color: #e5e7eb;
    }
  `}
  
  ${props => props.variant === "ghost" && `
    background-color: transparent;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `}
  
  ${props => props.variant === "link" && `
    background-color: transparent;
    color: #2563eb;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `}
  
  ${props => props.size === "default" && `
    padding: 0.5rem 1rem;
  `}
  
  ${props => props.size === "sm" && `
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
  `}
  
  ${props => props.size === "lg" && `
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  `}
  
  ${props => props.size === "icon" && `
    padding: 0;
    width: 2.5rem;
    height: 2.5rem;
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";