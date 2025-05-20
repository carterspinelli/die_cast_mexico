import React from "react";
import styled from "styled-components";
import { Info } from "lucide-react";
import { cn } from "./utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

const TableContainer = styled.div`
  margin: 1.5rem 0;
  overflow: auto;
  border: 1px solid var(--color-border, #e2e8f0);
  border-radius: 0.75rem;
  background-color: white;
`;

const StyledTable = styled.table`
  width: 100%;
  white-space: nowrap;
  font-size: 0.875rem;
  color: var(--color-text, #64748b);
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid var(--color-border, #e2e8f0);
  background-color: var(--color-light-bg, #f8fafc);
`;

const TableHeaderCell = styled.th`
  width: ${props => props.width || "auto"};
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  
  &:not(:first-child) {
    border-left: 1px solid var(--color-border, #e2e8f0);
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-border, #e2e8f0);
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  
  &:not(:first-child) {
    border-left: 1px solid var(--color-border, #e2e8f0);
  }
`;

const Code = styled.code`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-family: monospace;
`;

const PrimaryCode = styled(Code)`
  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);
  color: var(--color-primary, #3b82f6);
`;

const SecondaryCode = styled(Code)`
  background-color: var(--color-secondary-light, #f1f5f9);
  color: var(--color-secondary, #475569);
`;

const Flex = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

const InfoWrapper = styled.div`
  margin-left: 0.25rem;
  cursor: pointer;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: var(--color-muted, #94a3b8);
  }
`;

const PopoverText = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;
  max-height: 400px;
  min-width: 220px;
  max-width: 400px;
  overflow: auto;
`;

function InfoTooltip({ children }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <InfoWrapper>
          <Info />
        </InfoWrapper>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverText>{children}</PopoverText>
      </PopoverContent>
    </Popover>
  );
}

export function TypeTable({ 
  type, 
  className, 
  ...props 
}) {
  return (
    <TableContainer className={cn(className)} {...props}>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeaderCell width="45%">Specification</TableHeaderCell>
            <TableHeaderCell width="30%">Value</TableHeaderCell>
            <TableHeaderCell width="25%">Range</TableHeaderCell>
          </tr>
        </TableHead>
        <tbody>
          {Object.entries(type).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>
                <Flex>
                  <PrimaryCode>{key}</PrimaryCode>
                  {value.description && <InfoTooltip>{value.description}</InfoTooltip>}
                </Flex>
              </TableCell>
              <TableCell>
                <Flex>
                  <SecondaryCode>{value.type}</SecondaryCode>
                  {value.typeDescription && <InfoTooltip>{value.typeDescription}</InfoTooltip>}
                </Flex>
              </TableCell>
              <TableCell>
                {value.default ? (
                  <SecondaryCode>{value.default}</SecondaryCode>
                ) : (
                  <span>-</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}