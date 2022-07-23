import { TEXT_PRIMARY_COLOR } from "../../utils/colors";

export default function Card({ title, description, color, children }) {
  return (
    <div
      className={`${color} md:flex-1 flex-none w-full p-6 border-2 border-solid border-b-tertiary-dark dark:border-0 rounded shadow-md`}
    >
      <div className="flex flex-row items-center justify-between">
        <p
          className={`${TEXT_PRIMARY_COLOR} font-poppins text-lg font-semibold`}
        >
          {title}
        </p>
        {children}
      </div>
      <p
        className={`${TEXT_PRIMARY_COLOR} font-poppins font-semibold text-3xl pt-10`}
      >
        {description}
      </p>
    </div>
  );
}
