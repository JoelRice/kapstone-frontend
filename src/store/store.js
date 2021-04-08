import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { token: "" }, messages: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// define reducer function
const reducer = (state, action) => {};
// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
