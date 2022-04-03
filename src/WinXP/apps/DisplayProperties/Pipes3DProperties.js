import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { Context as AppContext } from './../../../WinXP';

import LegendFieldset from 'components/LegendFieldset';
import RadioGroup from 'components/RadioGroup';
import SelectInput from 'components/SelectInput';
import Slider from 'components/Slider';

import { DISPLAY_PROPERTIES } from '../../constants/actions';
import {
  MAX_SPEED,
  MIN_SPEED,
  getVarianceOptions,
  getTexturePathOptions,
  jointTypeOptions,
} from './utils';

function Pipes3DProperties({ onClose }) {
  const appContext = useContext(AppContext);
  const { displayProperties } = appContext.state;
  const handleCancel = onClose;

  /// Component state
  const {
    multiple,
    texturePath,
    joints,
    interval,
  } = displayProperties.screenSaversSettings.Pipes3D;
  const [pipes3DState, setPipes3DState] = useState({
    multiple,
    texturePath,
    joints,
    interval,
  });

  const handleApply = () => {
    appContext.dispatch({
      type: DISPLAY_PROPERTIES,
      payload: {
        ...displayProperties,
        screenSaversSettings: {
          ...displayProperties.screenSaversSettings,
          Pipes3D: pipes3DState,
        },
      },
    });
    onClose();
  };

  const handleChange = (value, field) => {
    setPipes3DState(prev => ({ ...prev, [field]: value }));
  };

  const handleVarianceChange = (value, field) => {
    setPipes3DState(prev => ({
      ...prev,
      [field]: value === 'single' ? false : true,
    }));
  };

  const handleSpeedChange = (value, field) => {
    // Deducting the selected value from the max speed
    // Because we need the slider to range in opposite direction -
    // From a higher value to lower value (of seconds)
    const seconds = MAX_SPEED - value;
    setPipes3DState(prev => ({
      ...prev,
      [field]: [seconds, seconds * 1.5],
      /// "interval" field represents a range of seconds between fadeouts
    }));
  };

  const handleFileUpload = async file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      setPipes3DState(prev => ({ ...prev, texturePath: reader.result }));
    });
  };

  return (
    <>
      <Properties>
        <div className="pipes-settings-wrapper">
          <LegendFieldset>
            <legend>Pipes</legend>
            <RadioGroup
              groupName="multiple"
              /// groupName correlates with the properties (multiple, joints etc.)
              options={getVarianceOptions(pipes3DState.multiple)}
              cb={handleVarianceChange}
            />
          </LegendFieldset>
          <LegendFieldset>
            <legend>Pipe Style</legend>
            <div className="joint-types-wrapper">
              <label>Joint type:</label>
              <SelectInput
                value={
                  jointTypeOptions.find(
                    option => option.value === pipes3DState.joints,
                  ).value
                }
                options={jointTypeOptions}
                field="joints"
                cb={handleChange}
              />
            </div>
          </LegendFieldset>
          <LegendFieldset>
            <legend>Surface Style</legend>
            <div className="surface-style-wrapper">
              <RadioGroup
                groupName="texturePath"
                options={getTexturePathOptions(pipes3DState.texturePath)}
                cb={handleChange}
              />
              <Button disabled={!pipes3DState.texturePath}>
                <label>
                  Choose texture...
                  <input
                    type="file"
                    onChange={e => handleFileUpload(e.target.files[0])}
                  />
                </label>
              </Button>
            </div>
          </LegendFieldset>

          <LegendFieldset>
            <legend>Speed</legend>
            <div className="speed-slider-wrapper">
              <p>
                <label>Slow</label>
                <label>Fast</label>
              </p>
              <Slider
                cb={handleSpeedChange}
                field="interval"
                min={MIN_SPEED}
                max={MAX_SPEED - MIN_SPEED}
                value={MAX_SPEED - pipes3DState.interval[0]}
              />
            </div>
          </LegendFieldset>
        </div>

        <Buttons>
          <Button
            style={{
              marginRight: 4,
            }}
            onClick={handleApply}
          >
            OK
          </Button>
          <Button
            style={{
              marginRight: 4,
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Buttons>
      </Properties>
    </>
  );
}

// TODO: make global- is also used in ./index
const Properties = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: rgb(236, 233, 218);
  padding: 10px;
  //

  .pipes-settings-wrapper {
    display: grid;
    grid-template-columns: 225px 225px;
    grid-row: auto auto;
    grid-column-gap: 10px;
    /* grid-row-gap: 5px; */
  }

  .surface-style-wrapper {
    position: relative;
    input[type='file'] {
      display: none;
    }

    button {
      position: absolute;
      font-size: 12px;
      right: 30px;
      bottom: -5px;
      width: fit-content;
      padding: 0 4px;
    }
  }

  .joint-types-wrapper,
  .speed-slider-wrapper {
    margin-left: 23px;
    label {
      font-size: 12px;
      margin-bottom: 5px;
      display: inline-block;
    }
  }

  .speed-slider-wrapper {
    width: 167px;
    p {
      display: flex;
      justify-content: space-between;
    }
  }

  fieldset {
    padding-left: 10px;
    height: 85px;
    margin-bottom: 5px;
  }
  legend {
    font-size: 12px;
    margin-bottom: 10px;
    margin-left: -3px;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 20px;
  width: 100%;
`;

export default Pipes3DProperties;
