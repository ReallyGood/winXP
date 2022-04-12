import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import DialogInner from './DialogInner';
import Button from 'components/Button';
import RadioGroup from 'components/RadioGroup';
import LegendFieldset from 'components/LegendFieldset';
import CheckBox from 'components/CheckBox';

function FindDialog({
  findSettings,
  findNext,
  updateSettings,
  onClose,
  isFocus,
}) {
  /// Make copy of the findSettings properties
  const [findSettingsState, setFindSettingsState] = useState({
    ...findSettings,
  });
  const inputRef = useRef();

  const handleChange = (field, value) => {
    setFindSettingsState(prev => ({ ...prev, [field]: value }));
  };

  const directionChange = useCallback(value => {
    handleChange('forwardSearch', value === 'down' ? true : false);
  }, []);

  /// Always set search direction to 'down' and case sensitivity to false on mount
  useEffect(() => {
    directionChange('down');
    handleChange('caseSensitive', false);
    updateSettings({ forwardSearch: true, caseSensitive: false });
  }, [updateSettings, directionChange]);

  /// Re-focus when window is back on focus
  useEffect(() => {
    if (isFocus) inputRef.current.focus();
  }, [isFocus]);

  return (
    <DialogInner onKeyDown={e => e.key === 'Escape' && onClose()}>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <TextInput>
            <label htmlFor="searchWord">Find what: </label>
            <input
              type="text"
              id="searchWord"
              value={findSettingsState.searchWord}
              ref={inputRef}
              onChange={e => handleChange('searchWord', e.target.value)}
              autoFocus
              autoComplete="off"
            ></input>
          </TextInput>
          <ControllersWrapper>
            <CheckBox
              label="Match case"
              cb={e =>
                handleChange('caseSensitive', e.target.checked ? true : false)
              }
              checked={findSettingsState.caseSensitive}
            />
            <LegendFieldset>
              <legend>Direction</legend>
              <RadioGroup
                groupName="direction"
                options={[
                  {
                    label: 'Up',
                    value: 'up',
                    id: 'up',
                    checked: !findSettingsState.forwardSearch,
                  },
                  {
                    label: 'Down',
                    value: 'down',
                    id: 'down',
                    checked: findSettingsState.forwardSearch,
                  },
                ]}
                cb={directionChange}
              />
            </LegendFieldset>
          </ControllersWrapper>
        </div>
        <div className="buttons-wrapper">
          <Button
            disabled={!findSettingsState.searchWord}
            onClick={() => findNext(findSettingsState)}
            type="submit"
          >
            Find Next
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </form>
    </DialogInner>
  );
}

const ControllersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 10px;

  fieldset {
    width: fit-content;
    padding: 5px;
    legend {
      margin-bottom: 4px;
      right: -5px;
    }
    div {
      display: flex;
      label.container {
        margin-right: 10px;
        margin-bottom: 4px;
      }
    }
  }
`;

const TextInput = styled.div`
  input {
    width: 215px;
  }
`;

export default FindDialog;
