import Logo from "../../Components/Logo";
import { TEXT_PRIMARY_COLOR } from "../../utils/colors";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  const getUserName = () => user?.displayName?.split(" ")[0] || "";

  const getUserImage = () => user?.photoURL || "";

  return (
    <div className="flex flex-col px-2 py-6">
      <div className="max-w-5xl w-full my-0 mx-auto flex flex-row items-center justify-between">
        <Logo />
        <div className="flex flex-row gap-2">
          <img
            className="rounded-full h-8 w-8"
            src={getUserImage()}
            alt="User Image"
          />
          <p className={`font-poppins text-lg ${TEXT_PRIMARY_COLOR}`}>
            Olá, {getUserName()}
          </p>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
