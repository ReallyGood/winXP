import React, { useState } from 'react';

import display from '../../../../../assets/displayProperties/display.png';
import noneIcon from '../../../../../assets/displayProperties/icons/none.png';
import imageIcon from '../../../../../assets/displayProperties/icons/image.png';
import {
  Container,
  DisplayWrapper,
  Display,
  Image,
  SolidColor,
  DisplaySettings,
  BackgroundSelection,
  BackgroundActions,
  PositionSelection,
  StyledSelect,
  SelectOption,
  BrowseButton,
  ColorSelection,
} from './styles';

export default function DesktopTab({ tab, dataChanged }) {
  const { data } = tab;
  const [dataState, setDataState] = useState(data);
  const { imageSrc, solidColor, images, positions, imagePosition } = dataState;

  const handleDataChanged = (event, target) => {
    const { value } = event.target;
    const changedData = Object.assign({}, dataState);
    changedData[target] = value;
    setDataState(changedData);
    dataChanged({ ...tab, data: changedData });
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
            disabled
            minWidth={'50px'}
            padding={'2px 12px'}
            handleOnClick={action => {
              console.log('user pressed Browse... ', action);
            }}
          >
            Browse...
          </BrowseButton>
          <PositionSelection disabled={true}>
            <span className="header">Position:</span>
            <div className="position-select">
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
            </div>
          </PositionSelection>
          <ColorSelection>
            <span className="header">Color:</span>
            <div className="color-picker">
              <input
                type="color"
                id="favcolor"
                name="favcolor"
                value={solidColor}
                onChange={e => handleDataChanged(e, 'solidColor')}
              />
            </div>
          </ColorSelection>
        </BackgroundActions>
      </DisplaySettings>
    </Container>
  );
}
