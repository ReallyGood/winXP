import React from 'react';

import ThemesTab from './ThemesTab';
import DesktopTab from './DesktopTab';
import ScreenSaverTab from './ScreenSaverTab';
import AppearanceTab from './AppearanceTab';
import SettingsTab from './SettingsTab';

import { Tabs, Tab, TabList, TabPanel } from '../../../../components/Tabs';
export default function PropertiesTabs() {
  const getTabName = title => title.toLowerCase().replace(' ', '-');

  const tabs = [
    {
      title: 'Themes',
      component: ThemesTab,
    },
    {
      title: 'Desktop',
      component: DesktopTab,
    },
    {
      title: 'Screen Saver',
      component: ScreenSaverTab,
    },
    {
      title: 'Appearance',
      component: AppearanceTab,
    },
    {
      title: 'Settings',
      component: SettingsTab,
    },
  ];

  const getPanels = () =>
    tabs.map(tab => {
      const { title, component } = tab;
      const name = `tab-${getTabName(title)}`;
      console.log('name ***', name);
      return (
        <TabPanel key={name} name={name}>
          {component({
            ...tab,
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
}
