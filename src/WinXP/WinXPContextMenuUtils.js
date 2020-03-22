import { ADD_APP, FOCUS_DESKTOP } from './constants/actions';
import { appSettings } from './apps';

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
    state: {
      icons: sortedIcons,
      ...state,
    },
    config: { type: FOCUS_DESKTOP },
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
        action: state => {
          return arrangeIconsBy('title', state);
        },
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
    action: state => {
      return {
        state,
        config: { type: FOCUS_DESKTOP },
      };
    },
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
    action: state => {
      return {
        state,
        config: {
          type: ADD_APP,
          payload: {
            ...appSettings['Properties'],
            injectProps: { tabs: state.displayProperties },
          },
        },
      };
    },
  },
];
