import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = {
  token: "",
  toast: {
    text: "",
    //   color/statusCode/whatever: ''
  },
};
// set action types
export const actions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

// define reducer function
const reducer = (state, action) => {};
// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
