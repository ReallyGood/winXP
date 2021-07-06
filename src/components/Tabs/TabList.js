import React from 'react';

import { StyledTabList } from './tabs.styles';

export default function TabList(props) {
  const { className = '', children, ...restProps } = props;

  return (
    <StyledTabList className={`tab-list ${className}`} {...restProps}>
      {children}
    </StyledTabList>
  );
}
