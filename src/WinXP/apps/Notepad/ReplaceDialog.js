import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

function ReplaceDialog({ findSettings, findNext, onReplace, onReplaceAll }) {
  /// Make copy of the findSettings properties
  const [findSettingsState, setFindSettingsState] = useState({
    ...findSettings,
  });

  const searchInputRef = useRef();
  const replaceInputRef = useRef();

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
          ref={searchInputRef}
          onChange={e => handleChange('searchWord', e.target.value)}
          autoFocus
        ></input>

        <label>Replace with: </label>
        <input
          type="text"
          value={findSettingsState.replaceWith}
          ref={replaceInputRef}
          onChange={e => handleChange('replaceWith', e.target.value)}
        ></input>
      </div>
      <Button
        disabled={!findSettingsState.searchWord}
        onClick={() => findNext(findSettingsState)}
      >
        Find next
      </Button>
      <Button
        disabled={!findSettingsState.searchWord}
        onClick={() => onReplace(findSettingsState)}
      >
        Replace
      </Button>
      <Button
        disabled={!findSettingsState.searchWord}
        onClick={() => onReplaceAll(findSettingsState)}
      >
        Replace All
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

export default ReplaceDialog;
