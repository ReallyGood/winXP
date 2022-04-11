export const getDropDownData = ({ selectedText, docText, isWordWrap }) => {
  return {
    File: [
      {
        type: 'item',
        disable: true,
        text: 'New',
      },
      {
        type: 'item',
        disable: true,
        text: 'Open...',
      },
      {
        type: 'item',
        disable: true,
        text: 'Save',
      },
      {
        type: 'item',
        disable: true,
        text: 'Save As...',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        disable: true,
        text: 'Page Setup...',
      },
      {
        type: 'item',
        disable: true,
        text: 'Print...',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Exit',
      },
    ],
    Edit: [
      {
        type: 'item',
        disable: true,
        text: 'Undo',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        disable: !selectedText,
        text: 'Cut',
      },
      {
        type: 'item',
        disable: !selectedText,
        text: 'Copy',
      },
      {
        type: 'item',
        text: 'Paste',
      },
      {
        type: 'item',
        disable: !selectedText,
        text: 'Delete',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        disable: !docText,
        text: 'Find...',
      },
      {
        type: 'item',
        disable: !docText,
        text: 'Find Next',
      },
      {
        type: 'item',
        disable: !docText,
        text: 'Replace...',
      },
      {
        type: 'item',
        disable: true,
        text: 'Go To...',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Select All',
      },
      {
        type: 'item',
        text: 'Time/Date',
      },
    ],
    Format: [
      {
        symbol: isWordWrap && 'check',
        type: 'item',
        text: 'Word Wrap',
      },
      {
        type: 'item',
        disable: true,
        text: 'Font...',
      },
    ],
    View: [
      {
        type: 'item',
        disable: true,
        text: 'Status Bar',
      },
    ],
    Help: [
      {
        type: 'item',
        disable: true,
        text: 'Help Topics',
      },
      {
        type: 'item',
        disable: true,
        text: 'About Notepad',
      },
    ],
  };
};
