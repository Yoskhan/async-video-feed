import { createSlice } from '@reduxjs/toolkit';

const initialFeedState = {
  feed: [],
};

const feedSlice = createSlice({
  name: 'feed',
  initialState: initialFeedState,
  reducers: {
    replaceFeed(state, action) {
      state.feed = action.payload;
    },
    addToBookmark(state, action) {
      for (let i = 0; i < state.feed.length; i++) {
        if (state.feed[i].id === action.payload.id) {
          state.feed[i].bookmarked = !state.feed[i].bookmarked;
          return;
        }
      }
    },
  },
});

export const feedActions = feedSlice.actions;

export default feedSlice.reducer;
