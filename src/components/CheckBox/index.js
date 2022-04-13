import React from 'react';
import styled from 'styled-components';
import checkMark from './checkmark.svg';

function CheckBox(props) {
  return (
    <StyledCheckBox {...props}>
      <input
        disabled={props.value === '(None)'}
        type="checkbox"
        id="checkbox"
        className="checkbox"
        onChange={props.cb}
        checked={props.checked}
      />
      <label className="label" htmlFor="checkbox">
        {props.label}
      </label>
    </StyledCheckBox>
  );
}

const StyledCheckBox = styled.div`
  .checkbox {
    width: 11px;
    height: 11px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    outline: 1px solid grey;
    box-shadow: inset 24px 26px 8px -27px rgb(0 0 0 / 22%);
    background-color: white;

    &:hover:enabled {
      box-shadow: inset -2px -2px #f8b636, inset 2px 2px #fedf9c;
    }

    &:focus + label {
      border: 1px dotted grey;
    }

    &:active {
      &::before {
        content: '';
        position: absolute;
        width: 11px;
        height: 11px;
        background: linear-gradient(
          135deg,
          rgba(176, 176, 167, 1) 0%,
          rgba(227, 225, 210, 1) 100%
        );
      }
    }

    &:checked {
      &::after {
        content: '';
        position: absolute;
        width: 11px;
        height: 11px;
        background-image: url(${checkMark});
      }
    }

    &:disabled {
      width: 11px;
      height: 11px;
      outline: 1px solid #afafaf;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      background-color: white;
      opacity: 0.7;
    }
  }

  label {
    position: relative;
    bottom: 1px;
    left: 3px;
    border: 1px dotted transparent;
  }
`;

export default CheckBox;
