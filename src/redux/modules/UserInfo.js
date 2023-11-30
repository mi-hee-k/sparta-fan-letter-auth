import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const UserInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { addUserInfo } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
