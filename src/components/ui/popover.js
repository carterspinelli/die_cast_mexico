import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import styled from "styled-components";
import { cn } from "./utils";

const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const StyledContent = styled(PopoverPrimitive.Content)`
  z-index: 50;
  width: 18rem;
  border-radius: 0.375rem;
  border: 1px solid var(--color-border, #e2e8f0);
  background-color: white;
  color: var(--color-text, #1a202c);
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  outline: none;
  
  &[data-state="open"] {
    animation: fadeIn 150ms ease-out;
  }
  
  &[data-state="closed"] {
    animation: fadeOut 150ms ease-in;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`;

const PopoverContent = React.forwardRef(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <StyledContent
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = "PopoverContent";

export { PopoverRoot as Popover, PopoverTrigger, PopoverContent };