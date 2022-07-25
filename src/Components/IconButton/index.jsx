import React from "react";
import { SECONDARY_COLOR, SECONDARY_COLOR_HOVER } from "../../utils/colors";

export default function IconButton({
  children,
  size = "h-14 w-14",
  color = SECONDARY_COLOR,
  hover = SECONDARY_COLOR_HOVER,
  onButtonClick = null,
}) {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div
      onClick={handleButtonClick}
      className={`${color} ${hover} transition-all ${size} ${size} flex items-center justify-center rounded shadow-md cursor-pointer border-2 border-solid border-b-tertiary-dark dark:border-0`}
    >
      {children}
    </div>
  );
}
