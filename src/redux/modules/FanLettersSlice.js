import FakeData from '../../FakeData.json';

import { createSlice } from '@reduxjs/toolkit';

const initialState = FakeData;

const fanLetterSlice = createSlice({
  name: 'fanLetters',
  initialState,
  reducers: {
    addHandler: (state, action) => {
      return [action.payload, ...state];
    },
    editHandler: (state, action) => {
      const editedFanLetterList = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, content: action.payload.editInput }
          : item
      );
      return editedFanLetterList;
    },
    deleteHandler: (state, action) => {
      const deletedFanLetterList = state.filter(
        (item) => item.id !== action.payload
      );
      return deletedFanLetterList;
    },
    setFanLetters: (state, action) => {
      return action.payload;
    },
  },
});

export const { addHandler, editHandler, deleteHandler, setFanLetters } =
  fanLetterSlice.actions;
export default fanLetterSlice.reducer;
