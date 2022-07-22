import { useContext, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { changeTheme } from "../../contexts/ThemeProvider/actions";
import { ThemeContext } from "../../contexts/ThemeProvider/context";
import { SECONDARY_COLOR, SECONDARY_COLOR_HOVER } from "../../utils/colors";

export default function User() {
  const themeContext = useContext(ThemeContext);
  const { themeState, themeDispatch } = themeContext;

  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (
      theme === "dark" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      changeTheme(themeDispatch, "dark");
    } else {
      setTheme("light");
      changeTheme(themeDispatch, "light");
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
    changeTheme(themeDispatch, currentTheme);
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
