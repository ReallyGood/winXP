import React, { useState, useEffect } from 'react';
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
    isVisible,
  } = props;
  const [hovering, setHovering] = useState('');

  const handleMenuItemClick = menuItem => () => {
    onClickContextMenuItem(menuItem);
    hideMenu();
    setHovering('');
  };

  const onMouseOver = e => {
    const item = e.target.closest('.menu__item');
    if (!item) return;
    setHovering(item.querySelector('.menu__item__text').textContent);
  };

  useEffect(() => {
    if (!isVisible) {
      setHovering('');
    }
  }, [isVisible]);

  return (
    <StyledContextMenu {...bindMenu} onMouseOver={onMouseOver} className="menu">
      {contextMenuItems.map(item => {
        return (
          <StyledContextMenuItem
            key={item.label}
            {...bindMenuAction}
            {...item}
            onClick={handleMenuItemClick(item)}
            className="menu__item"
          >
            <span className="menu__item__text ">{item.label}</span>
            {hovering === item.label && item.subMenu && (
              <StyledContextMenu>
                {item.subMenu.map(subMenuItem => {
                  return (
                    <StyledContextMenuItem
                      key={subMenuItem.label}
                      {...subMenuItem}
                    >
                      <span>{subMenuItem.label}</span>
                    </StyledContextMenuItem>
                  );
                })}
              </StyledContextMenu>
            )}
          </StyledContextMenuItem>
        );
      })}
    </StyledContextMenu>
  );
}

const getAdditionalStyles = props => {
  const { disabled, separator, subMenu } = props;

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
      ${subMenuStyles}
      ${disabledStyles}
      ${separatorStyles}
    `;
};

const StyledContextMenu = styled('ul')`
  z-index: 50;
  width: 100%;
  max-width: 140px;
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
    outline: 1px solid red;
  }

  ${StyledContextMenu} {
    position: absolute;
    right: -100%;
    top: -3px;
  }
`;
