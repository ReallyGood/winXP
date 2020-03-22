import styled from 'styled-components';

export const menuContainerMaxWidth = 140;

const getAdditionalStyles = props => {
  const { disabled, separator, subMenu } = props;

  const subMenuArrowStyles = subMenu
    ? ` &:before {
          content: '';
          display: block;
          height: 0;
          width: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid ${disabled ? '#ddd' : '#000'};
          position: absolute;
          right: 3px;
          top: 50%;
          transform: translateY(-50%);
        }`
    : '';

  const disabledStyles = disabled
    ? `
      color: ${disabled ? '#ddd' : '#000'};
      pointer-events: none;
    `
    : '';

  const separatorStyles = separator
    ? ` &:after {
          content: '';
          display: block;
          height: 1px;
          width: 100%;
          background: #ddd;
          position: absolute;
          right: 0;
          left: 0;
          bottom: -5px;
        }

        margin-bottom: 10px;
        `
    : '';

  return `
      ${subMenuArrowStyles}
      ${disabledStyles}
      ${separatorStyles}
    `;
};

export const StyledContextMenu = styled('ul')`
  z-index: 50;
  width: 100%;
  max-width: ${`${menuContainerMaxWidth}px`};
  background-color: #fff;
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #a7a394;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  visibility: hidden;
  animation: 0.2s fadeIn;
  animation-fill-mode: forwards;

  ${props => {
    const { top, bottom, right, left } = props.positions;
    return `
      top: ${top};
      bottom: ${bottom};
      right: ${right};
      left: ${left};
  `;
  }}

  &&:focus {
    outline: none;
  }

  @keyframes fadeIn {
    99% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
`;

export const StyledContextMenuItem = styled('li')`
  position: relative;
  font-family: Tahoma;
  font-size: 11px;
  color: #000;
  white-space: nowrap;
  margin: 2px;
  display: block;

  span {
    padding: 5px 18px 5px 18px;
    width: 100%;
    display: block;
    line-height: 1;
  }

  ${props => {
    return getAdditionalStyles(props);
  }}

  &&:hover {
    > span {
      background-color: rgb(47, 113, 205);
      color: rgb(255, 255, 255);
    }

    /** before: submenuArrow */
    &&:before {
      border-left-color: #fff;
    }
  }

  &&:focus {
    outline: none;
  }
`;
