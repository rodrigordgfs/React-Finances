import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import { AiFillBank } from "react-icons/ai";
import Card from "../Card";
import { TransactionsContext } from "../../contexts/TransactionsProvider/context";
import { useContext } from "react";
import { formatedMoney } from "../../utils/moneyFormat";
import CardsLoading from "../CardsLoading";

export default function Cards() {
  const transactionsContext = useContext(TransactionsContext);
  const { transactionsState, transactionsDispatch } = transactionsContext;
  const { revenue, expense, balance, loading } = transactionsState;
  return (
    <>
      {loading ? (
        <CardsLoading />
      ) : (
        <div className="text-white flex flex-col max-w-5xl my-0 mx-auto px-2">
          <div className="flex md:flex-row flex-col items-center gap-5">
            <Card
              title="Receita"
              description={formatedMoney(revenue || 0)}
              color="bg-zinc-800"
            >
              <HiArrowNarrowUp size={28} />
            </Card>
            <Card
              title="Despesa"
              description={formatedMoney(expense || 0)}
              color="bg-zinc-800"
            >
              <HiArrowNarrowDown size={28} />
            </Card>
            <Card
              title="Balanço"
              description={formatedMoney(balance || 0)}
              color={
                balance === 0
                  ? "bg-zinc-800"
                  : balance < 0
                  ? "bg-red-700"
                  : "bg-green-700"
              }
            >
              <AiFillBank size={28} />
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
