import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import display from 'assets/properties/displayProperties/display.png';
import Button from 'components/Button';
import LegendFieldset from 'components/LegendFieldset';
import SelectInput from 'components/SelectInput';

import NumberInput from 'components/NumberInput';
import CheckBox from 'components/CheckBox';
import ScreenSaver from 'components/ScreenSavers';
import { SCREEN_SAVER } from './utils';
import { ADD_APP, SCREEN_SAVER_PREVIEW } from 'WinXP/constants/actions';
import { appSettings } from '../';

function ScreenSaverTab({ state, dispatch, appContext }) {
  const { value, wait } = state.displayProperties.screenSaver;
  const [screenSaverState, setScreenSaverState] = useState({ value, wait });
  const [isNone, setIsNone] = useState(false);

  const screenSaverOptions = [
    { value: '(None)', label: '(None)' },
    { value: 'Blank', label: 'Blank' },
    { value: 'WindowsXP', label: 'Windows XP' },
    { value: 'Pipes3D', label: '3D Pipes' },
  ];

  useEffect(() => {
    dispatch({ type: SCREEN_SAVER, payload: screenSaverState });
  }, [screenSaverState, dispatch]);

  useEffect(() => {
    setIsNone(screenSaverState.value === '(None)');
  }, [screenSaverState.value]);

  const handleSelectChange = value => {
    setScreenSaverState(prev => ({ ...prev, value }));
  };

  const handleWaitingTime = wait => {
    setScreenSaverState(prev => ({ ...prev, wait }));
  };

  const handlePreviewOpen = e => {
    appContext.dispatch({
      type: SCREEN_SAVER_PREVIEW,
      payload: value,
    });
    // @todo: make SelectInput focus
    // selectorRef.current.focus();
  };

  const handleSettingsOpen = e => {
    appContext.dispatch({
      type: ADD_APP,
      payload: appSettings[value],
    });
  };

  // TODO: make a more general helper function like 'isAppOpen(appName)', find a suiting place for it
  const isPipesSettingsOpen = !!appContext.state.apps.find(app => {
    return app.component.name === 'Pipes3DProperties';
  });

  return (
    <ScreenSaverSettings>
      <div className="preview">
        <img src={display} alt="display" />
        <div className="display-overlay">
          <ScreenSaver
            selectedScreenSaver={isPipesSettingsOpen ? '(None)' : value}
            state={appContext.state}
            previewScreen
          />
        </div>
      </div>
      <Config>
        <LegendFieldset>
          <legend>Screen saver</legend>
          <SelectionSettings height="65px">
            <SelectInput
              options={screenSaverOptions}
              cb={handleSelectChange}
              value={value}
            />

            <div className="button-group">
              <Button
                type="button"
                style={{ marginLeft: 7 }}
                onClick={handleSettingsOpen}
                disabled={
                  !state.displayProperties.screenSaversSettings[value] || isNone
                }
              >
                Settings
              </Button>
              <Button
                disabled={isNone}
                type="button"
                style={{ marginLeft: 9 }}
                onClick={handlePreviewOpen}
              >
                Preview
              </Button>
            </div>
            <div className={`quick-settings ${isNone ? 'disabled-text' : ''}`}>
              <label className="wait-label">Wait:</label>
              <NumberInput
                value={wait}
                onChange={handleWaitingTime}
                disabled={isNone}
              />
              <p>minutes</p>
              <CheckBox
                value={screenSaverState.value}
                className="check-box"
                label="On resume, password protect"
              />
            </div>
          </SelectionSettings>
        </LegendFieldset>
        <LegendFieldset>
          <legend>Monitor power</legend>
          <SelectionSettings height="65px" marginTop="4px">
            <p>
              To adjust monitor power settings and save energy, click Power.
            </p>
            <Button type="button" className="power-button">
              Power...
            </Button>
          </SelectionSettings>
        </LegendFieldset>
      </Config>
    </ScreenSaverSettings>
  );
}

const ScreenSaverSettings = styled.div`
  legend {
    font-size: 11px;
    margin-left: 9px;
  }

  .preview {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding: 0px 2px;
    .display-overlay {
      position: absolute;
      top: 17px;
      left: 88px;
      width: 170px;
      height: 118px;
      background-color: #2f71cd;
    }
  }
`;

const Config = styled.form`
  fieldset {
    margin-bottom: 5px;
  }
  margin-top: 4.5px;

  .button-group {
    display: inline-block;
    position: absolute;
    top: 6px;
  }

  .quick-settings {
    display: flex;
    margin-top: 8px;

    .check-box {
      margin-top: 5.5px;
      margin-left: 6px;
    }

    & .wait-label {
      margin-top: 3.5px;
      margin-left: 8px;
      padding-right: 2.5px;
    }

    & p {
      margin-left: 5px;
      margin-top: 4px;
    }
  }
  .disabled-text {
    color: #adaa9c;
  }
`;

const SelectionSettings = styled.div`
  position: relative;
  font-size: 11px;
  height: ${props => props.height};
  margin-top: ${props => props.marginTop};

  .select-wrapper {
    margin-top: 6px;
    margin-left: 10px;
  }
  & p {
    margin-left: 82px;
    margin-top: 7px;
  }

  & .power-button {
    position: absolute;
    right: 9px;
    top: 37px;
  }
`;

export default ScreenSaverTab;
