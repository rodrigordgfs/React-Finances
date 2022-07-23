import { EmojiSadIcon, PlusIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/Transaction";
import {
  ICONS_COLOR,
  SECONDARY_COLOR,
  TEXT_PRIMARY_COLOR,
  TEXT_SECONDARY_COLOR
} from "../../utils/colors";
import Transaction from "../Transaction";

export default function Transactions() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-6 ">
      <div className="flex flex-row items-center space-x-2">
        <PlusIcon className={`h-5 w-5 ${ICONS_COLOR}`} />
        <p className={`font-poppins ${TEXT_PRIMARY_COLOR}`}>
          Minhas Transações
        </p>
      </div>
      <div
        className={`${SECONDARY_COLOR} rounded shadow-md my-4 px-4 py-4 flex flex-col gap-4 border-2 border-solid border-b-tertiary-dark dark:border-0`}
      >
        {transactions?.length <= 0 ? (
          <div className="flex flex-col items-center justify-center">
            <EmojiSadIcon className={`h-9 w-9 ${ICONS_COLOR}`} />
            <p
              className={`font-poppins ${TEXT_PRIMARY_COLOR} font-semibold text-lg text-center`}
            >
              Nenhum item foi encontrado neste mês!
            </p>
          </div>
        ) : (
          <>
            <p className={`font-poppins ${TEXT_SECONDARY_COLOR} text-center`}>
              Nesse mês foi cadastrado{" "}
              <span className={`font-semibold ${TEXT_PRIMARY_COLOR}`}>
                {transactions?.length}
              </span>{" "}
              itens.
            </p>
            <div className="space-y-5 pb-4">
              {transactions?.map((transaction) => {
                return (
                  <Transaction key={transaction.id} transaction={transaction} />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
