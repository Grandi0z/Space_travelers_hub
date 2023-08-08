import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: {
    rocket: rocketReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
