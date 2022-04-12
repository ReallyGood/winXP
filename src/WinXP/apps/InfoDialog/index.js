import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import infoBubble from 'assets/info-bubble.png';

function InfoDialog({ info, onClose }) {
  const windowRef = useRef(null);
  useEffect(() => {
    /// Forcibly focus on the window
    windowRef.current.focus();
  }, []);

  return (
    <InnerWindow
      tabIndex="-1"
      ref={windowRef}
      onKeyDown={e => (e.key === 'Enter' || e.key === 'Escape') && onClose()}
    >
      <Information>
        <img src={infoBubble} alt="!" height={40} />
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

  :focus-visible {
    outline: none;
  }
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;

export default InfoDialog;
