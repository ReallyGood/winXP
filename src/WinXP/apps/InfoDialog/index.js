import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import info_bubble from 'assets/info-bubble.png';

function InfoDialog({ info, onClose }) {
  return (
    <InnerWindow>
      <Information>
        <img src={info_bubble} alt="!" height={40} />
        <p>{info}</p>
      </Information>
      <Button onClick={onClose}>OK</Button>
    </InnerWindow>
  );
}

const InnerWindow = styled.div`
  height: 100%;
  background-color: rgb(236, 233, 218);
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;

export default InfoDialog;
