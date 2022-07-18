import P from "prop-types";
import { data } from "./data";
import { useReducer } from "react";
import { reducer } from "./reducer";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(reducer, data);
  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: P.node.isRequired,
};
