import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';

const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});

export default store;
