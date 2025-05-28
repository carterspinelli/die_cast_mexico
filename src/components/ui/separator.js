import React from 'react';
import styled from 'styled-components';

const SeparatorRoot = styled.div`
  flex-shrink: 0;
  background: #e2e8f0;
  ${props => props.orientation === 'horizontal' ? 'height: 1px; width: 100%;' : 'height: 100%; width: 1px;'}
  ${props => props.className}
`;

export const Separator = React.forwardRef(({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}, ref) => (
  <SeparatorRoot
    ref={ref}
    orientation={orientation}
    className={className}
    {...props}
  />
));

Separator.displayName = "Separator";