import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Missions from '../Missions';
import missionsReducer from '../../redux/features/mission/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

describe('Missions', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}><Missions /></Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
