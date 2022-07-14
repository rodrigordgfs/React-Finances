import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { TEXT_PRIMARY_COLOR, WHITE } from "../../utils/colors";

export default function Logo() {
  return (
    <a href="" className="flex flex-row items-center space-x-2">
      <RiMoneyDollarBoxFill size={38} color={WHITE} />
      <p
        className={`${TEXT_PRIMARY_COLOR} font-poppins font-semibold text-2xl`}
      >
        Finance
      </p>
    </a>
  );
}
