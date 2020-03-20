import styled from 'styled-components';
import Button from 'components/Button';

export const Container = styled('div')`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2px;

  .header {
    font-size: 12px;
    margin-bottom: 5px;
    display: flex;
  }
`;

export const DisplayWrapper = styled('div')`
  position: relative;
  width: 195px;
  height: 170px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 16px 16px 35px 13px;
`;

export const Display = styled('img')`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Image = styled('img')`
  width: 100%;
  height: auto;
  z-index: 2;
  object-fit: cover;
`;

export const SolidColor = styled('div')`
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${props => props.color || '#000'};
`;

export const DisplaySettings = styled('div')`
  padding-top: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: 3.3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0px;
`;

export const BackgroundSelection = styled('div')`
  grid-area: 1 / 1 / 6 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;
`;

export const BrowseButton = styled(Button)`
  grid-area: 1 / 1 / 1 / 3;
  height: max-content;
`;

export const PositionSelection = styled('div')`
  grid-area: 2 / 1 / 2 / 3;
`;

export const ColorSelection = styled('div')`
  grid-area: 3 / 1 / 3 / 3;
`;

export const BackgroundActions = styled('div')`
  grid-area: 1 / 2 / 6 / 3;
  padding-top: 20px;
  padding-left: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr 1fr;
`;

export const StyledSelect = styled('select')`
  -webkit-appearance: none;
  width: 100%;
  padding: 3px;
  overflow-y: scroll;
  border-radius: 0;
  height: ${props => props.height || 'auto'};
  &:focus {
    outline: none;
  }
`;

export const SelectOption = styled('option')`
  position: relative;
  height: 15px;
  padding: ${props => (Boolean(props.icon) ? '2px 0 3px 25px' : '3px')};
  font-size: 12px;

  &&:before {
    content: '';
    width: 20px;
    height: 20px;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: 50% 50%;
    position: absolute;
    top: 0;
    right: 0;
    left: 2px;
    bottom: 0;
  }
`;
