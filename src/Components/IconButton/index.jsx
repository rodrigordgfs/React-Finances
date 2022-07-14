import React from "react";
import { SECONDARY_COLOR, SECONDARY_COLOR_HOVER } from "../../utils/colors";

export default function IconButton({
  children,
  size = 14,
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
      className={`${color} ${hover} transition-all h-${size} w-${size} flex items-center justify-center rounded shadow cursor-pointer`}
    >
      {children}
    </div>
  );
}
