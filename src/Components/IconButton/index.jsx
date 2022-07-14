import React from "react";

export default function IconButton({
  children,
  color = "bg-zinc-800",
  hover = "bg-zinc-700",
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
      className={`${color} hover:${hover} transition-all h-14 w-14 flex items-center justify-center rounded shadow cursor-pointer`}
    >
      {children}
    </div>
  );
}
