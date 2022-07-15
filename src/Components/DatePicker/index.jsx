import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import moment from "moment";
import { useState } from "react";
import {
  ICONS_COLOR,
  SECONDARY_COLOR,
  SECONDARY_COLOR_HOVER,
  TEXT_SECONDARY_COLOR,
} from "../../utils/colors";
import IconButtonTransparent from "../IconButtonTransparent";

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
      className={`${SECONDARY_COLOR} flex flex-row flex-1 px-2 items-center rounded h-14 shadow-md border-2 border-solid border-b-tertiary-dark dark:border-0`}
    >
      <IconButtonTransparent onButtonClick={handleDecreaseMonth}>
        <ChevronLeftIcon className={`h-7 w-7 ${ICONS_COLOR}`} />
      </IconButtonTransparent>
      <p className={`flex-1 font-poppins ${TEXT_SECONDARY_COLOR} text-center`}>
        {date}
      </p>
      <IconButtonTransparent onButtonClick={handleIncreaseMonth}>
        <ChevronRightIcon className={`h-7 w-7 ${ICONS_COLOR}`} />
      </IconButtonTransparent>
    </div>
  );
}
