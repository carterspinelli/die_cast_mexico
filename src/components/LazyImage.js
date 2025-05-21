import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${props => props.height || "auto"};
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: ${props => props.borderRadius || "0"};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || "cover"};
  transition: opacity 0.3s ease, transform 0.5s ease;
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  transform: ${props => (props.isLoaded ? "scale(1)" : "scale(1.05)")};
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  transition: opacity 0.3s ease;
  opacity: ${props => (props.isLoaded ? 0 : 1)};
  z-index: ${props => (props.isLoaded ? -1 : 1)};
`;

const LazyImage = ({
  src,
  alt,
  height,
  width,
  objectFit,
  borderRadius,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Reset loaded state when src changes
    setIsLoaded(false);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setIsLoaded(false);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <ImageWrapper 
      height={height} 
      width={width} 
      borderRadius={borderRadius}
      className={className}
      {...props}
    >
      {imageSrc && (
        <StyledImage
          src={imageSrc}
          alt={alt}
          isLoaded={isLoaded}
          objectFit={objectFit}
        />
      )}
      <Placeholder isLoaded={isLoaded} />
    </ImageWrapper>
  );
};

export default LazyImage;