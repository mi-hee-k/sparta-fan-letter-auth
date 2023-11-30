import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLogin: false };

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginToggle: (state, action) => {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { loginToggle } = AuthSlice.actions;
export default AuthSlice.reducer;
