import React from 'react';

import { Tabs, Tab, TabList, TabPanel } from '../../../components/Tabs';

export default function PropertiesTabs() {
  return (
    <div className="display-properties-tabs">
      <Tabs initialValue="tab-desktop">
        <TabList>
          <Tab name="tab-themes">
            <div>Themes</div>
          </Tab>
          <Tab name="tab-desktop">
            <div>Desktop</div>
          </Tab>
          <Tab name="tab-screen-saver">
            <div>Screen Saver</div>
          </Tab>
        </TabList>
        <TabPanel name="tab-themes">
          <h2>tab-themes</h2>
        </TabPanel>
        <TabPanel name="tab-desktop">
          <h2>tab-desktop</h2>
        </TabPanel>
        <TabPanel name="tab-screen-saver">
          <h2>tab-screen-saver</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
