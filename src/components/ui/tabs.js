import React, { useState } from "react";
import styled from "styled-components";

// Main tabs container
const TabsContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

// Tabs list styling
const TabsList = styled.div`
  display: inline-flex;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  background-color: #f0f5fa;
  border-radius: 0.5rem;
  padding: 0.25rem;
  margin-bottom: 1rem;
`;

// Individual tab trigger styling
const TabsTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.25rem;
  padding: 0 0.75rem;
  height: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-text)'};
  background-color: ${props => props.active ? 'white' : 'transparent'};
  box-shadow: ${props => props.active ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none'};
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: var(--color-primary);
  }
  
  &:focus {
    outline: none;
  }
`;

// Content area for each tab
const TabsContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  margin-top: 0.5rem;
`;

// Main Tabs component
export const Tabs = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  // Filter children to find TabsTrigger and TabsContent components
  const triggers = React.Children.toArray(children).filter(
    child => child.type === TabsTrigger
  );
  
  const contents = React.Children.toArray(children).filter(
    child => child.type === TabsContent
  );
  
  return (
    <TabsContainer className={className}>
      <TabsList>
        {triggers.map(trigger => 
          React.cloneElement(trigger, {
            active: activeTab === trigger.props.value,
            onClick: () => setActiveTab(trigger.props.value)
          })
        )}
      </TabsList>
      {contents.map(content => 
        React.cloneElement(content, {
          active: activeTab === content.props.value
        })
      )}
    </TabsContainer>
  );
};

// Export individual components
export { TabsList, TabsTrigger, TabsContent };