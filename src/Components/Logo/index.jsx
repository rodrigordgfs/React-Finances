import { RiMoneyDollarBoxFill } from 'react-icons/ri'

export default function Logo() {
  return (
    <a href='' className="flex flex-row items-center space-x-2">
      <RiMoneyDollarBoxFill size={38} />
      <p className="font-poppins font-semibold text-2xl">Finance</p>
    </a>
  );
}
