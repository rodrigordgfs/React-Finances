import Header from "../../Components/Header";
import Cards from "../../Components/Cards";
import Options from "../../Components/Options";
import Transactions from "../../Components/Transactions";
import { useEffect, useState } from "react";
import TransactionsService from "../../services/transactions";
import Loading from "../../Components/Loading";
import { errorMessage } from "../../utils/toastify";
import moment from "moment";

function App() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransasctions] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  function getRevenue(data) {
    return data
      .filter((transaction) => transaction.type === "Receita")
      .reduce(
        (acc, transaction) => Number(acc) + Number(transaction.amount),
        0
      );
  }

  function getExpense(data) {
    return data
      .filter((transaction) => transaction.type === "Despesa")
      .reduce(
        (acc, transaction) => Number(acc) + Number(transaction.amount),
        0
      );
  }

  function getTransactions() {
    setLoading(true);
    TransactionsService.get()
      .then(({ data }) => {
        const currentyDate = moment().format("YYYY-MM");
        const monthTransactions = data
          .filter(
            (transaction) =>
              moment(transaction.date).format("YYYY-MM") === currentyDate
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
  }

  useEffect(() => {
    getTransactions();
  }, []);

  function handleNewTransaction() {
    getTransactions();
  }

  return (
    <div className="App bg-zinc-900 h-fit">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Cards revenue={revenue} expense={expense} balance={balance} />
          <Options handleNewTransaction={handleNewTransaction} />
          <Transactions transactions={transactions} />
        </>
      )}
    </div>
  );
}

export default App;
