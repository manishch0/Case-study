import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.user.push(...action.payload);
    },
    deleteUsers(state, action) {
      state.user = state.user.filter(item => item.id !== action.payload);
    },
    updateUser(state, action) {
      let users = [...state.user.slice()];
      const userIndex = state.user.findIndex(u => u.id === action.payload.id);
      users[userIndex] = action.payload;
      state.user = users;
    },
  },
});
export const userAction = userReducer.actions;
export default userReducer;
