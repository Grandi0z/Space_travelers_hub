import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import rocketSlice from './rocketSlice';


const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
