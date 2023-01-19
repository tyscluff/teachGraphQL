import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tweets: [
        { 
            id: 1, 
            name: "Tyson Cluff", 
            handle: "@tyscluff", 
            content: "This needs to be a bit longer so that it renders like a tweet",
            likes: 30
        }
    ]
};

export const topTweetsSlice = createSlice({
    name: "topTweets",
    initialState,
    reducers: {
        setTweets: (state, action) => {
            state.tweets = action.payload
        }
    }
});

export const selectTopTweets = state => state.topTweets.tweets;

export const { setTweets } = topTweetsSlice.actions;

export default topTweetsSlice.reducer;