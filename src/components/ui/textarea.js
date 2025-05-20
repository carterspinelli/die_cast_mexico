import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  display: flex;
  min-height: 5rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  background-color: white;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <StyledTextarea
      className={className}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";