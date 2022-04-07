import React, { useState, useRef } from 'react';

import Button from 'components/Button';
import DialogInner from './DialogInner';

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
    <DialogInner>
      <div>
        <div>
          <label>Find what: </label>
          <input
            type="text"
            value={findSettingsState.searchWord}
            ref={searchInputRef}
            onChange={e => handleChange('searchWord', e.target.value)}
            autoFocus
          ></input>
        </div>

        <div>
          <label>Replace with: </label>
          <input
            type="text"
            value={findSettingsState.replaceWith}
            ref={replaceInputRef}
            onChange={e => handleChange('replaceWith', e.target.value)}
          ></input>
        </div>
      </div>
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
      </div>
    </DialogInner>
  );
}

export default ReplaceDialog;
