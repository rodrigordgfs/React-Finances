import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogedIn } from "../../adapters/firebase";
import Cards from "../../Components/Cards";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";
import Logout from "../../Components/Logout";
import Options from "../../Components/Options";
import Transactions from "../../Components/Transactions";
import { TransactionContext } from "../../contexts/Transaction";
import { PRIMARY_COLOR } from "../../utils/colors";

export default function Home() {
  const { loading } = useContext(TransactionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogedIn()) {
      navigate("/login");
    }
  }, []);

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
          <Logout />
        </div>
      )}
    </div>
  );
}
