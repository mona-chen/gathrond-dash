import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import dashboard from './dashboard';

// const initialState = {};
const store = configureStore({
  reducer: {
    auth,
    dashboard,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: '*',
        ignoredPaths: ['payload.headers'],
      },
    }),
});

export default store;
