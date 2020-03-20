import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import display from '../../../../assets/displayProperties/display.png';
import noneIcon from '../../../../assets/displayProperties/icons/none.png';
import imageIcon from '../../../../assets/displayProperties/icons/image.png';

export default function DesktopTab(props) {
  const { data, dataChanged } = props;
  const [dataState, setDataState] = useState(data);
  const { imageSrc, solidColor, images, positions, imagePosition } = dataState;

  const handleDataChanged = (event, target) => {
    const { value } = event.target;
    const updated = Object.assign({}, dataState);
    updated[target] = value;
    setDataState(updated);
    dataChanged(updated);
  };

  const isImage = Boolean(imageSrc);

  return (
    <Container>
      <DisplayWrapper className="display-warapper">
        <Display className="display" src={display} alt="" />
        {isImage ? (
          <Image className="background" src={imageSrc} alt="" />
        ) : (
          <SolidColor color={solidColor}></SolidColor>
        )}
      </DisplayWrapper>
      <DisplaySettings className="display-settings">
        <BackgroundSelection>
          <span className="header">Background:</span>
          <StyledSelect
            size="5"
            height={'118px'}
            defaultValue={imageSrc}
            onChange={e => handleDataChanged(e, 'imageSrc')}
          >
            {images.map(option => {
              return (
                <SelectOption
                  key={option.name}
                  value={option.src}
                  icon={Boolean(option.src) ? imageIcon : noneIcon}
                >
                  {option.name}
                </SelectOption>
              );
            })}
          </StyledSelect>
        </BackgroundSelection>
        <BackgroundActions>
          <BrowseButton
            minWidth={'50px'}
            padding={'2px 12px'}
            onClick={() => {
              console.log('user pressed Browse... ');
            }}
          >
            Browse...
          </BrowseButton>
          <PositionSelection>
            <span className="header">Position:</span>
            <StyledSelect
              defaultValue={imagePosition}
              onChange={e => handleDataChanged(e, 'imagePosition')}
            >
              {positions.map(position => {
                return (
                  <SelectOption key={position} value={position}>
                    {position}
                  </SelectOption>
                );
              })}
            </StyledSelect>
          </PositionSelection>
          <ColorSelection>
            <span className="header">Color:</span>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={solidColor}
              onChange={e => handleDataChanged(e, 'solidColor')}
            />
          </ColorSelection>
        </BackgroundActions>
      </DisplaySettings>
    </Container>
  );
}

const Container = styled('div')`
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

const DisplayWrapper = styled('div')`
  position: relative;
  width: 195px;
  height: 170px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 16px 16px 35px 13px;
`;

const Display = styled('img')`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled('img')`
  width: 100%;
  height: auto;
  z-index: 2;
  object-fit: cover;
`;

const SolidColor = styled('div')`
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${props => props.color || '#000'};
`;

const DisplaySettings = styled('div')`
  padding-top: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: 3.3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0px;
`;

const BackgroundSelection = styled('div')`
  grid-area: 1 / 1 / 6 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;
`;

const BrowseButton = styled(Button)`
  grid-area: 1 / 1 / 1 / 3;
  height: max-content;
`;

const PositionSelection = styled('div')`
  grid-area: 2 / 1 / 2 / 3;
`;

const ColorSelection = styled('div')`
  grid-area: 3 / 1 / 3 / 3;
`;

const BackgroundActions = styled('div')`
  grid-area: 1 / 2 / 6 / 3;
  padding-top: 20px;
  padding-left: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr 1fr;
`;

const StyledSelect = styled('select')`
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

const SelectOption = styled('option')`
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
