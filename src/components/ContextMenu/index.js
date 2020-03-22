import React, { useState, memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
const defaultRootPositions = {
  top: 0,
  right: 0,
  left: 'auto',
  bottom: 'auto',
};

const defaultSubMenuPositions = {
  right: '-100%',
  left: 'auto',
  top: '-3px',
  bottom: 'auto',
};

export default memo(function ContextMenu(props) {
  const {
    contextMenuItems,
    outerRef,
    contextMenu,
    onClickContextMenuItem,
    onHide,
  } = props;
  const ref = useRef(null);
  const [hovering, setHovering] = useState('');
  const [rootPositions, setRootPositions] = useState(defaultRootPositions);
  const [subMenuPositions, setSubMenuPositions] = useState(
    defaultSubMenuPositions,
  );

  useEffect(() => {
    if (!contextMenu) {
      setHovering('');
      setRootPositions(defaultRootPositions);
    }
  }, [contextMenu]);

  function handleClick(e) {
    e.preventDefault();
    const isRightClick = e.which === 3 || e.button === 2;
    if (!isRightClick || e.target !== ref.current) {
      onHide();
    }
  }

  const handleMenuItemClick = menuItem => () => {
    onClickContextMenuItem(menuItem);
    onHide();
  };

  const onMouseOver = e => {
    const item = e.target.closest('.menu__item');
    if (!item) return;
    setHovering(item.querySelector('.menu__item__text').textContent);
  };

  useEffect(() => {
    setHovering('');

    if (contextMenu) {
      const { xPos, yPos } = contextMenu;
      const outerRefWidth = outerRef.current && outerRef.current.offsetWidth;
      const outerRefHeight = outerRef.current && outerRef.current.offsetHeight;
      const contextMenuWidth = ref.current && ref.current.offsetWidth;
      const contextMenuHeight = ref.current && ref.current.offsetHeight;
      const hasSpaceX = xPos + contextMenuWidth < outerRefWidth;
      const hasSpaceY = yPos + contextMenuHeight < outerRefHeight;
      const hasSpaceForSubMenuX =
        hasSpaceX ||
        xPos + contextMenuWidth + menuContainerMaxWidth < outerRefWidth;
      const hasSpaceForSubMenuY =
        hasSpaceY || yPos + contextMenuHeight < outerRefHeight;

      setRootPositions({
        top: hasSpaceY ? `${yPos}px` : `${yPos - contextMenuHeight}px`,
        left: hasSpaceX ? `${xPos}px` : `${xPos - contextMenuWidth}px`,
        right: 'auto',
        bottom: 'auto',
      });

      setSubMenuPositions({
        left: !hasSpaceForSubMenuX ? '-100%' : 'auto',
        top: hasSpaceForSubMenuY ? '-3px' : 'auto',
        right: hasSpaceForSubMenuX ? '-100%' : 'auto',
        bottom: !hasSpaceForSubMenuY ? '-3px' : 'auto',
      });
    }
  }, [contextMenu, outerRef]);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  });

  if (!contextMenu) {
    return <></>;
  }

  return (
    <StyledContextMenu
      ref={ref}
      positions={rootPositions}
      onMouseOver={onMouseOver}
      className="menu"
      onContextMenu={e => e.preventDefault()}
    >
      {contextMenuItems.map(item => {
        const { action, ...restItem } = item;
        return (
          <StyledContextMenuItem
            key={item.label}
            {...restItem}
            onClick={handleMenuItemClick(item)}
            className="menu__item"
          >
            <span className="menu__item__text ">{item.label}</span>
            {hovering === item.label && item.subMenu && (
              <StyledContextMenu positions={subMenuPositions}>
                {item.subMenu.map(subMenuItem => {
                  const { action, ...restSubMenuItem } = subMenuItem;

                  return (
                    <StyledContextMenuItem
                      key={subMenuItem.label}
                      onClick={handleMenuItemClick(subMenuItem)}
                      subMenuStyles={subMenuPositions}
                      {...restSubMenuItem}
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
});

const menuContainerMaxWidth = 140;

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

const StyledContextMenu = styled('ul')`
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
    outline: none;
  }
`;
