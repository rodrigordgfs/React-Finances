import Header from "../../Components/Header";
import Cards from "../../Components/Cards";
import Options from "../../Components/Options";
import Transactions from "../../Components/Transactions";
import { TransactionsProvider } from "../../contexts/TransactionsProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App bg-zinc-900 h-fit">
      <TransactionsProvider>
        <Header />
        <Cards />
        <Options />
        <Transactions />
      </TransactionsProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
