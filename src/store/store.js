import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = {
  token: localStorage.getItem("token") || null,
  toast: {
    text: "",
    color: "",
  },
};
// set action types
export const actions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  // PERSIST: "PERSIST",
  TOAST: "TOAST",
  UNTOAST: "UNTOAST",
};

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      localStorage.setItem("token", action.payload);
      return {
        token: action.payload,
      };
    case actions.LOGOUT:
      localStorage.setItem("token", "");
      return {
        token: null,
      };
    case actions.TOAST:
      return { toast: { ...state.toast, ...action.payload } };
    case actions.UNTOAST:
      return { toast: initialState.toast };
    default:
      return state;
  }
};
// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
