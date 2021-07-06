import React, { useContext } from 'react';
import { TabContext } from './index';

import { StyledTabPanel } from './tabs.styles';

export default function TabPanel(props) {
  const { name, className = '', children, ...restProps } = props;

  const tabContext = useContext(TabContext);

  return (
    tabContext.activeTab === name && (
      <StyledTabPanel className={`tab-panel ${className}`} {...restProps}>
        {children}
      </StyledTabPanel>
    )
  );
}
