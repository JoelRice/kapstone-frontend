import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = {
  token: "",
  toast: {
    text: "",
    statusCode: 0,
    color: "",
    //still need to sort out how colors work here
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

const toastFor = (action, successMessage, successCode = 0) => ({
  message: action.payload?.message || successMessage,
  statusCode: action.payload?.statusCode || successCode,
});

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        user: action.payload,
        toast: toastFor(
          action,
          `Successfully logged in as ${action.payload.username}`
        ),
      };
    case actions.LOGOUT:
      return {
        user: initialState.user,
        toast: toastFor(action, "Log out successful", 200),
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
