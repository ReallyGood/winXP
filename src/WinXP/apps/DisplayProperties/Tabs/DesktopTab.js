import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import display from '../../../../assets/displayProperties/display.png';

export default function DesktopTab(props) {
  const { title, data, dataChanged } = props;
  const { backgroundSrc, solidColor, backgroundIsImage } = data;
  // const [count, setCount] = useState(counter);
  // const handleOnChanged = () => {
  //   const newCount = count + 1;
  //   const newData = { ...data, ...{ counter: newCount } };
  //   dataChanged(newData);
  //   setCount(newCount);
  // };

  return (
    <Container>
      <DisplayWrapper>
        <Display className="display" src={display} alt="" />
        {backgroundIsImage ? (
          <Image className="background" src={backgroundSrc} alt="" />
        ) : (
          <SolidColor color={solidColor}></SolidColor>
        )}
      </DisplayWrapper>
      <div className="bottom">bottom</div>
    </Container>
  );
}

const Container = styled('div')`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DisplayWrapper = styled('div')`
  position: relative;
  width: 200px;
  height: 170px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 18px 16px 35px 14px;
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
`;

const SolidColor = styled('div')`
  width: 100%;
  height: 100%;
  /* position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0; */
  z-index: 1;
  background-color: ${props => props.color || '#000'};
`;
