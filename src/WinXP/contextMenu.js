export const contextMenuItems = [
  {
    label: 'Arrange Icons By',
    disabled: false,
    subMenu: [
      {
        label: 'Name',
        disabled: false,
      },
      {
        label: 'Size',
        disabled: true,
      },
      {
        label: 'Type',
        disabled: true,
      },
      {
        label: 'Modified',
        disabled: true,
        separator: true,
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
