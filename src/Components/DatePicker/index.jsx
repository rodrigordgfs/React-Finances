import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import moment from "moment";
import { useState } from "react";

export default function DatePicker() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [date, setDate] = useState(
    moment(currentDate).format("MMMM [de] YYYY")
  );

  function handleIncreaseMonth() {
    setCurrentDate(moment(currentDate).add(1, "month"));
    setDate((currentDate) =>
      moment(currentDate).add(1, "month").format("MMMM [de] YYYY")
    );
  }

  function handleDecreaseMonth() {
    setCurrentDate(moment(currentDate).subtract(1, "month"));
    setDate((currentDate) =>
      moment(currentDate).subtract(1, "month").format("MMMM [de] YYYY")
    );
  }

  return (
    <div className="bg-zinc-800 flex flex-row flex-1 items-center rounded h-14 shadow">
      <div
        onClick={handleDecreaseMonth}
        className="ml-4 p-2 cursor-pointer rounded-full hover:bg-zinc-700 transition-all"
      >
        <IoMdArrowDropleft color="white" size={28} />
      </div>
      <p className="flex-1 font-poppins text-zinc-300 text-center">{date}</p>
      <div
        onClick={handleIncreaseMonth}
        className="mr-4 p-2 rounded-full cursor-pointer hover:bg-zinc-700 transition-all"
      >
        <IoMdArrowDropright size={28} color="white" />
      </div>
    </div>
  );
}
