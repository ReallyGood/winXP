import buttonUp from 'assets/scrollbar/button-up.svg';
import buttonUpLight from 'assets/scrollbar/button-up-light.svg';
import buttonUpDark from 'assets/scrollbar/button-up-dark.svg';
import buttonUpDisabled from 'assets/scrollbar/button-up-disabled.svg';

import buttonDown from 'assets/scrollbar/button-down.svg';
import buttonDownLight from 'assets/scrollbar/button-down-light.svg';
import buttonDownDark from 'assets/scrollbar/button-down-dark.svg';
import buttonDownDisabled from 'assets/scrollbar/button-down-disabled.svg';

import buttonRight from 'assets/scrollbar/button-right.svg';
import buttonRightLight from 'assets/scrollbar/button-right-light.svg';
import buttonRightDark from 'assets/scrollbar/button-right-dark.svg';
import buttonRightDisabled from 'assets/scrollbar/button-right-disabled.svg';

import buttonLeft from 'assets/scrollbar/button-left.svg';
import buttonLeftLight from 'assets/scrollbar/button-left-light.svg';
import buttonLeftDark from 'assets/scrollbar/button-left-dark.svg';
import buttonLeftDisabled from 'assets/scrollbar/button-left-disabled.svg';

import trackHorizonal from 'assets/scrollbar/track-horizonal.svg';
import trackVertical from 'assets/scrollbar/track-vertical.svg';

/* CSS taken from: https://botoxparty.github.io/XP.css/ */

export function getScrollbarCSS() {
  return `
  ::-webkit-scrollbar {
    width: 16px;
  }
  ::-webkit-scrollbar:horizontal {
    height: 17px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f8f7f0;
  }
  
  ::-webkit-scrollbar-corner {
    background: #ECEAD6;
  }
  
  ::-webkit-scrollbar-thumb {
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #c8d6fb;
    background-size: 7px;
    border: 1px solid #fff;
    border-radius: 2px;
    box-shadow: inset -2px 0 #bad1fc, inset 1px 1px #b7caf5;
    background-image: url(${trackVertical});
  }
  
  ::-webkit-scrollbar-thumb:hover {
    filter: brightness(0.4);
    background-color: #cbe4fb;
    box-shadow: inset -2px 0 #ddeaf5, inset 1px 1px #ddeaf5;
  }
  
  ::-webkit-scrollbar-thumb:active {
    background-color: rgb(176, 193, 237);
    box-shadow: inset -2px 0 #a6b7e6, inset 1px 1px #a6b7e6;
    filter: brightness(0);
  }

  
  
  ::-webkit-scrollbar-thumb:horizontal {
    background-image: url(${trackHorizonal});
  }
  
  ::-webkit-scrollbar-button:horizontal:start:decrement,
  ::-webkit-scrollbar-button:horizontal:end:increment,
  ::-webkit-scrollbar-button:vertical:start:decrement,
  ::-webkit-scrollbar-button:vertical:end:increment {
    display: block;
  }
  
  ::-webkit-scrollbar-button:vertical:start {
    height: 17px;
    background-image: url(${buttonUp});
  }

  ::-webkit-scrollbar-button:vertical:start:hover {
    background-image: url(${buttonUpLight});
  }

  ::-webkit-scrollbar-button:vertical:start:active {
    background-image: url(${buttonUpDark});
  }

  ::-webkit-scrollbar-button:vertical:end {
    height: 17px;
    background-image: url(${buttonDown});
  }

  ::-webkit-scrollbar-button:vertical:end:hover {
    background-image: url(${buttonDownLight});
  }

  ::-webkit-scrollbar-button:vertical:end:active {
    background-image: url(${buttonDownDark});
  }

  ::-webkit-scrollbar-button:horizontal:start {
    width: 16px;
    background-image: url(${buttonLeft});
  }

  ::-webkit-scrollbar-button:horizontal:start:hover {
    background-image: url(${buttonLeftLight});
  }

  ::-webkit-scrollbar-button:horizontal:start:active {
    background-image: url(${buttonLeftDark});
  }

  ::-webkit-scrollbar-button:horizontal:end {
    width: 16px;
    background-image: url(${buttonRight});
  }

  ::-webkit-scrollbar-button:horizontal:end:hover {
    background-image: url(${buttonRightLight});
  }

  ::-webkit-scrollbar-button:horizontal:end:active {
    background-image: url(${buttonRightDark});
  }

  .disabled-scrollbar-vertical::-webkit-scrollbar-button:vertical:end {
    background-image: url(${buttonDownDisabled});
}

.disabled-scrollbar-vertical::-webkit-scrollbar-button:vertical:start {
  background-image: url(${buttonUpDisabled});
}

  .disabled-scrollbar-horizontal::-webkit-scrollbar-button:horizontal:start {
    background-image: url(${buttonLeftDisabled});
}

.disabled-scrollbar-horizontal::-webkit-scrollbar-button:horizontal:end {
  background-image: url(${buttonRightDisabled});
}
`;
}

export function applyScrollbarClass(element) {
  if (!element) return;

  const children = element.getElementsByTagName('*');

  if (!children) return;

  const childrenArr = Array.from(children);

  childrenArr.forEach(child => {
    const horizontalAction =
      child.scrollWidth <= child.clientWidth ? 'add' : 'remove';
    child.classList[horizontalAction]('disabled-scrollbar-horizontal');

    const verticalAction =
      child.scrollHeight <= child.clientHeight ? 'add' : 'remove';
    child.classList[verticalAction]('disabled-scrollbar-vertical');
  });
}
