import React, { createContext, useState } from 'react';

import { StyledTabs } from './tabs.styles';

export const TabContext = createContext();

export default function Tabs(props) {
  const { initialValue, className = '', children, ...restProps } = props;

  const [activeTab, setActiveTab] = useState(initialValue);
  const tabProviderValue = { activeTab, setActiveTab };

  return (
    <TabContext.Provider value={tabProviderValue}>
      <StyledTabs className={`tabs ${className}`} {...restProps}>
        {children}
      </StyledTabs>
    </TabContext.Provider>
  );
}
