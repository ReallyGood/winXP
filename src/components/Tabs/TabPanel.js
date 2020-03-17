import React, { useContext } from 'react';
import { TabContext } from './index';

export default function TabPanel(props) {
  const { name, className = '', children, ...restProps } = props;

  const tabContext = useContext(TabContext);

  return (
    tabContext.activeTab === name && (
      <div className={`tab-panel ${className}`} {...restProps}>
        {children}
      </div>
    )
  );
}
