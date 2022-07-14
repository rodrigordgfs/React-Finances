import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import moment from "moment";
import { useState } from "react";

export default function DatePicker({ currentDate, onDateChange }) {
  const [date, setDate] = useState(
    moment(currentDate).format("MMMM [de] YYYY")
  );

  const handleOnChange = (data) => {
    if (onDateChange) {
      onDateChange(data);
    }
  };

  const handleIncreaseMonth = () => {
    setDate((previousDate) =>
      moment(previousDate).add(1, "month").format("MMMM [de] YYYY")
    );
    handleOnChange(moment(date).add(1, "month"));
  };

  const handleDecreaseMonth = () => {
    setDate((previousDate) =>
      moment(previousDate).subtract(1, "month").format("MMMM [de] YYYY")
    );
    handleOnChange(moment(date).subtract(1, "month"));
  };

  return (
    <div className="bg-zinc-800 flex flex-row flex-1 items-center rounded h-14 shadow">
      <button
        onClick={handleDecreaseMonth}
        className="ml-4 p-2 cursor-pointer rounded-full hover:bg-zinc-700 transition-all"
      >
        <IoMdArrowDropleft color="white" size={28} />
      </button>
      <p className="flex-1 font-poppins text-zinc-300 text-center">{date}</p>
      <button
        onClick={handleIncreaseMonth}
        className="mr-4 p-2 rounded-full cursor-pointer hover:bg-zinc-700 transition-all"
      >
        <IoMdArrowDropright size={28} color="white" />
      </button>
    </div>
  );
}
