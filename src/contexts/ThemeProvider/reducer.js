import * as types from "./types";

export const reducer = (state, actions) => {
  switch (action.type) {
    case types.CHANGE_THEME:
      return { ...state, theme: actions.theme };
    default:
      return { ...state };
  }
};
