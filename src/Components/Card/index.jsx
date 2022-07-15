import React from "react";
import { TEXT_PRIMARY_COLOR } from "../../utils/colors";

export default function Card({ title, description, color, children }) {
  return (
    <div className={`${color} md:flex-1 flex-none w-full p-6 rounded shadow-md`}>
      <div className="flex flex-row items-center justify-between">
        <p
          className={`${TEXT_PRIMARY_COLOR} font-poppins text-lg font-semibold`}
        >
          {title}
        </p>
        {children}
      </div>
      <p className={`${TEXT_PRIMARY_COLOR} font-poppins text-3xl pt-10`}>
        {description}
      </p>
    </div>
  );
}
