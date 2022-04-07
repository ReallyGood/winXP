import React, { useState, useRef, useContext } from 'react';
import Frame from 'react-frame-component';

import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import { getDropDownData } from './dropDownData';

import { Context as AppContext } from '../../index';
import { ADD_APP } from '../../constants/actions';
import { appSettings } from '../index';

export default function Notepad({ onClose }) {
  const [docText, setDocText] = useState('');
  const [wordWrap, setWordWrap] = useState(false);
  const [findSettings, setFindSettings] = useState({
    searchWord: '',
    replaceWith: '',
    caseSensitive: false,
    forwardSearch: true,
  });

  const textareaRef = useRef();
  const selectedText = useRef('');
  const caretStart = useRef(0);
  const caretEnd = useRef(0);

  const appContext = useContext(AppContext);

  const dropDownData = getDropDownData({
    selectedText: selectedText.current,
    docText,
  });

  function selectText(start, end) {
    caretStart.current = start;
    caretEnd.current = end;

    textareaRef.current.focus();
    requestAnimationFrame(() => {
      textareaRef.current.setSelectionRange(start, end);
    });

    selectedText.current = docText.slice(start, end);
  }

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
        onOpenFind();
        break;
      case 'Replace...':
        onOpenReplace();
        break;
      case 'Find Next':
        if (!findSettings.searchWord) onOpenFind();
        else findNext();
        break;
      default:
    }
  }

  function onCopyText() {
    navigator.clipboard.writeText(selectedText.current);
  }

  async function onPasteText() {
    const copiedText = await navigator.clipboard.readText();
    insertOrReplace(copiedText);
    focusCaret(copiedText.length);
  }

  function insertOrReplace(text) {
    const { value } = textareaRef.current;
    setDocText(
      value.substring(0, caretStart.current) +
        text +
        value.substring(caretEnd.current),
    );
  }

  function focusCaret(insertedTextLength) {
    const insteadOfText = caretStart.current + insertedTextLength;
    const afterText = caretEnd.current + insertedTextLength;
    const range = selectedText.current ? insteadOfText : afterText;
    selectText(range, range);
  }

  function onDeleteText() {
    insertOrReplace('');
    focusCaret(0);
  }

  function onReplace(newSettings) {
    /// If the searchword is selected, replace
    if (selectedText.current && selectedText.current === newSettings.searchWord)
      insertOrReplace(newSettings.replaceWith);

    findNext(newSettings);
  }

  function onReplaceAll(newSettings) {
    setFindSettings(newSettings);
    focusCaret(0);

    const regexFlags = newSettings.caseSensitive ? 'i' : 'gi';
    var regex = new RegExp(newSettings.searchWord, regexFlags);

    /// Using textareaRef.current.value to get the latest actual value
    setDocText(
      textareaRef.current.value.replace(regex, newSettings.replaceWith),
    );
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

  const updateSettings = newSettings => {
    setFindSettings({ ...findSettings, ...newSettings });
  };

  const findNext = newSettings => {
    let settings = findSettings;

    if (newSettings) {
      setFindSettings(newSettings);
      settings = { ...settings, ...newSettings };
    }
    /// Conduct the search

    const index = getIndex(settings);
    if (index !== -1) selectText(index, index + settings.searchWord.length);
    else
      openApp(
        'InfoDialog',
        { info: `Cannot find "${settings.searchWord}"` },
        {
          header: { ...appSettings.InfoDialog.header, title: 'Notepad' },
        },
      );
  };

  const getIndex = ({ forwardSearch, searchWord, caseSensitive }) => {
    let searchStr = textareaRef.current.value;

    if (!caseSensitive) {
      searchStr = docText.toLowerCase();
      searchWord = searchWord.toLowerCase();
    }

    return forwardSearch
      ? searchStr.indexOf(searchWord, caretEnd.current)
      : searchStr.lastIndexOf(searchWord, caretStart.current - 1);
  };

  function openApp(app, props, customAppSettings) {
    console.log('customAppSettings', customAppSettings);
    appContext.dispatch({
      type: ADD_APP,
      payload: {
        ...appSettings[app],
        injectProps: props,
        customAppSettings,
      },
    });
    /// Reselect text
    selectText(caretStart.current, caretEnd.current);
  }

  function onOpenFind() {
    openApp('FindDialog', { findSettings, findNext, updateSettings });
  }

  function onOpenReplace() {
    openApp('ReplaceDialog', {
      findSettings,
      findNext,
      onReplace,
      onReplaceAll,
      updateSettings,
    });
  }

  const frameInitialContent = `
  <!DOCTYPE html><html>
  <head>
  <style>
  html, div, body, textarea {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  html, body {
    overflow: hidden;
  }
  textarea {
    flex: auto;
    outline: none;
    font-family: 'Lucida Console', monospace;
    font-size: 13px;
    line-height: 14px;
    resize: none;
    padding: 2px;
    ${wordWrap ? '' : 'white-space: nowrap; overflow-x: scroll;'}
    overflow-y: scroll;
    border: 1px solid #96abff;
  }

  textarea::selection {
    background-color: #1660e8;
    color: white;
  }
  </style>
  </head>
  <body><div></div></body></html>`;

  return (
    <Div>
      <section className="np__toolbar">
        <WindowDropDowns items={dropDownData} onClickItem={onClickOptionItem} />
      </section>

      <Frame initialContent={frameInitialContent}>
        <textarea
          ref={textareaRef}
          value={docText}
          onChange={e => setDocText(e.target.value)}
          onKeyDown={onTextAreaKeyDown}
          onSelect={e => {
            const { selectionStart, selectionEnd, value } = e.target;
            selectedText.current = value.slice(selectionStart, selectionEnd);
            caretStart.current = selectionStart;
            caretEnd.current = selectionEnd;
          }}
          onBlur={() => selectText(caretStart.current, caretEnd.current)}
          spellCheck={false}
        ></textarea>
      </Frame>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;

  iframe {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .np__toolbar {
    position: relative;
    height: 21px;
    flex-shrink: 0;
    border-bottom: 1px solid white;
  }
`;
