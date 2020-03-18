import React from 'react';
import styled from 'styled-components';

import PropertiesTabs from './Tabs';
import Button from '../../../components/Button';

function DisplayProperties(props) {
  const { onSave, onClose } = props;

  const handleActionClicked = action => {
    const { actionProp } = action;
    const { apply, close } = actionProp;

    console.log('handleActionClicked ', action);

    if (apply) {
      console.log('apply changes');
      onSave({
        imageSrc: './images/bg.jbg',
        color: 'red',
      });
    }

    if (close) {
      console.log('close display properties');
      onClose();
    }
  };

  const actions = [
    {
      label: 'OK',
      actionProp: { apply: true, close: true },
      disabled: false,
    },
    {
      label: 'Cancel',
      actionProp: { apply: false, close: true },
      disabled: false,
    },
    {
      label: 'Apply',
      actionProp: { apply: true, close: false },
      disabled: false,
    },
  ];

  return (
    <Div>
      <PropertiesTabs />
      <StyledFooter>
        {actions.map(action => (
          <FooterAction
            key={action.label}
            onClick={handleActionClicked}
            {...action}
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

export default DisplayProperties;
