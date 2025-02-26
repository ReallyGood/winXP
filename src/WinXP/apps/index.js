import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import MyComputer from './MyComputer';
import Notepad from './Notepad';
import FindDialog from './Notepad/FindDialog';
import ReplaceDialog from './Notepad/ReplaceDialog';
import InfoDialog from './InfoDialog';
import Winamp from './Winamp';
import Paint from './Paint';
import DisplayProperties from './DisplayProperties';
import Pipes3DProperties from './DisplayProperties/Pipes3DProperties';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import computer from 'assets/windowsIcons/676(16x16).png';
import computerLarge from 'assets/windowsIcons/676(32x32).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/winamp.png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
export const defaultAppState = [
  {
    component: InternetExplorer,
    header: {
      title: 'Internet Explorer',
      icon: iePaper,
      buttons: ['minimize', 'maximize', 'close'],
    },
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 130,
      y: 20,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Minesweeper,
    header: {
      title: 'Minesweeper',
      icon: mine,
      buttons: ['minimize', 'maximize', 'close'],
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 180,
      y: 170,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Winamp,
    header: {
      title: 'Winamp',
      icon: winamp,
      invisible: true,
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: MyComputer,
    header: {
      title: 'My Computer',
      icon: computer,
      buttons: ['minimize', 'maximize', 'close'],
    },
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 250,
      y: 40,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 0,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 1,
    icon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
  {
    id: 2,
    icon: computerLarge,
    title: 'My Computer',
    component: MyComputer,
    isFocus: false,
  },
  {
    id: 3,
    icon: notepadLarge,
    title: 'Notepad',
    component: Notepad,
    isFocus: false,
  },
  {
    id: 4,
    icon: winamp,
    title: 'Winamp',
    component: Winamp,
    isFocus: false,
  },
  {
    id: 5,
    icon: paintLarge,
    title: 'Paint',
    component: Paint,
    isFocus: false,
  },
];

export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'InternetExplorer',
      buttons: ['minimize', 'maximize', 'close'],
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Minesweeper: {
    header: {
      icon: mine,
      title: 'Minesweeper',
      buttons: ['minimize', 'maximize', 'close'],
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 190,
      y: 180,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  'My Computer': {
    header: {
      icon: computer,
      title: 'My Computer',
      buttons: ['minimize', 'maximize', 'close'],
    },
    component: MyComputer,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Untitled - Notepad',
      buttons: ['minimize', 'maximize', 'close'],
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Winamp: {
    header: {
      icon: winamp,
      title: 'Winamp',
      invisible: true,
    },
    component: Winamp,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  Paint: {
    header: {
      icon: paint,
      title: 'Untitled - Paint',
      buttons: ['minimize', 'maximize', 'close'],
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 280,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Properties: {
    header: {
      title: 'Display Properties',
      buttons: ['help', 'close'],
    },
    component: DisplayProperties,
    defaultSize: {
      width: 400,
      height: 475,
    },
    defaultOffset: {
      x: 40,
      y: 40,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  Pipes3D: {
    header: {
      title: '3D Pipes Settings',
      buttons: ['help', 'close'],
    },
    component: Pipes3DProperties,
    defaultSize: {
      width: 480,
      height: 265,
    },
    defaultOffset: {
      x: 100,
      y: 110,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  FindDialog: {
    header: {
      title: 'Find',
      buttons: ['help', 'close'],
    },
    component: FindDialog,
    defaultSize: {
      width: 400,
      height: 138,
    },
    defaultOffset: {
      x: 200,
      y: 200,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  ReplaceDialog: {
    header: {
      title: 'Replace',
      buttons: ['help', 'close'],
    },
    component: ReplaceDialog,
    defaultSize: {
      width: 400,
      height: 180,
    },
    defaultOffset: {
      x: 200,
      y: 200,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  InfoDialog: {
    header: {
      title: 'Information',
      buttons: ['close'],
    },
    component: InfoDialog,
    defaultSize: {
      width: 'fit-content',
      height: 150,
    },
    defaultOffset: {
      x: 600,
      y: 150,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
};

export {
  InternetExplorer,
  Minesweeper,
  ErrorBox,
  MyComputer,
  Notepad,
  Winamp,
  DisplayProperties,
};
