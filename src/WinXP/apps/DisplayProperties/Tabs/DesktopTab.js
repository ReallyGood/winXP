import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import display from '../../../../assets/displayProperties/display.png';
import noneIcon from '../../../../assets/displayProperties/icons/none.png';
import imageIcon from '../../../../assets/displayProperties/icons/image.png';

export default function DesktopTab(props) {
  const { title, data, dataChanged } = props;
  const {
    backgroundSrc,
    solidColor,
    backgroundIsImage,
    backgroundOptions,
  } = data;
  // const [count, setCount] = useState(counter);
  // const handleOnChanged = () => {
  //   const newCount = count + 1;
  //   const newData = { ...data, ...{ counter: newCount } };
  //   dataChanged(newData);
  //   setCount(newCount);
  // };

  return (
    <Container>
      <DisplayWrapper className="display-warapper">
        <Display className="display" src={display} alt="" />
        {backgroundIsImage ? (
          <Image className="background" src={backgroundSrc} alt="" />
        ) : (
          <SolidColor color={solidColor}></SolidColor>
        )}
      </DisplayWrapper>
      <DisplaySettings className="display-settings">
        <BackgroundSelection>
          <span className="header">Background:</span>
          <Select size="5">
            {backgroundOptions.map(option => {
              return (
                <Option
                  value={option.src}
                  icon={Boolean(option.src) ? imageIcon : noneIcon}
                >
                  {option.name}
                </Option>
              );
            })}
          </Select>
        </BackgroundSelection>
        <BackgroundOptions>options</BackgroundOptions>
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
  grid-template-columns: 4.3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0px;
`;

const BackgroundSelection = styled('div')`
  grid-area: 1 / 1 / 6 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;

  .header {
    font-size: 12px;
  }
`;

const BackgroundOptions = styled('div')`
  grid-area: 1 / 2 / 6 / 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px, 1fr;
`;

const Select = styled('select')`
  overflow-y: scroll;
  height: 118px;
  &:focus {
    outline: none;
  }
`;

const Option = styled('option')`
  position: relative;
  height: 15px;
  padding: 2px 0 3px 25px;
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
