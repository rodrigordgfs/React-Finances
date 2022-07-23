import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import moment from "moment";
import { useContext, useState } from "react";
import { TransactionContext } from "../../contexts/Transaction";
import {
  ICONS_COLOR,
  SECONDARY_COLOR,
  TEXT_SECONDARY_COLOR
} from "../../utils/colors";
import { getMonth } from "../../utils/date";
import IconButtonTransparent from "../IconButtonTransparent";

export default function DatePicker() {
  const { datePicked, setDatePicked } = useContext(TransactionContext);
  const [date, setDate] = useState(moment(datePicked).format("YYYY-MM-DD"));

  const formatedDate = () =>
    `${getMonth(date)} de ${moment(date).format("YYYY")}`;

  const handleOnChange = (data) => {
    setDatePicked(moment(data).format("YYYY-MM"));
  };

  const handleIncreaseMonth = () => {
    setDate((previousDate) =>
      moment(previousDate).add(1, "month").format("YYYY-MM-DD")
    );
    handleOnChange(moment(date).add(1, "month"));
  };

  const handleDecreaseMonth = () => {
    setDate((previousDate) =>
      moment(previousDate).subtract(1, "month").format("YYYY-MM-DD")
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
        {formatedDate()}
      </p>
      <IconButtonTransparent onButtonClick={handleIncreaseMonth}>
        <ChevronRightIcon className={`h-7 w-7 ${ICONS_COLOR}`} />
      </IconButtonTransparent>
    </div>
  );
}
