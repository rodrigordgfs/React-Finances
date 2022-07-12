import moment from "moment";

export default function Transaction({
  title,
  value,
  type,
  date,
  isRecept = false,
}) {
  const color = () => (isRecept ? "green-500" : "red-500");
  const formatedValue = () =>
    Number(isRecept ? value : value * -1).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  const formatedDate = () => moment(date).format("DD/MM/YYYY");

  return (
    <div
      className={`bg-zinc-900 flex-col items-center rounded px-2 py-4 space-y-1 outline outline-offset-2 outline-${color()}`}
    >
      <div className="flex flex-row items-center justify-between">
        <p className="font-poppins font-semibold text-white">{title}</p>
        <p className={`font-poppins text-${color()}`}>{formatedValue()}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="font-poppins text-zinc-400">{type}</p>
        <p className="font-poppins text-zinc-400">{formatedDate()}</p>
      </div>
    </div>
  );
}
