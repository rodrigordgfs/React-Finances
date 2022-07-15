import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import moment from "moment";
import { useState } from "react";
import {
  ICONS_COLOR,
  SECONDARY_COLOR,
  SECONDARY_COLOR_HOVER,
  TEXT_SECONDARY_COLOR
} from "../../utils/colors";

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
    <div
      className={`${SECONDARY_COLOR} flex flex-row flex-1 items-center rounded h-14 shadow-md`}
    >
      <button
        onClick={handleDecreaseMonth}
        className={`ml-4 p-2 cursor-pointer rounded-full ${SECONDARY_COLOR_HOVER} transition-all`}
      >
        <ChevronLeftIcon className={`h-7 w-7 ${ICONS_COLOR}`} />
      </button>
      <p className={`flex-1 font-poppins ${TEXT_SECONDARY_COLOR} text-center`}>
        {date}
      </p>
      <button
        onClick={handleIncreaseMonth}
        className={`mr-4 p-2 rounded-full cursor-pointer ${SECONDARY_COLOR_HOVER} transition-all`}
      >
        <ChevronRightIcon className={`h-7 w-7 ${ICONS_COLOR}`} />
      </button>
    </div>
  );
}
