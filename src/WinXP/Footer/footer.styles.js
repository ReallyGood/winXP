import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 30px;
  background: linear-gradient(
    to bottom,
    #1f2f86 0,
    #3165c4 3%,
    #3682e5 6%,
    #4490e6 10%,
    #3883e5 12%,
    #2b71e0 15%,
    #2663da 18%,
    #235bd6 20%,
    #2258d5 23%,
    #2157d6 38%,
    #245ddb 54%,
    #2562df 86%,
    #245fdc 89%,
    #2158d4 92%,
    #1d4ec0 95%,
    #1941a5 98%
  );
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  .footer__items.left {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
  .footer__items.right {
    background-color: #0b77e9;
    flex-shrink: 0;
    background: linear-gradient(
      to bottom,
      #0c59b9 1%,
      #139ee9 6%,
      #18b5f2 10%,
      #139beb 14%,
      #1290e8 19%,
      #0d8dea 63%,
      #0d9ff1 81%,
      #0f9eed 88%,
      #119be9 91%,
      #1392e2 94%,
      #137ed7 97%,
      #095bc9 100%
    );
    border-left: 1px solid #1042af;
    box-shadow: inset 1px 0 1px #18bbff;
    padding: 0 10px;
    margin-left: 10px;
  }
  .footer__items {
    display: flex;
    align-items: center;
  }
  .footer__start {
    height: 100%;
    margin-right: 10px;
    position: relative;
    &:hover {
      filter: brightness(105%);
    }
    &:active {
      pointer-events: none;
      filter: brightness(85%);
    }
  }
  .footer__start__menu {
    position: absolute;
    left: 0;
    box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.5);
    bottom: 100%;
  }
  .footer__window {
    flex: 1;
    max-width: 150px;
    color: #fff;
    border-radius: 2px;
    margin-top: 2px;
    padding: 0 8px;
    height: 22px;
    font-size: 11px;
    background-color: #3c81f3;
    box-shadow: inset -1px 0px rgba(0, 0, 0, 0.3),
      inset 1px 1px 1px rgba(255, 255, 255, 0.2);
    position: relative;
    display: flex;
    align-items: center;
  }
  .footer__icon {
    height: 15px;
    width: 15px;
  }
  .footer__text {
    position: absolute;
    left: 27px;
    right: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .footer__window.cover:hover {
    background-color: #53a3ff;
    box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.2),
      inset 1px 1px 1px rgba(255, 255, 255, 0.3);
  }
  .footer__window.cover:before {
    display: block;
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: 10px;
    height: 1px;
    border-bottom-right-radius: 50%;
    box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  }
  .footer__window.cover:hover:active {
    background-color: #1e52b7;
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.3),
      inset 1px 0 1px rgba(0, 0, 0, 0.7);
  }
  .footer__window.focus:hover {
    background-color: #3576f3;
  }
  .footer__window.focus:hover:active {
    background-color: #1e52b7;
  }
  .footer__window.focus {
    background-color: #1e52b7;
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.2),
      inset 1px 0 1px rgba(0, 0, 0, 0.7);
  }
  .footer__time {
    margin: 0 5px;
    color: #fff;
    font-size: 11px;
    font-weight: lighter;
    text-shadow: none;
  }
`;