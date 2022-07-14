import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEmojiSad } from "react-icons/hi";
import {
  SECONDARY_COLOR,
  TEXT_PRIMARY_COLOR,
  TEXT_SECONDARY_COLOR,
  WHITE,
} from "../../utils/colors";
import Transaction from "../Transaction";

export default function Transactions({
  transactions = [],
  onSelectTransaction,
  onDeleteTransactions,
}) {
  const quantityTransactions = () => transactions.length;

  const handleSelectTransaction = (data) => {
    onSelectTransaction(data);
  };

  const handleDeleteTransactions = () => {
    if (onDeleteTransactions) {
      onDeleteTransactions();
    }
  };

  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-6">
      <div className="flex flex-row items-center space-x-2">
        <AiOutlinePlus color={WHITE} />
        <p className={`font-poppins ${TEXT_PRIMARY_COLOR}`}>
          Minhas Transações
        </p>
      </div>
      <div
        className={`${SECONDARY_COLOR} rounded shadow my-4 px-4 py-4 flex flex-col gap-4`}
      >
        {quantityTransactions() <= 0 ? (
          <div className="flex flex-col items-center justify-center">
            <HiOutlineEmojiSad size={42} color={WHITE} />
            <p
              className={`font-poppins ${TEXT_PRIMARY_COLOR} font-semibold text-lg`}
            >
              Nenhum item foi encontrado neste mês!
            </p>
          </div>
        ) : (
          <>
            <p className={`font-poppins ${TEXT_SECONDARY_COLOR} text-center`}>
              Nesse mês foi cadastrado{" "}
              <span className={`font-semibold ${TEXT_PRIMARY_COLOR}`}>
                {quantityTransactions()}
              </span>{" "}
              itens.
            </p>
            <div className="space-y-5 pb-4">
              {transactions.map((transaction) => {
                return (
                  <Transaction
                    key={transaction.id}
                    data={transaction}
                    onSelectTransaction={handleSelectTransaction}
                    onDeleteTransactions={handleDeleteTransactions}
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
