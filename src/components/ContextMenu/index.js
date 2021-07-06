import React, { useState, memo, useEffect, useRef } from 'react';

import {
  menuContainerMaxWidth,
  StyledContextMenu,
  StyledContextMenuItem,
} from './styles';

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
