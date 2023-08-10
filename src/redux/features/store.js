import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/reducers';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
