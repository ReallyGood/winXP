import React, { createContext, useState } from 'react';

export const TabContext = createContext();

export default function Tabs(props) {
  const { initialValue, className = '', children, ...restProps } = props;

  const [activeTab, setActiveTab] = useState(initialValue);
  const tabProviderValue = { activeTab, setActiveTab };

  return (
    <TabContext.Provider value={tabProviderValue}>
      <div className={`tabs ${className}`} {...restProps}>
        {children}
      </div>
    </TabContext.Provider>
  );
}
