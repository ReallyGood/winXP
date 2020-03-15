import React from 'react';
import styled from 'styled-components';

export default function ContextMenu(props) {
  const {
    bindMenu,
    data,
    bindMenuAction,
    coords,
    onClickContextMenuItem,
    hideMenu,
    contextMenuItems,
  } = props;

  const handleMenuItemClick = n => () => {
    onClickContextMenuItem(n);
    hideMenu();
  };

  return (
    <StyledContextMenu {...bindMenu} className="menu">
      {contextMenuItems.map(item => {
        return (
          <StyledContextMenuItem
            key={item.label}
            {...bindMenuAction}
            {...item}
            onClick={handleMenuItemClick(item)}
          >
            <span>{item.label}</span>
            {/*
            {item.subMenu && (
              <StyledContextMenu>
                {item.subMenu.map(subMenuItem => {
                  return (
                    <StyledContextMenuItem>
                      <span>{subMenuItem.label}</span>
                    </StyledContextMenuItem>
                  );
                })}
              </StyledContextMenu>
            )} */}
          </StyledContextMenuItem>
        );
      })}
    </StyledContextMenu>
  );
}

const getAdditionalStyles = props => {
  const { disabled, saperator, subMenu } = props;

  const subMenuStyles = subMenu
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

  const saperatorStyles = saperator
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
      ${subMenuStyles}
      ${disabledStyles}
      ${saperatorStyles}
    `;
};

const StyledContextMenu = styled('ul')`
  z-index: 50;
  background-color: #fff;
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #a7a394;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledContextMenuItem = styled('li')`
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
    span {
      background-color: rgb(47, 113, 205);
      color: rgb(255, 255, 255);
    }

    /** before: submenuArrow */
    &&:before {
      border-left-color: #fff;
    }
  }
`;
