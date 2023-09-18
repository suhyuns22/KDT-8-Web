import "./App.css";

function App() {
  //jsx 요소에 반드시 부모 요소가 필요
  // const flag = false;
  // let txt = "";
  // if (flag) {
  //   txt = "true입니다";
  // } else {
  //   txt = "flase입니다";
  // }
  // const style = {
  //   backgroundColor: "red",
  // };

  // const lists = ["k", "d", "t", "w", "e", "b"];

  // return (
  //   <>
  //     <h1 style={{ backgroundColor: "black", color: "white" }}>Hello React!</h1>
  //     <div style={style}>리액트 시작</div>
  //     <input type="text" />
  //     {/* <div>{flag ? <h1>true 입니다</h1> : <h1>false 입니다</h1>}</div> */}
  //     <div>{txt}</div>
  //     {lists.map((value, index) => {
  //       return <div key={index}>Hello {value}</div>;
  //     })}
  //   </>
  // );
  //실습1
  //   return (
  //     <>
  //       <div>
  //         이것은 div입니다.
  //         <h3>이것은 div 안에 있는 h3 태그 입니다</h3>
  //       </div>
  //       <div>{3 + 5 == 8 ? <h1>정답입니다</h1> : <h1>오답입니다</h1>}</div>
  //     </>
  //   );
  //실습2
  // const name = "우디";
  // const animal = "강아지";
  // return (
  //   <>
  //     <div>제 반려 동물의 이름은 <u>{name}</u>입니다. </div>
  //     <div>
  //       <u>{name}</u>는 <u>{animal}</u>입니다.
  //     </div>
  //   </>
  // );
  //실습3
  // const title = "Hello World";

  // return (
  //   <>
  //     <div className="text">{title}</div>
  //     <br />
  //     <div className="input">
  //       아이디 : <input />
  //     </div>
  //     <br />
  //     <div className="input">
  //       비밀번호 : <input />
  //     </div>
  //   </>
  // );
  //실습4
  // return (
  //   <div className="rainbow">
  //     <div className="red"></div>
  //     <div className="orange"></div>
  //     <div className="yellow"></div>
  //     <div className="green"></div>
  //     <div className="blue"></div>
  //     <div className="navy"></div>
  //     <div className="purple"></div>
  //   </div>
  // );
  //실습 5
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];

  const vipUsers = users.filter((user) => user.vip === true);

  return (
    <>
      {vipUsers.map((value) => (
        <div key={value.id}>{value.name}</div>
      ))}
    </>
  );
}
export default App;
