import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.TRANSACTIONS_LOADED:
      return { ...state, data: action.payload, loading: false };
    case types.TRANSACTIONS_LOADING:
      return { ...state, loading: true };
    case types.TRANSACTIONS_DETAILS:
      return {
        ...state,
        revenue: action.payload.revenue,
        expense: action.payload.expense,
        balance: action.payload.balance,
      };
    default:
      break;
  }
  return { ...state };
};
