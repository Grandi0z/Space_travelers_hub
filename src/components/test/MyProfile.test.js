import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import MyProfile from '../MyProfile';
import missionsReducer from '../../redux/features/mission/missionsSlice';
import rocketsReducer from '../../redux/features/rockets/reducers';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

describe('MyProfile', () => {
  it('should render a table with my rockets', () => {
    const tree = renderer.create(
      <Provider store={store}><MyProfile /></Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
