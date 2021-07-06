import React, { useContext } from 'react';
import { TabContext } from './Tabs';

import { StyledTab } from './tabs.styles';

export default function Tab(props) {
  const {
    name,
    className = '',
    onClick = () => {},
    children,
    ...restProps
  } = props;

  const tabContext = useContext(TabContext);
  const isActive = tabContext.activeTab === name;
  const classNames = `
      tab
      ${isActive ? 'active' : ''}
      ${className}
    `;

  const handleClick = event => {
    tabContext.setActiveTab(name);
    onClick(event);
  };

  return (
    <StyledTab
      className={classNames}
      onClick={handleClick}
      isActive={isActive}
      {...restProps}
    >
      {children}
    </StyledTab>
  );
}
