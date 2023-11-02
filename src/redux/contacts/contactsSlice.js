import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsActions';
import { setFilter } from './filterActions';

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(setFilter, (state, action) => {
        state.filter = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
