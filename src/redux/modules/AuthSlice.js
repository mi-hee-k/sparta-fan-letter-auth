import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: true };

const AuthSlice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    loginToggle: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { loginToggle } = AuthSlice.actions;
export default AuthSlice.reducer;
