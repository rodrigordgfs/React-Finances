import Logo from "../../Components/Logo";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
  return (
    <div className="flex flex-col px-2 py-6">
      <div className="max-w-5xl w-full my-0 mx-auto flex flex-row items-center justify-between">
        <Logo />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
