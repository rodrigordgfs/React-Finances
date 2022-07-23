import { useContext } from "react";
import Cards from "../../Components/Cards";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";
import Options from "../../Components/Options";
import Transactions from "../../Components/Transactions";
import { TransactionContext } from "../../contexts/Transaction";
import { PRIMARY_COLOR } from "../../utils/colors";

export default function App() {
  const { loading } = useContext(TransactionContext);

  return (
    <div className={`App ${PRIMARY_COLOR} min-h-screen flex flex-col`}>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex-1 h-full">
          <Cards />
          <Options />
          <Transactions />
        </div>
      )}
    </div>
  );
}
