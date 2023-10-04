import MyContext from "./store/lang-context";
import { useState } from "react";

export default function LanguageProvider(props) {
  const [language, setLanguage] = useState("ko");
  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </MyContext.Provider>
  );
}
