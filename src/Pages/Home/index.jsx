import moment from "moment";
import { useEffect, useState } from "react";
import Cards from "../../Components/Cards";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";
import Options from "../../Components/Options";
import Transactions from "../../Components/Transactions";
import TransactionsService from "../../services/transactions";
import { PRIMARY_COLOR } from "../../utils/colors";
import { errorMessage } from "../../utils/toastify";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransasctions] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [datePicked, setDatePicked] = useState(moment().format("YYYY-MM"));
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    getTransactions();
  }, [datePicked]);

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

  const getTransactions = () => {
    setLoading(true);
    TransactionsService.get()
      .then(({ data }) => {
        const monthTransactions = data
          .filter(
            (transaction) =>
              moment(transaction.date).format("YYYY-MM") === datePicked
          )
          .sort((a, b) => {
            a.date - b.date;
          });
        setTransasctions(monthTransactions);
        setRevenue(getRevenue(monthTransactions));
        setExpense(getExpense(monthTransactions));
        setBalance(
          getRevenue(monthTransactions) - getExpense(monthTransactions)
        );
        setLoading(false);
      })
      .catch(({ message }) => {
        errorMessage(message);
      });
  };

  const handleUpdateTransactionsList = () => {
    getTransactions();
  };

  const handleDateOptionChange = (date) => {
    setDatePicked(moment(date).format("YYYY-MM"));
  };

  const handleTransactionSelected = (data) => {
    setSelectedTransaction(data);
  };

  return (
    <div className={`App ${PRIMARY_COLOR} min-h-screen flex flex-col`}>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex-1 h-full">
          <Cards revenue={revenue} expense={expense} balance={balance} />
          <Options
            handleNewTransaction={handleUpdateTransactionsList}
            date={datePicked}
            onDateChange={handleDateOptionChange}
            selectedTransaction={selectedTransaction}
            handleResetSelectedTransaction={() => setSelectedTransaction(null)}
          />
          <Transactions
            transactions={transactions}
            onSelectTransaction={handleTransactionSelected}
            onDeleteTransactions={handleUpdateTransactionsList}
          />
        </div>
      )}
    </div>
  );
}
