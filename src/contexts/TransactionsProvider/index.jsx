import P from "prop-types";
import { useReducer } from "react";
import { TransactionsContext } from "./context";
import { data } from "./data";
import { reducer } from "./reducer";

export const TransactionsProvider = ({ children }) => {
  const [transactionsState, transactionsDispatch] = useReducer(reducer, data);

  return (
    <TransactionsContext.Provider
      value={{ transactionsState, transactionsDispatch }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

TransactionsProvider.propTypes = {
  children: P.node.isRequired,
};
