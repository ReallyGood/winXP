import React, { memo, useState } from 'react';

import ThemesTab from './ThemesTab';
import DesktopTab from './DesktopTab';
import ScreenSaverTab from './ScreenSaverTab';
import AppearanceTab from './AppearanceTab';
import SettingsTab from './SettingsTab';
import { Tabs, Tab, TabList, TabPanel } from '../../../../components/Tabs';

export const defaultPropertiesTabs = [
  {
    title: 'Themes',
    component: ThemesTab,
    data: {
      id: 'themes',
    },
  },
  {
    title: 'Desktop',
    component: DesktopTab,
    data: {
      counter: 0,
      id: 'desktop',
    },
  },
  {
    title: 'Screen Saver',
    component: ScreenSaverTab,
    data: {
      id: 'screen-saver',
    },
  },
  {
    title: 'Appearance',
    component: AppearanceTab,
    data: {
      id: 'appearance',
    },
  },
  {
    title: 'Settings',
    component: SettingsTab,
    data: {
      id: 'Settings',
    },
  },
];

const getTabName = title => title.toLowerCase().replace(' ', '-');

export default memo(function PropertiesTabs(props) {
  const { propertiesDataChanged = () => {}, tabs } = props;
  const handleDataChanged = data => {
    propertiesDataChanged(data);
  };

  // const getPanels = tabs.map(tab => {
  //   const { component, data, title } = tab;
  //   const name = `tab-${getTabName(title)}`;

  //   return (
  //     <TabPanel key={name} name={name}>
  //       {component({
  //         data,
  //         dataChanged: handleDataChanged,
  //       })}
  //     </TabPanel>
  //   );
  // });

  // const getTabsList = tabs.map(tab => {
  //   const { title } = tab;
  //   const name = `tab-${getTabName(title)}`;

  //   return (
  //     <Tab key={name} name={name}>
  //       {title}
  //     </Tab>
  //   );
  // });

  return (
    <div className="display-properties-tabs">
      <Tabs initialValue="tab-desktop">
        <TabList>
          {tabs.map(tab => {
            const { title } = tab;
            const name = `tab-${getTabName(title)}`;

            return (
              <Tab key={name} name={name}>
                {title}
              </Tab>
            );
          })}
        </TabList>
        {tabs.map(tab => {
          const { component, data, title } = tab;
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
        })}
      </Tabs>
    </div>
  );
});
