import React, { memo, useState } from 'react';

import ThemesTab from './ThemesTab';
import DesktopTab from './DesktopTab';
import ScreenSaverTab from './ScreenSaverTab';
import AppearanceTab from './AppearanceTab';
import SettingsTab from './SettingsTab';
import { Tabs, Tab, TabList, TabPanel } from '../../../../components/Tabs';
import defaultBackground from '../../../../assets/displayProperties/backgrounds/default.jpg';
import reallyGoodBackground from '../../../../assets/displayProperties/backgrounds/really-good.png';

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
      id: 'desktop',
      backgroundIsImage: true,
      backgroundSrc: reallyGoodBackground,
      solidColor: 'red',
      backgroundOptions: [
        {
          name: '(None)',
          src: null,
        },
        {
          name: 'windows',
          src: defaultBackground,
        },
        {
          name: 'really-good',
          src: reallyGoodBackground,
        },
        {
          name: 'bg1',
          src:
            'https://www.kellsolutions.com/wp-content/uploads/2019/07/1564233245-678x381.jpg',
        },
        {
          name: 'bg2',
          src:
            'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          name: 'bg3',
          src:
            'https://cdn.shopify.com/s/files/1/2440/7149/products/WH401_800x.jpg?v=1579885607',
        },
        {
          name: 'bg4',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1wpFtY1HNEUdmCQj8iN0hFxWVFGTWhs-YftqfpBn-qJHtjC7R',
        },
        {
          name: 'bg5',
          src:
            'https://images.befunky.com/wp/wp-2016-03-blur-background-featured-1.jpg?auto=format&fm=jpg&q=75&w=880&ixlib=js-1.4.1',
        },
        {
          name: 'bg6',
          src:
            'https://wallup.net/wp-content/uploads/2016/01/153280-Fractalius-leopard-black_background-animals-digital_art-748x421.jpg',
        },
        {
          name: 'bg7',
          src:
            'https://img5.goodfon.com/wallpaper/nbig/7/65/koshka-kot-vzgliad-morda-fon-portret-khvost-priroda-razmytie.jpg',
        },
      ],
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
