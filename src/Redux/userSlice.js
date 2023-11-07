import { createSlice } from "@reduxjs/toolkit";
let initialState = { list: [] };
let userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adduser: (state, action) => {
      if (state.list.find(({ email }) => email === action.payload.email) === undefined) {
        state.list = [...state.list, action.payload];
        localStorage.setItem('Data', JSON.stringify(state.list));
        console.log(state)
      }
    },
  },
});
export let { adduser } = userSlice.actions;
export let userReducer = userSlice.reducer;
