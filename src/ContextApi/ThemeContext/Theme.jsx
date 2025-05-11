import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
const Theme = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const info = { theme, changeTheme };
  return (
    <div>
      <ThemeContext.Provider value={info}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default Theme;
