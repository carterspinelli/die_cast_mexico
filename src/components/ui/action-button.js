import React from "react";
import { LoaderCircle } from "lucide-react";
import styled from "styled-components";
import { Button } from "./button";

const ActionButtonContainer = styled(Button)`
  display: inline-grid;
  place-items: center;
  grid-template-areas: 'stack';
  position: relative;
  border: none;
  border-radius: 8px;
  background: #0c1220;
  color: #ffffff;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  &:hover:not(:disabled) {
    background: #172b49;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
  
  &:focus:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 3px rgba(12, 18, 32, 0.3);
  }
  
  &:disabled {
    background: #0c1220;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  grid-area: stack;
  transition: opacity 0.2s ease;
  opacity: ${props => props.isPending ? 0 : 1};
  visibility: ${props => props.isPending ? 'hidden' : 'visible'};
`;

const LoaderContainer = styled.div`
  grid-area: stack;
  transition: opacity 0.2s ease;
  opacity: ${props => props.isPending ? 1 : 0};
  visibility: ${props => props.isPending ? 'visible' : 'hidden'};
`;

const StyledLoader = styled(LoaderCircle)`
  width: 1.25rem;
  height: 1.25rem;
  color: #ffffff;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ActionButton = React.forwardRef(
  ({ children, isPending, onClick, variant, size, className, ...props }, ref) => {
    return (
      <ActionButtonContainer
        onClick={
          onClick
            ? (e) => {
                e.preventDefault();
                onClick();
              }
            : undefined
        }
        type="submit"
        disabled={isPending}
        variant={variant}
        size={size}
        className={className}
        ref={ref}
        {...props}
      >
        <ButtonContent isPending={isPending}>
          {children}
        </ButtonContent>
        <LoaderContainer isPending={isPending}>
          <StyledLoader aria-label="Submitting" />
        </LoaderContainer>
      </ActionButtonContainer>
    );
  }
);

ActionButton.displayName = "ActionButton";

export default ActionButton;