import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import createContactSlice from './slices/createContactSlice';
import { contactsApi } from './api/contactsApi';

const rootReducer = combineReducers({
  createContact: createContactSlice,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export const initStore = () => {
  return rootStore;
};

export type AppStore = ReturnType<typeof initStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

setupListeners(rootStore.dispatch);
