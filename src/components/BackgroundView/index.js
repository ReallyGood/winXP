import React from 'react';
import styled from 'styled-components';

function BackgroundView({ background }) {
  const { type, size, image, color } = background;
  return <Background type={type} size={size} image={image} color={color} />;
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  ${({ type, image, color, size }) => {
    return `background-image: url(${image});
      background-color: ${color}
      background-repeat: no-repeat;
      background-position: center;
      background-size: ${size};`;
  }}
`;
// repeat? return repeat and position unset/top left : return no-repeat and position center

export default BackgroundView;
