import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import DialogInner from './DialogInner';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';

function ReplaceDialog({
  findSettings,
  findNext,
  onReplace,
  onReplaceAll,
  onClose,
  updateSettings,
}) {
  /// Make copy of the findSettings properties
  const [findSettingsState, setFindSettingsState] = useState({
    ...findSettings,
  });

  const searchInputRef = useRef();
  const replaceInputRef = useRef();

  const handleChange = (field, value) => {
    setFindSettingsState(prev => ({ ...prev, [field]: value }));
  };

  /// Always set search direction to 'down' and case sensitivity to false on mount
  useEffect(() => {
    handleChange('caseSensitive', false);
    updateSettings({ forwardSearch: true, caseSensitive: false });
  }, [updateSettings]);

  return (
    <DialogInner>
      <InputsWrapper>
        <TextInput>
          <label>Find what: </label>
          <input
            type="text"
            value={findSettingsState.searchWord}
            ref={searchInputRef}
            onChange={e => handleChange('searchWord', e.target.value)}
            autoFocus
          ></input>
        </TextInput>

        <TextInput>
          <label>Replace with: </label>
          <input
            type="text"
            value={findSettingsState.replaceWith}
            ref={replaceInputRef}
            onChange={e => handleChange('replaceWith', e.target.value)}
          ></input>
        </TextInput>

        <div className="checkbox-wrapper">
          <CheckBox
            className="checkbox"
            label="Match case"
            cb={e =>
              handleChange('caseSensitive', e.target.checked ? true : false)
            }
            checked={findSettingsState.caseSensitive}
          />
        </div>
      </InputsWrapper>
      <div className="buttons-wrapper">
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
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </DialogInner>
  );
}

const TextInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  input {
    width: 205px;
  }
  label {
    margin-right: 10px;
  }
`;

const InputsWrapper = styled.div`
  position: relative;
  .checkbox-wrapper {
    position: absolute;
    bottom: 25px;
  }
`;

export default ReplaceDialog;
