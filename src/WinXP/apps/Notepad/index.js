import React, { useState, useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import { getDropDownData } from './dropDownData';

import { Context as AppContext } from '../../index';
import { ADD_APP } from '../../constants/actions';
import { appSettings } from '../index';

export default function Notepad({ onClose }) {
  const [docText, setDocText] = useState('');
  const [wordWrap, setWordWrap] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [caretPos, setCaretPos] = useState([0, 0]);

  const [findSettings, setFindSettings] = useState({
    searchWord: '',
    replaceWith: '',
    caseSensitive: false,
    searchDirection: 1,
  });

  const appContext = useContext(AppContext);

  const dropDownData = getDropDownData({ selectedText, docText });
  const textareaRef = useRef();

  function selectText(start, end) {
    textareaRef.current.focus();
    requestAnimationFrame(() => {
      textareaRef.current.setSelectionRange(start, end);
    });
  }

  useEffect(() => {
    //// Preserve text selection on blur
    textareaRef.current.addEventListener('blur', () => {
      selectText(caretPos[0], caretPos[1]);
    });
  }, [textareaRef, caretPos]);

  function onClickOptionItem(item) {
    switch (item) {
      case 'Exit':
        onClose();
        break;
      case 'Word Wrap':
        setWordWrap(!wordWrap);
        break;
      case 'Time/Date':
        const date = new Date();
        const formatedDate =
          date.toLocaleTimeString() + ' ' + date.toLocaleDateString();
        insertOrReplace(formatedDate);
        focusCaret(formatedDate.length);
        break;
      case 'Select All':
        textareaRef.current.select();
        break;
      case 'Copy':
        onCopyText();
        break;
      case 'Paste':
        onPasteText();
        break;
      case 'Cut':
        onCopyText();
        onDeleteText();
        break;
      case 'Delete':
        onDeleteText();
        break;
      case 'Find...':
        focusCaret(selectedText.length);
        onOpenFind();
        break;
      default:
    }
  }

  function onCopyText() {
    navigator.clipboard.writeText(selectedText);
  }

  async function onPasteText() {
    const copiedText = await navigator.clipboard.readText();
    insertOrReplace(copiedText);
    focusCaret(copiedText.length);
  }

  function insertOrReplace(text) {
    const { value } = textareaRef.current;
    setDocText(
      value.substring(0, caretPos[0]) + text + value.substring(caretPos[1]),
    );
  }

  function focusCaret(insertedTextLength) {
    const insteadOfText = caretPos[0] + insertedTextLength;
    const afterText = caretPos[1] + insertedTextLength;
    const range = selectedText ? insteadOfText : afterText;
    selectText(range, range);
  }

  function onDeleteText() {
    insertOrReplace('');
    focusCaret(0);
  }

  function onTextAreaKeyDown(e) {
    // handle tabs in text area
    if (e.which === 9) {
      e.preventDefault();
      e.persist();
      insertOrReplace(`\t`);
      focusCaret(`\t`.length);
    }
  }

  function onOpenFind() {
    // appContext.dispatch({
    //   type: ADD_APP,
    //   payload: {
    //     ...appSettings.FindDialog,
    //     injectProps: { findSettings, onFindNext },
    //   },
    // });
  }

  const onFindNext = newSettings => {
    let settings;

    if (newSettings) {
      settings = { ...findSettings, ...newSettings };
      /// Apply the settings in state for later
      setFindSettings(settings);
    } else settings = findSettings;

    /// Conduct the search with "settings"
    console.log(caretPos);

    const searchPart = docText.slice(caretPos[1]);
    console.log('searchPart', searchPart);
  };

  return (
    <Div>
      <section className="np__toolbar">
        <WindowDropDowns
          items={dropDownData}
          onClickItem={onClickOptionItem}
          onClick={e => console.log(e)}
        />
      </section>

      <StyledTextarea
        ref={textareaRef}
        wordWrap={wordWrap}
        value={docText}
        onChange={e => setDocText(e.target.value)}
        onKeyDown={onTextAreaKeyDown}
        onSelect={e => {
          const { selectionStart, selectionEnd, value } = e.target;
          setSelectedText(value.substring(selectionStart, selectionEnd));
          setCaretPos([selectionStart, selectionEnd]);
        }}
        spellCheck={false}
      />
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .np__toolbar {
    position: relative;
    height: 21px;
    flex-shrink: 0;
    border-bottom: 1px solid white;
  }
`;

const StyledTextarea = styled.textarea`
  flex: auto;
  outline: none;
  font-family: 'Lucida Console', monospace;
  font-size: 13px;
  line-height: 14px;
  resize: none;
  padding: 2px;
  ${props => (props.wordWrap ? '' : 'white-space: nowrap; overflow-x: scroll;')}
  overflow-y: scroll;
  border: 1px solid #96abff;
`;
