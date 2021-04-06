import React from 'react';
import styled from 'styled-components';

function BackgroundView({ background }) {
  const { position, image, color } = background;
  return <Background position={position} image={image} color={color} />;
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  ${({ image, color, position }) => {
    return `background-image: url(${image});
      background-color: ${color}
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100% ;`;
  }}
`;
// repeat? return repeat and position unset/top left : return no-repeat and position center

export default BackgroundView;
