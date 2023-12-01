import { createSlice } from '@reduxjs/toolkit';

// -> 로컬스토리지에 accessToken이 있으면 -> 로그인 상태로 보고
// -> 없으면 -> 로그아웃 상태로 보자

const accessToken = localStorage.getItem('accessToken');
const profile = localStorage.getItem('profile');

// falsy value => undefined, null, 0, ""

// !(undefined) = true
// !!(undefined) = false
// !!(뭔가) = 뭔가가 falsy -> false, 뭔가가 not falsy -> true

const initialState = {
  isLogin: !!accessToken,
  profile: JSON.parse(profile) || {
    nickname: undefined,
    userId: undefined,
    avatar:
      'https://global.discourse-cdn.com/turtlehead/optimized/2X/c/c830d1dee245de3c851f0f88b6c57c83c69f3ace_2_250x250.png',
  },
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken, ...profile } = action.payload;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('profile', JSON.stringify(profile));
      state.isLogin = true;
      state.profile = profile;
    },
    logout: (state, action) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
      state.isLogin = false;
    },
    updateNickname: (state, action) => {
      state.profile.nickname = action.payload;
      localStorage.setItem('profile', JSON.stringify(state.profile));
    },
    updateAvatar: (state, action) => {
      state.profile.avatar = action.payload;
      localStorage.setItem('profile', JSON.stringify(state.profile));
    },
  },
});

export const { login, logout, updateNickname, updateAvatar } =
  AuthSlice.actions;
export default AuthSlice.reducer;
