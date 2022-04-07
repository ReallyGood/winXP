import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

function InfoDialog({ info, onClose }) {
  return (
    <InnerWindow>
      <div>{info}</div>
      <Button onClick={onClose}>OK</Button>
    </InnerWindow>
  );
}

const InnerWindow = styled.div`
  height: 100%;
  background-color: rgb(236, 233, 218);
  padding: 10px;
`;

export default InfoDialog;
