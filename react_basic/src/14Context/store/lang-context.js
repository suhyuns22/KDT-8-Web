import React, { createContext } from "react";

//context 생성
//Provider와 Consumer 2개의 리액트 컴포넌트 반환
const MyContext = createContext({
  language: "",
  setLanguage: () => {},
});

export default MyContext;
