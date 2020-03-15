import React from 'react';
import styled from 'styled-components';

const ContextMenu = props => {
  const {
    bindMenu,
    data,
    bindMenuAction,
    coords,
    setClickedContextMenuItem,
    hideMenu,
  } = props;

  const handleMenuItemClick = n => () => {
    setClickedContextMenuItem(n);
    hideMenu();
  };
  return (
    <StyledContextMenu {...bindMenu} className="menu">
      <p>
        It works! <span>Click coords: {JSON.stringify(coords)}</span>
      </p>
      <p>Triggered by {data}</p>
      <p>Navigate with arrows</p>
      <p>Enter will trigger an onClick</p>
      <p>Esc will close the menu</p>
      <hr />
      <p
        {...bindMenuAction}
        onFocus={() => console.log('focused')}
        onClick={handleMenuItemClick('first')}
      >
        First command
      </p>
      <p {...bindMenuAction} onClick={handleMenuItemClick('second')}>
        Second command
      </p>
      <hr />
      <p {...bindMenuAction} onClick={handleMenuItemClick('third')}>
        Third command
      </p>
    </StyledContextMenu>
  );
};

export default ContextMenu;

const StyledContextMenu = styled('div')`
  background-color: #fff;
`;
