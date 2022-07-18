import * as types from "./types";


export const changeTheme = (dispatch, data) => {
  return () => {
    dispatch({ type: types.CHANGE_THEME, theme: data });
  };
};
