import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import RadioGroup from 'components/RadioGroup';

function FindDialog({ findSettings, onFindNext }) {
  /// Make copy of the findSettings properties
  const [findSettingsState, setFindSettingsState] = useState({
    ...findSettings,
  });

  const inputRef = useRef();

  const handleChange = (field, value) => {
    setFindSettingsState(prev => ({ ...prev, [field]: value }));
  };

  return (
    <InnerWindow>
      <div>
        <label>Find what: </label>
        <input
          type="text"
          value={findSettingsState.searchWord}
          ref={inputRef}
          onChange={e => handleChange('searchWord', e.target.value)}
          autoFocus
        ></input>
      </div>
      <Button
        disabled={!findSettingsState.searchWord}
        onClick={() => onFindNext({ searchWord: findSettingsState.searchWord })}
      >
        Find next
      </Button>
    </InnerWindow>
  );
}

const InnerWindow = styled.div`
  height: 100%;
  background-color: rgb(236, 233, 218);
  padding: 10px;

  /* input[type='text'] {
  } */
`;

export default FindDialog;
