import React, { useState } from 'react';
import styled from 'styled-components';

import PropertiesTabs, { tabs } from './Tabs';
import Button from '../../../components/Button';

export default function DisplayProperties(props) {
  const { onSave, onClose } = props;
  const initialPropertiesData = tabs.map(tab => tab.data);
  const [propertiesData, setPropertiesData] = useState(initialPropertiesData);

  const handleActionClicked = action => {
    console.log('handleActionClicked data', action);

    if (action) {
      const { apply, close } = action;

      if (apply) {
        console.log('apply changes');
        onSave(propertiesData);
      }

      if (close) {
        console.log('close display properties');
        onClose();
      }
    }
  };

  const actions = [
    {
      label: 'OK',
      props: { apply: true, close: true },
      disabled: false,
    },
    {
      label: 'Cancel',
      props: { apply: false, close: true },
      disabled: false,
    },
    {
      label: 'Apply',
      onClick: { apply: true, close: false },
      disabled: false,
    },
  ];

  const handlePropertiesDataChanged = newData => {
    console.log('propertiesDataChanged newData ', newData);
    console.log('propertiesDataChanged propertiesData ', propertiesData);

    const updated = propertiesData.map(data =>
      data.id === newData.id ? newData : data,
    );

    console.log('propertiesDataChanged updated', updated);
    setPropertiesData(updated);
  };

  return (
    <Div>
      <PropertiesTabs propertiesDataChanged={handlePropertiesDataChanged} />
      <StyledFooter>
        {actions.map(action => (
          <FooterAction
            key={action.label}
            onClick={handleActionClicked}
            action={action.onClick}
          >
            {action.label}
          </FooterAction>
        ))}
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

const FooterAction = styled(Button)`
  margin-right: 9px;
`;

const StyledFooter = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 9px 0;

  ${FooterAction} {
    &:last-child {
      margin-right: 0;
    }
  }
`;
