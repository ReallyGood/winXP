import React from 'react';
import styled from 'styled-components';

function DialogInner(props) {
  return <StyledDialogInner {...props} />;
}

const StyledDialogInner = styled.div`
  height: 100%;
  background-color: rgb(236, 233, 218);
  padding: 10px;
  display: flex;
  justify-content: space-between;

  label {
    font-size: 12px;
  }

  input[type='text'] {
    padding: 2px;
    outline: none;
    border: 1px solid #a9c4f7;
    width: 215px;
  }

  .buttons-wrapper {
    display: flex;
    flex-direction: column;
    button {
      margin-bottom: 7px;
    }
  }

  fieldset {
    width: fit-content;
    padding: 5px;
    legend {
      margin-bottom: 10px;
      right: -5px;
    }
    form {
      display: flex;
      label {
        margin-right: 5px;
      }
    }
  }
`;

export default DialogInner;
