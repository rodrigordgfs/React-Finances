import * as types from "./types";

export const getTransactions = async (dispatch) => {
  dispatch({ type: types.TRANSACTIONS_LOADING });

  const transactionsRaw = await fetch("http://localhost:8888/transactions");
  const transactions = await transactionsRaw.json();

  return () => {
    const revenue = transactions
      .filter((transaction) => transaction.type === "revenue")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    const expense = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    const payload = {
      transactions,
      revenue: transactions
        .filter((transaction) => transaction.type === "revenue")
        .reduce((acc, transaction) => acc + transaction.amount, 0),
      expense: transactions
        .filter((transaction) => transaction.type === "expense")
        .reduce((acc, transaction) => acc + transaction.amount, 0),
      balance: revenue - expense,
    };
    dispatch({
      type: types.TRANSACTIONS_DETAILS,
      payload: {
        revenue,
        expense,
        balance: revenue - expense,
      },
    });
    dispatch({
      type: types.TRANSACTIONS_LOADED,
      payload,
    });
  };
};
