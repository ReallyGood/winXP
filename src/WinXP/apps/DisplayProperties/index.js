import React, { useState } from 'react';
import styled from 'styled-components';

import PropertiesTabs from './Tabs';
import Button from '../../../components/Button';
import { SAVE_DISPLAY_PROPERTIES } from '../../constants/actions';

export default function DisplayProperties(props) {
  const { onSave, onClose, tabs } = props;
  const [propertiesData, setPropertiesData] = useState(tabs);
  const [dataChanged, setDataChanged] = useState(false);

  const handleActionClicked = action => {
    if (action) {
      const { apply, close } = action;

      if (apply) {
        onSave({ action: SAVE_DISPLAY_PROPERTIES, stateData: propertiesData });
      }

      if (close) {
        onClose();
      }
    }
  };

  const actions = [
    {
      label: 'OK',
      onClick: { apply: true, close: true },
      disabled: !dataChanged,
    },
    {
      label: 'Cancel',
      onClick: { apply: false, close: true },
      disabled: false,
    },
    {
      label: 'Apply',
      onClick: { apply: true, close: false },
      disabled: !dataChanged,
    },
  ];

  const handlePropertiesDataChanged = newTab => {
    const updated = propertiesData.map(tab => {
      return tab.data.id === newTab.data.id ? newTab : tab;
    });
    setPropertiesData(updated);
    setDataChanged(true);
  };

  return (
    <Div>
      <PropertiesTabs
        tabs={tabs}
        propertiesDataChanged={handlePropertiesDataChanged}
      />
      <StyledFooter>
        {actions.map(action => (
          <FooterAction
            key={action.label}
            handleOnClick={handleActionClicked}
            action={action.onClick}
            disabled={action.disabled}
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
