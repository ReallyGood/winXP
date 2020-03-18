import React, { memo, useState } from 'react';

import ThemesTab from './ThemesTab';
import DesktopTab from './DesktopTab';
import ScreenSaverTab from './ScreenSaverTab';
import AppearanceTab from './AppearanceTab';
import SettingsTab from './SettingsTab';

import { Tabs, Tab, TabList, TabPanel } from '../../../../components/Tabs';

const tabs = [
  {
    title: 'Themes',
    component: ThemesTab,
    data: { id: '2' },
  },
  {
    title: 'Desktop',
    component: DesktopTab,
    data: { id: '2' },
  },
  {
    title: 'Screen Saver',
    component: ScreenSaverTab,
    data: { id: '3' },
  },
  {
    title: 'Appearance',
    component: AppearanceTab,
    data: { id: '4' },
  },
  {
    title: 'Settings',
    component: SettingsTab,
    data: { id: '5' },
  },
];

export default memo(function PropertiesTabs() {
  const getTabName = title => title.toLowerCase().replace(' ', '-');
  const initialData = tabs.map(tab => tab.data);
  const [data, setData] = useState(initialData);

  const handleDataChanged = data => {
    console.log('handleDataChanged data => ', data);
  };

  const getPanels = () =>
    tabs.map(tab => {
      const { title, component, data } = tab;
      const name = `tab-${getTabName(title)}`;

      return (
        <TabPanel key={name} name={name}>
          {component({
            title,
            data,
            dataChanged: handleDataChanged,
          })}
        </TabPanel>
      );
    });

  const getTabsList = () =>
    tabs.map(tab => {
      const name = `tab-${getTabName(tab.title)}`;

      return (
        <Tab key={name} name={name}>
          {tab.title}
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
