import styled from 'styled-components';

export const StyledTabs = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 387px;
`;

export const StyledTabList = styled('div')`
  display: flex;
  align-items: flex-end;
  padding: 0 2px;
`;

export const StyledTab = styled('span')`
  position: relative;
  grid-row: 1;
  display: grid;
  place-items: center;
  font-size: 12px;
  padding: 1px 6px 2px;
  border: 1px solid #a1a1a1;
  border-bottom: 0;
  border-radius: 4px 4px 0 0;
  background-image: radial-gradient(
    circle at 50% 70%,
    #e9ecec 0%,
    #e9ecec 40%,
    #e9ecec 70%,
    #fff 100%
  );
  overflow: hidden;

  ${props => {
    const { isActive } = props;

    const activeTabStyles = `
        margin-bottom: -1px;
        box-shadow: 0 -1px 1px rgba(195,127,0, 0.9), -1px -1px 1px rgba(0,0,0,0.1), 1px -1px 1px rgba(0,0,0,0.1);
        background-image: none;
        background-color: #fafbfc;
        padding-bottom: 3px;
        border-top: 2px solid orange;
    `;

    return isActive ? activeTabStyles : '';
  }}
`;

export const StyledTabPanel = styled('div')`
  display: flex;
  background-color: #fafbfc;
  border: 1px solid #a1a1a1;
  padding: 15px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;
