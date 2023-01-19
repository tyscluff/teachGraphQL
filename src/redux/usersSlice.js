import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            handle: "@tyscluff"
        }
    ]
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const selectUsers = state => state.users.users;

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;