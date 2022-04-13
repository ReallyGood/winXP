import { getScrollbarCSS } from 'scrollbar';

export function getNotepadIframeStyle(wordWrap) {
  return `
${getScrollbarCSS()}
html, div, body, textarea {
height: -webkit-fill-available;
width: -webkit-fill-available;
margin: 0;
}
html, body {
overflow: hidden;
}
textarea {
cursor: auto;
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
}`;
}
