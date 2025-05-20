import React, { useState, createContext, useContext } from "react";
import styled from "styled-components";

// Create context for tabs
const TabsContext = createContext({
  value: "",
  onChange: () => {},
});

// Styled components
const TabsRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TabsTriggerButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  background-color: ${props => props.active ? "var(--color-muted, #f1f5f9)" : "transparent"};
  color: ${props => props.active ? "var(--color-primary, #0f172a)" : "var(--color-muted-foreground, #64748b)"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.active ? "var(--color-muted, #f1f5f9)" : "var(--color-muted-hover, #e2e8f0)"};
  }
`;

const TabsContentContainer = styled.div`
  display: ${props => props.active ? "block" : "none"};
`;

// Tab Components
export function Tabs({ defaultValue, children, className, ...props }) {
  const [value, setValue] = useState(defaultValue);
  
  return (
    <TabsContext.Provider value={{ value, onChange: setValue }}>
      <TabsRoot className={className} {...props}>
        {children}
      </TabsRoot>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className, ...props }) {
  return (
    <TabsListContainer className={className} {...props}>
      {children}
    </TabsListContainer>
  );
}

export function TabsTrigger({ value, children, className, ...props }) {
  const context = useContext(TabsContext);
  const active = context.value === value;
  
  return (
    <TabsTriggerButton 
      active={active}
      onClick={() => context.onChange(value)}
      className={className}
      {...props}
    >
      {children}
    </TabsTriggerButton>
  );
}

export function TabsContent({ value, children, className, ...props }) {
  const context = useContext(TabsContext);
  const active = context.value === value;
  
  return (
    <TabsContentContainer 
      active={active}
      className={className}
      {...props}
    >
      {children}
    </TabsContentContainer>
  );
}