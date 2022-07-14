import moment from "moment";
import { formatedMoney } from "../../utils/moneyFormat";
import IconButton from "../IconButton";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import TransactionService from "../../services/transactions";
import { errorMessage, successMessage } from "../../utils/toastify";

export default function Transaction({
  data,
  onSelectTransaction,
  onDeleteTransactions,
}) {
  const { amount, category, date, id, title, type } = data;

  const isRecept = () => type === "Receita";
  const textColor = () => (isRecept() ? "text-green-500" : "text-red-500");
  const borderColor = () =>
    isRecept() ? "outline-green-500" : "outline-red-500";
  const value = () =>
    formatedMoney(isRecept() ? Number(amount) : Number(amount) * -1);
  const formatedDate = () => moment(date).format("DD/MM/YYYY");

  const handleOnClickTransaction = () => {
    onSelectTransaction(data);
  };

  const handleUpdateTransactions = () => {
    if (onDeleteTransactions) {
      onDeleteTransactions();
    }
  };

  const handleOnDeleteTransaction = () => {
    TransactionService.delete(id)
      .then(() => {
        successMessage("Transação excluída com sucesso!");
        handleUpdateTransactions();
      })
      .catch(({ message }) => {
        errorMessage(message);
      });
  };

  return (
    <div
      className={`bg-zinc-900 transition-all cursor-pointer flex flex-row items-center rounded px-2 py-4 space-y-1 outline outline-offset-2 ${borderColor()}`}
    >
      <div className="flex-col w-full">
        <div className="flex flex-row items-center justify-between">
          <p className="font-poppins font-semibold text-zinc-50">{title}</p>
          <p className={`font-poppins ${textColor()}`}>{value()}</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="font-poppins text-zinc-400">{category}</p>
          <p className="font-poppins text-zinc-400">{formatedDate()}</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 pl-4">
        <IconButton
          onButtonClick={handleOnClickTransaction}
          color="bg-blue-800"
          hover="bg-blue-700"
        >
          <MdModeEditOutline color="white" size={20} />
        </IconButton>
        <IconButton
          onButtonClick={handleOnDeleteTransaction}
          color="bg-red-800"
          hover="bg-red-700"
        >
          <AiFillDelete color="white" size={20} />
        </IconButton>
      </div>
    </div>
  );
}
