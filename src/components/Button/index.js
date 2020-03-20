import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  const {
    handleOnClick,
    className,
    disabled,
    children,
    label = '',
    action,
  } = props;

  return (
    <StyledButton
      className={`button ${className}`}
      onClick={() => {
        handleOnClick(action);
      }}
      disabled={disabled}
      {...props}
    >
      {children || label}
    </StyledButton>
  );
}

const StyledButton = styled('button')`
  position: relative;
  display: inline-flex;
  font-size: 12px;
  padding: ${props => props.padding || '2px 22px'};
  min-width: ${props => props.minWidth || '76px'};
  justify-content: center;
  border: 1px solid #a1a1a1;
  border-radius: 4px;
  background-image: radial-gradient(
    circle at 50% 70%,
    #e9ecec 0%,
    #e9ecec 40%,
    #e9ecec 70%,
    #fff 100%
  );

  &:focus {
    outline-offset: -4px;
    outline-width: 3px;
  }
`;
