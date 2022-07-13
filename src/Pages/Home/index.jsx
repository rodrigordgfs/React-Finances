import Header from "../../Components/Header";
import Cards from "../../Components/Cards";
import Options from "../../Components/Options";
import Transactions from "../../Components/Transactions";
import { useEffect, useState } from "react";
import TransactionsService from "../../services/transactions";
import Loading from "../../Components/Loading";
import { errorMessage } from '../../utils/toastify'

function App() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransasctions] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  function getRevenue(data) {
    return data
      .filter((transaction) => transaction.type === "revenue")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  }
  function getExpense(data) {
    return data
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  }

  useEffect(() => {
    TransactionsService.get().then(({ data }) => {
      setTransasctions(data);
      setRevenue(getRevenue(data));
      setExpense(getExpense(data));
      setBalance(getRevenue(data) - getExpense(data));
      setLoading(false);
    }).catch(({message}) => {
      errorMessage(message)
    });
  }, []);

  return (
    <div className="App bg-zinc-900 h-fit">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Cards revenue={revenue} expense={expense} balance={balance} />
          <Options />
          <Transactions transactions={transactions} />
        </>
      )}
    </div>
  );
}

export default App;
