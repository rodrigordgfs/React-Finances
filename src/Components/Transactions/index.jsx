import { useContext, useEffect, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { getTransactions } from "../../contexts/TransactionsProvider/actions";
import { TransactionsContext } from "../../contexts/TransactionsProvider/context";
import Transaction from "../Transaction";

export default function Transactions() {
  const isMounted = useRef(true);
  const transactionsContext = useContext(TransactionsContext);
  const { transactionsState, transactionsDispatch } = transactionsContext;
  const transactions = transactionsState.data.transactions || [];

  const quantityTransactions = () => transactions.length;

  useEffect(() => {
    getTransactions(transactionsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
  }, [transactionsDispatch]);

  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-6">
      <div className="flex flex-row items-center space-x-2">
        <AiOutlinePlus color="white" />
        <p className="font-poppins text-white">Minhas Transações</p>
      </div>
      <div className="bg-zinc-800 rounded shadow my-4 p-4 flex flex-col gap-4">
        {quantityTransactions() <= 0 && (
          <div className="flex flex-col items-center justify-center">
            <HiOutlineEmojiSad size={42} color="white" />
            <p className="font-poppins text-white fonr-semibold text-lg">
              Nenhum item foi encontrado neste mês!
            </p>
          </div>
        )}
        {quantityTransactions() > 0 && (
          <>
            <p className="font-poppins text-zinc-300 text-center">
              Nesse mês foi cadastrado{" "}
              <span className="font-semibold text-white">
                {quantityTransactions()}
              </span>{" "}
              itens.
            </p>
            <div className="space-y-5">
              {!transactionsState.loading &&
                transactions.map((transaction) => {
                  const { amount, category, date, id, title, type } =
                    transaction;
                  return (
                    <Transaction
                      key={id}
                      title={title}
                      category={category}
                      type={type}
                      value={amount}
                      date={date}
                    />
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
