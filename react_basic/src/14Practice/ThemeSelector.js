import { useContext } from "react";
import ThemeConText from "./Store/theme-context";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeConText);

  return (
    <div>
      <h2>현재 테마 : {theme}</h2>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">라이트 모드</option>
        <option value="dark">다크 모드</option>
      </select>
    </div>
  );
}
