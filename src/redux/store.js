import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import dashboard from './dashboard';
import notifications from './notificationSlice'; // Import the notification slice

const store = configureStore({
  reducer: {
    auth,
    dashboard,
    notifications, // Add notifications slice
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
