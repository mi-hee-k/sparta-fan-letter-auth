import { createSlice } from '@reduxjs/toolkit';

const initialState = '전체';

const selectedMemberSlice = createSlice({
  name: 'selectedMember',
  initialState,
  reducers: {
    selectHandler: (state, action) => {
      return action.payload;
    },
  },
});

export const { selectHandler } = selectedMemberSlice.actions;
export default selectedMemberSlice.reducer;
