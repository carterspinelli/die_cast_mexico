import React from 'react';
import styled from 'styled-components';

const AvatarRoot = styled.div`
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
  ${props => props.className}
`;

const AvatarImageStyled = styled.img`
  aspect-ratio: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const AvatarFallbackStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f1f5f9;
  color: #64748b;
  font-weight: 500;
`;

export const Avatar = React.forwardRef(({ className, children, ...props }, ref) => (
  <AvatarRoot ref={ref} className={className} {...props}>
    {children}
  </AvatarRoot>
));

export const AvatarImage = React.forwardRef(({ className, src, alt, ...props }, ref) => (
  <AvatarImageStyled ref={ref} className={className} src={src} alt={alt} {...props} />
));

export const AvatarFallback = React.forwardRef(({ className, children, ...props }, ref) => (
  <AvatarFallbackStyled ref={ref} className={className} {...props}>
    {children}
  </AvatarFallbackStyled>
));

Avatar.displayName = "Avatar";
AvatarImage.displayName = "AvatarImage";
AvatarFallback.displayName = "AvatarFallback";