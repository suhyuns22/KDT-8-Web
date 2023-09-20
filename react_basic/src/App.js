import ClassComponent from "./ClassComponent";
import ClassProps from "./ClassProps";
import ColorChange from "./ColorChange";
import Counter from "./Counter";
import Event from "./Event";
import EventClass from "./EventClass";
import FunctionComponent from "./FunctionComponent";
import Search from "./Search";
import ShowMessage from "./ShowMessage";
import BestSeller from "./bestSeller";
import Hide from "./hide";
import BugComponenet from "./paractice";
import Myname from "./test1";
import Hello from "./test2";

function App() {
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
      <Search></Search>
    </>
  );
}

export default App;
