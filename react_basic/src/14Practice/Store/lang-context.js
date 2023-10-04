import { createContext, useState } from "react";

const PracContext = createContext({
  language: "",
  setLanguage: () => {},
  mode: "",
  setMode: () => {},
});

export function PracProvider(props) {
  const [language, setLanguage] = useState("Korean");
  const [mode, setMode] = useState("Light");

  return (
    <PracContext.Provider value={{ language, setLanguage, mode, setMode }}>
      {props.children}
    </PracContext.Provider>
  );
}

export default PracContext;
