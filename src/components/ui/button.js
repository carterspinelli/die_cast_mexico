import React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styled, { keyframes, css } from "styled-components";

// Keyframe animations
const shine = keyframes`
  0% { background-position: 200% 0; }
  25% { background-position: -200% 0; }
  100% { background-position: -200% 0; }
`;

// Styled button component with advanced animations
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
  transition: all 0.15s ease;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(12, 18, 32, 0.5), 0 0 0 4px rgba(12, 18, 32, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  /* Default variant */
  ${props => props.variant === "default" && css`
    background-color: #0c1220;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #172b49;
      color: white;
    }
  `}

  /* Expand Icon variant */
  ${props => props.variant === "expandIcon" && css`
    background-color: #0c1220;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #172b49;
      color: white;
    }
  `}

  /* Shine animation variant */
  ${props => props.variant === "shine" && css`
    background: linear-gradient(90deg, #0c1220, #172b49, #0c1220);
    background-size: 400% 100%;
    color: white;
    animation: ${shine} 3s ease-out infinite;
    
    &:hover:not(:disabled) {
      animation-duration: 1s;
    }
  `}

  /* Ring Hover variant */
  ${props => props.variant === "ringHover" && css`
    background-color: #0c1220;
    color: white;
    transition: all 0.3s ease;
    
    &:hover:not(:disabled) {
      background-color: #172b49;
      box-shadow: 0 0 0 2px #172b49, 0 0 0 4px rgba(23, 43, 73, 0.3);
    }
  `}

  /* Gooey Right variant */
  ${props => props.variant === "gooeyRight" && css`
    background-color: #0c1220;
    color: white;
    z-index: 0;
    transition: all 0.5s ease;
    
    &:before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      transform: translateX(150%) translateY(150%) scale(2.5);
      border-radius: 100%;
      background: linear-gradient(to right, #6b7280, #9ca3af);
      transition: transform 1s ease;
    }
    
    &:hover:not(:disabled):before {
      transform: translateX(0%) translateY(0%) scale(2.5);
    }
  `}

  /* Gooey Left variant */
  ${props => props.variant === "gooeyLeft" && css`
    background-color: #0c1220;
    color: white;
    z-index: 0;
    transition: all 0.5s ease;
    
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      transform: translateX(-150%) translateY(150%) scale(2.5);
      border-radius: 100%;
      background: linear-gradient(to left, #6b7280, #9ca3af);
      transition: transform 1s ease;
    }
    
    &:hover:not(:disabled):after {
      transform: translateX(0%) translateY(0%) scale(2.5);
    }
  `}

  /* Link Hover variants */
  ${props => props.variant === "linkHover1" && css`
    background: transparent;
    color: #0c1220;
    padding: 0.5rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0.5rem;
      left: 1rem;
      right: 33%;
      height: 1px;
      background-color: #0c1220;
      transform-origin: bottom left;
      transform: scaleX(1);
      transition: transform 0.3s ease-in-out;
    }
    
    &:hover:not(:disabled):after {
      transform-origin: bottom right;
      transform: scaleX(0);
    }
  `}

  ${props => props.variant === "linkHover2" && css`
    background: transparent;
    color: #0c1220;
    padding: 0.5rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0.5rem;
      left: 1rem;
      right: 33%;
      height: 1px;
      background-color: #0c1220;
      transform-origin: bottom right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
    
    &:hover:not(:disabled):after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  `}

  /* Outline variant */
  ${props => props.variant === "outline" && css`
    border: 1px solid #e2e8f0;
    background-color: transparent;
    color: #374151;
    
    &:hover:not(:disabled) {
      background-color: #f7fafc;
      color: #0c1220;
    }
  `}

  /* Ghost variant */
  ${props => props.variant === "ghost" && css`
    background: transparent;
    color: #374151;
    
    &:hover:not(:disabled) {
      background-color: #f7fafc;
    }
  `}

  /* Link variant */
  ${props => props.variant === "link" && css`
    color: #0c1220;
    text-decoration: underline;
    height: auto;
    padding: 0;
    background: transparent;
    
    &:hover:not(:disabled) {
      text-decoration: none;
    }
  `}

  /* Size variants */
  ${props => props.size === "sm" && css`
    height: 2.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.75rem;
  `}

  ${props => props.size === "lg" && css`
    height: 2.75rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1rem;
  `}

  ${props => props.size === "icon" && css`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
  `}
`;

// Icon container for expand animations
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 0;
  opacity: 0;
  transition: all 0.2s ease;
  
  ${props => props.placement === "left" && css`
    transform: translateX(0%);
    padding-right: 0;
  `}
  
  ${props => props.placement === "right" && css`
    transform: translateX(100%);
    padding-left: 0;
  `}
`;

// Button wrapper that adds group class for expand icon variant
const ButtonWrapper = styled.div`
  ${props => props.variant === "expandIcon" && css`
    &:hover ${IconContainer}[data-placement="left"] {
      width: 1.25rem;
      transform: translateX(100%);
      padding-right: 0.5rem;
      opacity: 1;
    }
    
    &:hover ${IconContainer}[data-placement="right"] {
      width: 1.25rem;
      transform: translateX(0);
      padding-left: 0.5rem;
      opacity: 1;
    }
  `}
`;

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, Icon, iconPlacement, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const buttonContent = (
      <StyledButton
        as={Comp}
        className={className}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      >
        {Icon && iconPlacement === "left" && (
          <IconContainer placement="left" data-placement="left">
            <Icon />
          </IconContainer>
        )}
        <Slottable>{children}</Slottable>
        {Icon && iconPlacement === "right" && (
          <IconContainer placement="right" data-placement="right">
            <Icon />
          </IconContainer>
        )}
      </StyledButton>
    );

    // Wrap with ButtonWrapper only for expandIcon variant
    if (variant === "expandIcon" && Icon) {
      return (
        <ButtonWrapper variant={variant}>
          {buttonContent}
        </ButtonWrapper>
      );
    }

    return buttonContent;
  }
);

Button.displayName = "Button";