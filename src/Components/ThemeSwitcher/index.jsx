import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { SECONDARY_COLOR, SECONDARY_COLOR_HOVER } from "../../utils/colors";

export default function User() {

  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (
      theme === "dark" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    const currentTheme = theme === "dark" ? "light" : "dark"
    setTheme(currentTheme);
  }

  return (
    <button 
      type="button"
      onClick={handleThemeSwitch}
      className={`px-4 py-2 ${SECONDARY_COLOR} ${SECONDARY_COLOR_HOVER} transition-all rounded shadow-md border-2 border-solid border-b-tertiary-dark dark:border-0`}
    >
      {theme === "dark" ? "🌙" : "🌞"}
    </button>
  );
}
