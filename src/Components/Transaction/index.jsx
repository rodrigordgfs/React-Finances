import moment from "moment";
import { formatedMoney } from "../../utils/moneyFormat";

export default function Transaction({ title, value, category, type, date }) {
  const isRecept = () => type === "revenue";
  const textColor = () => (isRecept() ? "text-green-500" : "text-red-500");
  const borderColor = () =>
    isRecept() ? "outline-green-500" : "outline-red-500";
  const ammount = () => formatedMoney(isRecept() ? value : value * -1);
  const formatedDate = () => moment(date).format("DD/MM/YYYY");

  return (
    <div
      className={`bg-zinc-900 hover:bg-zinc-800 transition-all cursor-pointer flex-col items-center rounded px-2 py-4 space-y-1 outline outline-offset-2 ${borderColor()}`}
    >
      <div className="flex flex-row items-center justify-between">
        <p className="font-poppins font-semibold text-white">{title}</p>
        <p className={`font-poppins ${textColor()}`}>{ammount()}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="font-poppins text-zinc-400">{category}</p>
        <p className="font-poppins text-zinc-400">{formatedDate()}</p>
      </div>
    </div>
  );
}
