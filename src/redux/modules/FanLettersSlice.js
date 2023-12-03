import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jsonApi from '../../axios/jsonApi';

const initialState = {
  fanLetters: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getFanLetter = createAsyncThunk(
  'getFanLetter',
  async (payload, thunkAPI) => {
    try {
      const { data } = await jsonApi.get('/letters');
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addFanLetter = createAsyncThunk(
  'addFanLetter',
  async (payload, thunkAPI) => {
    try {
      const { data } = await jsonApi.post('/letters', payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editFanLetter = createAsyncThunk(
  'editFanLetter',
  async (payload, thunkAPI) => {
    try {
      const { data } = await jsonApi.patch(`/letters/${payload.id}`, {
        content: payload.content,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteFanLetter = createAsyncThunk(
  'deleteFanLetter',
  async (payload, thunkAPI) => {
    try {
      const { data } = await jsonApi.delete(`/letters/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fanLetterSlice = createSlice({
  name: 'fanLetters',
  initialState,
  reducers: {},
  extraReducers: {
    // getFanLetter
    [__getFanLetter.pending]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__getFanLetter.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.fanLetters = action.payload;
    },
    [__getFanLetter.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    // addFanLetter
    [__addFanLetter.pending]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__addFanLetter.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.fanLetters = [...state.fanLetters, action.payload];
    },
    [__addFanLetter.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    // editFanLetter
    [__editFanLetter.pending]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__editFanLetter.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.fanLetters.map((item) => {
        return item.id === action.payload.id
          ? { ...item, content: action.payload.content }
          : item;
      });
    },
    [__editFanLetter.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    // deleteFanLetter
    [__deleteFanLetter.pending]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__deleteFanLetter.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.fanLetters.filter((item) => {
        return item.id !== action.payload;
      });
    },
    [__deleteFanLetter.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export default fanLetterSlice.reducer;
