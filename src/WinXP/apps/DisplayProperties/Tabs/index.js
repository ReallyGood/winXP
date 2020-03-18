import React, { memo, useState } from 'react';

import ThemesTab from './ThemesTab';
import DesktopTab from './DesktopTab';
import ScreenSaverTab from './ScreenSaverTab';
import AppearanceTab from './AppearanceTab';
import SettingsTab from './SettingsTab';
import { Tabs, Tab, TabList, TabPanel } from '../../../../components/Tabs';

export const tabs = [
  {
    component: ThemesTab,
    data: {
      title: 'Themes',
      id: '1',
    },
  },
  {
    component: DesktopTab,
    data: {
      title: 'Desktop',
      counter: 0,
      id: '2',
    },
  },
  {
    component: ScreenSaverTab,
    data: {
      title: 'Screen Saver',
      id: '3',
    },
  },
  {
    component: AppearanceTab,
    data: {
      title: 'Appearance',
      id: '4',
    },
  },
  {
    component: SettingsTab,
    data: {
      title: 'Settings',
      id: '5',
    },
  },
];

const getTabName = title => title.toLowerCase().replace(' ', '-');

export default memo(function PropertiesTabs(props) {
  const { propertiesDataChanged = () => {} } = props;

  const handleDataChanged = data => {
    propertiesDataChanged(data);
  };

  const getPanels = () =>
    tabs.map(tab => {
      const { component, data } = tab;
      const name = `tab-${getTabName(data.title)}`;

      return (
        <TabPanel key={name} name={name}>
          {component({
            data,
            dataChanged: handleDataChanged,
          })}
        </TabPanel>
      );
    });

  const getTabsList = () =>
    tabs.map(tab => {
      const { title } = tab.data;
      const name = `tab-${getTabName(title)}`;

      return (
        <Tab key={name} name={name}>
          {title}
        </Tab>
      );
    });

  return (
    <div className="display-properties-tabs">
      <Tabs initialValue="tab-desktop">
        <TabList>{getTabsList()}</TabList>
        {getPanels()}
      </Tabs>
    </div>
  );
});
