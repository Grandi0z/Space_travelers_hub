import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './features/mission/missionsSlice';
import rocketsReducer from './features/rockets/reducers';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
