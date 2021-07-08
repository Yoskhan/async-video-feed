import { configureStore } from '@reduxjs/toolkit';
import feedReducer from './feed/feed-slice';
import userReducer from './user/user-slice';

const store = configureStore({
  reducer: {
    feed: feedReducer,
    user: userReducer,
  },
});

export default store;
