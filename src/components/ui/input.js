import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  height: 2.5rem;
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
  
  /* File input specific styling */
  &[type="file"] {
    border: none;
    background-color: transparent;
    padding: 0;
    
    &::file-selector-button {
      border: 0;
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      background-color: #f7fafc;
      color: #4a5568;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 0.25rem;
    }
  }
`;

export const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <StyledInput
      type={type}
      className={className}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";