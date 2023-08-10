import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './features/mission/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
