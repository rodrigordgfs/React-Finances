import { CurrencyDollarIcon } from '@heroicons/react/outline'
import { ICONS_COLOR, TEXT_PRIMARY_COLOR, WHITE } from "../../utils/colors";

export default function Logo() {
  return (
    <a href="" className="flex flex-row items-center space-x-2">
      <CurrencyDollarIcon className={`h-9 w-9 ${ICONS_COLOR}`} />
      <p
        className={`${TEXT_PRIMARY_COLOR} font-poppins font-semibold text-2xl`}
      >
        Finance
      </p>
    </a>
  );
}
