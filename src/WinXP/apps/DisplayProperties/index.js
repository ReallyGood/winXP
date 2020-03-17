import React from 'react';
import styled from 'styled-components';

import PropertiesTabs from './PropertiesTabs';
import Button from '../../../components/Button';

function DisplayProperties() {
  return (
    <Div>
      <PropertiesTabs />
      <StyledFooter>
        <FooterButton>OK</FooterButton>
        <FooterButton>Cancel</FooterButton>
        <FooterButton>Apply</FooterButton>
      </StyledFooter>
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
  padding: 9px 8px;
`;

const FooterButton = styled(Button)`
  margin-right: 9px;
`;

const StyledFooter = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 9px 0;

  ${FooterButton} {
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default DisplayProperties;
