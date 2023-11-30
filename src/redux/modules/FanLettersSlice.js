import FakeData from '../../FakeData.json';

import { createSlice } from '@reduxjs/toolkit';

const initialState = FakeData;

const saveToLocalStorage = (updatedFanLetter) => {
  localStorage.setItem('fanLetters', JSON.stringify(updatedFanLetter));
};

const fanLetterSlice = createSlice({
  name: 'fanLetters',
  initialState,
  reducers: {
    addHandler: (state, action) => {
      const newFanLetterList = [action.payload, ...state];
      saveToLocalStorage(newFanLetterList);
      return newFanLetterList;
    },
    editHandler: (state, action) => {
      const editedFanLetterList = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, content: action.payload.editInput }
          : item
      );
      saveToLocalStorage(editedFanLetterList);
      return editedFanLetterList;
    },
    deleteHandler: (state, action) => {
      const deletedFanLetterList = state.filter(
        (item) => item.id !== action.payload
      );
      saveToLocalStorage(deletedFanLetterList);
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
