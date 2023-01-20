import { configureStore } from '@reduxjs/toolkit';
import topTweetsReducer from '../redux/topTweetsSlice';
import usersReducer from '../redux/usersSlice';

export const store = configureStore({
  reducer: {
    topTweets: topTweetsReducer,
    users: usersReducer 
  }, 
});
