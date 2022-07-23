import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import moment from "moment";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/Transaction";
import {
  BORDER_OUTLINE_NEGATIVE_COLOR,
  BORDER_OUTLINE_POSITIVE_COLOR,
  ICONS_COLOR,
  INFO_COLOR,
  INFO_COLOR_HOVER,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_HOVER,
  TERTIARY_COLOR,
  TEXT_NEGATIVE_COLOR,
  TEXT_POSITIVE_COLOR,
  TEXT_PRIMARY_COLOR,
  TEXT_SECONDARY_COLOR,
} from "../../utils/colors";
import { formatedMoney } from "../../utils/moneyFormat";
import IconButton from "../IconButton";

export default function Transaction({ transaction }) {
  const { setSelectedTransaction, deleteTransaction } =
    useContext(TransactionContext);

  const { amount, category, date, id, title, type } = transaction;

  const isRecept = () => type === "Receita";
  const textColor = () =>
    isRecept() ? `${TEXT_POSITIVE_COLOR}` : `${TEXT_NEGATIVE_COLOR}`;
  const borderColor = () =>
    isRecept()
      ? `${BORDER_OUTLINE_POSITIVE_COLOR}`
      : `${BORDER_OUTLINE_NEGATIVE_COLOR}`;
  const value = () =>
    formatedMoney(isRecept() ? Number(amount) : Number(amount) * -1);
  const formatedDate = () => moment(date).format("DD/MM/YYYY");

  const handleOnClickTransaction = () => {
    setSelectedTransaction(transaction);
  };

  const handleOnDeleteTransaction = () => {
    deleteTransaction(id);
  };

  return (
    <div
      className={`${TERTIARY_COLOR} transition-all flex flex-row items-center rounded px-2 py-4 space-y-1 outline outline-offset-2 ${borderColor()}`}
    >
      <div className="flex-col w-full">
        <div className="flex flex-row items-center justify-between">
          <p
            className={`font-poppins font-semibold text-lg ${TEXT_PRIMARY_COLOR}`}
          >
            {title}
          </p>
          <p className={`font-poppins font-semibold text-lg ${textColor()}`}>
            {value()}
          </p>
        </div>
        <div
          className={`font-poppins ${TEXT_SECONDARY_COLOR} flex flex-row items-center justify-between`}
        >
          <p>{category}</p>
          <p>{formatedDate()}</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 pl-4">
        <IconButton
          onButtonClick={handleOnClickTransaction}
          color={INFO_COLOR}
          hover={INFO_COLOR_HOVER}
        >
          <PencilIcon className={`h-7 w-7 ${ICONS_COLOR}`} />
        </IconButton>
        <IconButton
          onButtonClick={handleOnDeleteTransaction}
          color={NEGATIVE_COLOR}
          hover={NEGATIVE_COLOR_HOVER}
        >
          <TrashIcon className={`h-6 w-6 ${ICONS_COLOR}`} />
        </IconButton>
      </div>
    </div>
  );
}
