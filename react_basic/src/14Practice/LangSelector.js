import { useContext, useState } from "react";
import PracContext from "./Store/lang-context";

export default function PracSelector() {
  const value = useContext(PracContext);
  const [bgcolor, setBgcolor] = useState("white");
  const [color, setColor] = useState("white");

  const handleLang = () => {
    if (value.language === "Korean") {
      value.setLanguage("English");
    } else {
      value.setLanguage("Korean");
    }
  };

  const handleMode = () => {
    if (value.mode === "Light") {
      value.setMode("Dark");
      setBgcolor("black");
      setColor("white");
    } else {
      value.setMode("Light");
      setBgcolor("white");
      setColor("black");
    }
  };

  return (
    <div style={{ backgroundColor: bgcolor, color: color }}>
      <h2>현재 설정</h2>
      <span>언어: {value.language} </span>
      <button onClick={handleLang}>언어 변경</button>
      <br />
      <span>화면모드: {value.mode} </span>
      <button onClick={handleMode}>모드 변경</button>
    </div>
  );
}
