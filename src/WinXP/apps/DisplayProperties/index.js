import React from 'react';
import styled from 'styled-components';

function DisplayProperties({ onClose }) {
  // function onClickOptionItem(item) {
  //   switch (item) {
  //     case 'Close':
  //       onClose();
  //       break;
  //     default:
  //   }
  // }

  return (
    <Div>
      <div className="com__content">
        <div className="com__content__inner">Properties Content here</div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
`;

export default DisplayProperties;
