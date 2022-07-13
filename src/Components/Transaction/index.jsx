import moment from "moment";
import { formatedMoney } from "../../utils/moneyFormat";

export default function Transaction({ data, onSelectTransaction }) {
  const { amount, category, date, id, title, type } = data;

  const isRecept = () => type === "Receita";
  const textColor = () => (isRecept() ? "text-green-500" : "text-red-500");
  const borderColor = () =>
    isRecept() ? "outline-green-500" : "outline-red-500";
  const value = () =>
    formatedMoney(isRecept() ? Number(amount) : Number(amount) * -1);
  const formatedDate = () => moment(date).format("DD/MM/YYYY");

  function handleOnClickTransaction() {
    onSelectTransaction(data);
  }

  return (
    <div
      onClick={handleOnClickTransaction}
      className={`bg-zinc-900 hover:bg-zinc-800 transition-all cursor-pointer flex-col items-center rounded px-2 py-4 space-y-1 outline outline-offset-2 ${borderColor()}`}
    >
      <div className="flex flex-row items-center justify-between">
        <p className="font-poppins font-semibold text-zinc-50">{title}</p>
        <p className={`font-poppins ${textColor()}`}>{value()}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="font-poppins text-zinc-400">{category}</p>
        <p className="font-poppins text-zinc-400">{formatedDate()}</p>
      </div>
    </div>
  );
}
