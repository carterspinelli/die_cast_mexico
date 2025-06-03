import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  display: flex;
  min-height: 80px;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <StyledTextarea
      className={className}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };