import { configureStore } from '@reduxjs/toolkit';

import fanLetters from 'redux/modules/FanLetters';
import selectedMember from 'redux/modules/SelectedMember';

const store = configureStore({
  reducer: {
    fanLetters,
    selectedMember,
  },
});

export default store;
