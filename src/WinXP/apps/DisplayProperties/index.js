import React from 'react';
import styled from 'styled-components';

import PropertiesTabs from './PropertiesTabs';

function DisplayProperties() {
  return (
    <Div>
      <PropertiesTabs />
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  padding: 8px;
`;

export default DisplayProperties;
