import { userReducer } from "./userSlice";
const { configureStore } = require("@reduxjs/toolkit");
let store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
