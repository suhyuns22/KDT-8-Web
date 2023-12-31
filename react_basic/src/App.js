// import ClassComponent from "./ClassComponent";
// import ClassProps from "./ClassProps";
// import ColorChange from "./ColorChange";
// import Counter from "./Counter";
// import Event from "./Event";
// import EventClass from "./EventClass";
// import FunctionComponent from "./FunctionComponent";
// import FuncState3 from "./RefPractice";
// import Search2 from "./RefPractice";
// import RefSample from "./RefSample";
// import RefSample2 from "./RefSample2";
// import Search from "./Search";
// import ShowMessage from "./ShowMessage";
// import ParentComponent from "./UseCallback";
// import UseRef1 from "./UseRef1";
// import UseRef2 from "./UseRef2";
// import BestSeller from "./bestSeller";
// import Hide from "./hide";
// import UseMemo from "./hookMemo";
// import BugComponenet from "./paractice";
// import Myname from "./test1";
// import Hello from "./test2";
// import { Form, Outlet } from "react-router-dom";
// import Header from "./12Router/Header";

import Cart from "./14Practice/Cart";
import LanguageSelector from "./14Practice/LangSelector";
import ProductList from "./14Practice/ProductList";
import { CartProvider } from "./14Practice/Store/cart-context";
import { ThemeProvider } from "./14Practice/Store/theme-context";
import ThemeSelector from "./14Practice/ThemeSelector";

// import MyContext from "./14Context/store/lang-context";
// import { useState } from "react";
// import LanguageSlector from "./14Context/LangSelector";
// import ThemeChange from "./14Practice/LangSelector";
// import ThemeProvider from "./14Practice/LangProvider";
// import ChangeTheme from "./14Practice/LangSelector";

// import AddList from "./AddList";
// import LoginPage from "./LoginPage";
// import Router from "./Router";
// import SassComponent from "./SassComponent";
// import StyledComponent from "./StyledComponent";
// import ParentComponent from "./UseCallback";
// import UseCallback2 from "./UseCallback2";
// import UseReducer from "./UseReducer";
// import CirclePractice from "./animation";
// import BugComponenet from "./paractice";
// import UseRefBoard from "./useRef3";

// import UseStatePrac3 from "./useRef3";

function App() {
  // const [language, setLanguage] = useState("ko");
  return (
    <>
      {/* <h1>컴포넌트</h1> */}
      {/* <ClassComponent></ClassComponent>
      <FunctionComponent />
      <BugComponenet></BugComponenet> */}
      {/* <Myname></Myname>
      <Hello></Hello> */}
      {/* <ClassComponent name="차수현" />
      <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent name="kdt8" age={12}>
        안녕
      </FunctionComponent>
      <FunctionComponent /> */}
      {/* <ClassProps food="피자"></ClassProps>
      <br />
      <ClassProps></ClassProps> */}
      {/* <BestSeller
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></BestSeller> */}
      {/* <Event></Event>
      <EventClass></EventClass> */}
      {/* <ShowMessage message="안녕하세요"></ShowMessage> */}
      {/* <Counter></Counter> */}
      {/* <ColorChange></ColorChange> */}
      {/* <Hide></Hide> */}
      {/* <Search></Search> */}
      {/* <RefSample></RefSample>
      <RefSample2></RefSample2> */}
      {/* <FuncState3></FuncState3> */}
      {/* <UseRef1></UseRef1>
      <UseRef2></UseRef2> */}
      {/* <UseStatePrac3></UseStatePrac3> */}
      {/* <UseMemo></UseMemo> */}
      {/* <UseRefBoard /> */}
      {/* <ParentComponent></ParentComponent>
      <UseCallback2></UseCallback2> */}
      {/* <UseReducer></UseReducer> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SassComponent></SassComponent>
      <BugComponenet></BugComponenet> */}
      {/* <CirclePractice></CirclePractice> */}
      {/* <StyledComponent></StyledComponent> */}
      {/* <AddList></AddList> */}
      {/* <Header />
      <Outlet /> */}
      {/* <Router></Router> */}
      {/* <MyContext.Provider>
        <LanguageSlector />
      </MyContext.Provider> */}
      {/* <LanguageProvider>
        <LanguageSlector />
      </LanguageProvider> */}
      {/* <ThemeProvider>
        <LanguageSelector />
        <ThemeSelector />
      </ThemeProvider> */}
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
