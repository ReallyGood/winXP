function arrangeIconsBy(value, state) {
  const sortedIcons = state.icons.sort(function(a, b) {
    if (a[value] < b[value]) {
      return -1;
    }
    if (a[value] > b[value]) {
      return 1;
    }
    return 0;
  });

  return {
    icons: sortedIcons,
    ...state,
  };
}

export const contextMenuItems = [
  {
    label: 'Arrange Icons By',
    disabled: false,
    subMenu: [
      {
        label: 'Name',
        disabled: false,
        action: state => arrangeIconsBy('title', state),
      },
      {
        label: 'Size',
        disabled: true,
        action: state => arrangeIconsBy('size', state),
      },
      {
        label: 'Type',
        disabled: true,
        action: state => arrangeIconsBy('type', state),
      },
      {
        label: 'Modified',
        disabled: true,
        separator: true,
        action: state => arrangeIconsBy('mpdified', state),
      },
      {
        label: 'Show in Groups',
        disabled: true,
      },
      {
        label: 'Auto Arrange',
        disabled: true,
      },
      {
        label: 'Align to Grid',
        disabled: true,
        separator: true,
      },
      {
        label: 'Show Desktop Icons',
        disabled: true,
      },
    ],
  },
  {
    label: 'Refresh',
    disabled: false,
    separator: true,
  },
  {
    label: 'Paste',
    disabled: true,
  },
  {
    label: 'Paste Shortcut',
    disabled: true,
    separator: true,
  },
  {
    label: 'New',
    disabled: true,
    separator: true,
    subMenu: [
      {
        label: 'Folder',
        disabled: true,
      },
    ],
  },
  {
    label: 'Properties',
    disabled: false,
  },
];
