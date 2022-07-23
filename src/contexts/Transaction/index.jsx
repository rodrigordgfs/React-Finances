import moment from "moment";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TransactionsService from "../../services/transactions";
import { errorMessage, successMessage } from "../../utils/toastify";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [datePicked, setDatePicked] = useState(moment().format("YYYY-MM"));
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const getRevenue = (data) => {
    return data
      .filter((transaction) => transaction.type === "Receita")
      .reduce(
        (acc, transaction) => Number(acc) + Number(transaction.amount),
        0
      );
  };

  const getExpense = (data) => {
    return data
      .filter((transaction) => transaction.type === "Despesa")
      .reduce(
        (acc, transaction) => Number(acc) + Number(transaction.amount),
        0
      );
  };

  useEffect(() => {
    getTransactions();
  }, [datePicked]);

  useEffect(() => {
    if (!isModalOpened) {
      getTransactions();
      setSelectedTransaction(null);
    }
  }, [isModalOpened]);

  const getTransactions = () => {
    setLoading(true);
    TransactionsService.get().then(({ data }) => {
      const monthTransactions = data
        .filter((x) => moment(x.date).format("YYYY-MM") === datePicked)
        .sort((a, b) => {
          a.updatedAt - b.updatedAt;
        });
      setTransactions(monthTransactions);
      setRevenue(getRevenue(monthTransactions));
      setExpense(getExpense(monthTransactions));
      setBalance(getRevenue(monthTransactions) - getExpense(monthTransactions));
      setLoading(false);
    });
  };

  const deleteTransaction = (id) => {
    TransactionsService.delete(id)
      .then(() => {
        successMessage("Transação excluída com sucesso!");
        getTransactions();
      })
      .catch(({ message }) => {
        errorMessage(message);
      });
  };

  const insertOrUpdateTransaction = (body) => {
    if (selectedTransaction) {
      TransactionsService.patch(selectedTransaction.id, body)
        .then(() => {
          successMessage("Transação atualizada com sucesso!");
          setIsModalOpened(false);
        })
        .catch(({ message }) => {
          errorMessage(message);
        });
    } else {
      TransactionsService.post({ ...body, id: uuidv4() })
        .then(() => {
          successMessage("Transação adicionada com sucesso!");
          setIsModalOpened(false);
        })
        .catch(({ message }) => {
          errorMessage(message);
        });
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        loading,
        setLoading,
        transactions,
        datePicked,
        setDatePicked,
        revenue,
        setRevenue,
        expense,
        setExpense,
        balance,
        setBalance,
        isModalOpened,
        setIsModalOpened,
        selectedTransaction,
        setSelectedTransaction,
        getTransactions,
        deleteTransaction,
        insertOrUpdateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};