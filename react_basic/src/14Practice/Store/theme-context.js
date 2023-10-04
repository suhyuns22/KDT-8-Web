import { createContext, useState } from "react";

//context
const ThemeConText = createContext({
  language: "",
  theme: "",
  setLanguage: () => {},
  setTheme: () => {},
});

//provider component
export function ThemeProvider({ children }) {
  const [language, setLanguage] = useState("ko");
  const [theme, setTheme] = useState("light");

  return (
    <ThemeConText.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </ThemeConText.Provider>
  );
}

export default ThemeConText;
