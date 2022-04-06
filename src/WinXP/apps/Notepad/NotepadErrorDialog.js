import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

function NotepadErrorDialog({ searchWord, onClose }) {
  return (
    <InnerWindow>
      <div>Cannot find "{searchWord}"</div>
      <Button onClick={onClose}>OK</Button>
    </InnerWindow>
  );
}

const InnerWindow = styled.div`
  height: 100%;
  background-color: rgb(236, 233, 218);
  padding: 10px;
`;

export default NotepadErrorDialog;
