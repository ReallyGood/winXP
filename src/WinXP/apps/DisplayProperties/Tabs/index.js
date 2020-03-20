import React, { memo } from 'react';

import { Tabs, Tab, TabList, TabPanel } from '../../../../components/Tabs';

const getTabName = title => {
  return title.toLowerCase().replace(' ', '-');
};

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
          const { component, title } = tab;
          const name = `tab-${getTabName(title)}`;

          return (
            <TabPanel key={name} name={name}>
              {component({
                title,
                tab,
                dataChanged: handleDataChanged,
              })}
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
});
