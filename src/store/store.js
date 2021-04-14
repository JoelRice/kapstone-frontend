import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = {
  token: "",
  toast: {
    text: "",
    color: "",
    //   color/statusCode/whatever: ''
  },
};
// set action types
export const actions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  TOAST: "TOAST",
  UNTOAST: "UNTOAST",
};

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        token: action.payload,
      };
    case actions.LOGOUT:
      return {
        user: initialState.user,
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
