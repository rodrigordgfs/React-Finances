import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import { AiFillBank } from "react-icons/ai";
import Card from "../Card";
import { TransactionsContext } from "../../contexts/TransactionsProvider/context";
import { useContext } from "react";
import { formatedMoney } from "../../utils/moneyFormat";

export default function Cards() {
  const transactionsContext = useContext(TransactionsContext);
  const { transactionsState, transactionsDispatch } = transactionsContext;
  const { revenue, expense, balance } = transactionsState;
  return (
    <div className="text-white flex flex-col max-w-5xl my-0 mx-auto px-2">
      <div className="flex flex-row items-center space-x-4">
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
  );
}
