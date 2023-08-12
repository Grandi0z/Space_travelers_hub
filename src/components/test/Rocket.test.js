import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RocketsList from '../RocketsList';
import rocketsReducer from '../../redux/features/rockets/reducers';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

describe('Rockets', () => {
  it('Should match the rocket snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}><RocketsList /></Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
