import { configureStore } from '@reduxjs/toolkit';

import fanLetters from 'redux/modules/FanLettersSlice';
import selectedMember from 'redux/modules/SelectedMemberSlice';
import userInfo from 'redux/modules/UserInfo';
import auth from 'redux/modules/AuthSlice';

const store = configureStore({
  reducer: {
    fanLetters,
    selectedMember,
    userInfo,
    auth,
  },
});

export default store;
