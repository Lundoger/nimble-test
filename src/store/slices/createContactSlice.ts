import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface createContactFormState {
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: createContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
};

const createContactFormSlice = createSlice({
  name: 'create contact form',
  initialState,
  reducers: {
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const { setFirstName, setEmail, setLastName } =
  createContactFormSlice.actions;

export default createContactFormSlice.reducer;
