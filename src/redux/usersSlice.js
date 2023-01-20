import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            handle: "@tyscluff"
        }
    ],
    userGroupName: "Hello"
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        updateHandle: (state, action) => {
            state.users[0].handle = action.payload;
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        }
    }
});

export const selectUsers = state => state.users.users;
export const selectUserGroupName = state => state.users.userGroupName;

export const { setUsers, updateHandle, addUser } = usersSlice.actions;

export default usersSlice.reducer;