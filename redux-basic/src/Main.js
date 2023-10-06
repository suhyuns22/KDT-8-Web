import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, DELETE_TODO } from "./store";

export default function Main() {
  const [text, setText] = useState("");
  //useSelector() : redux store의 state를 조회
  //인자로는 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있음
  //자동으로 subscribe를 하고 있기 때문에 데이터가 변형되면 컴포넌트가 재실행
  const todos = useSelector((state) => state);
  console.log(todos);

  //dispatch는 우리가 호출할 수 있는 함수
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text });
    setText("");
  };

  const onClick = (id) => {
    dispatch({ type: DELETE_TODO, id });
  };

  return (
    <div>
      <h1>To DOs</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id}>
            {todo.text}
            <button onClick={() => onClick(todo.id)}>DEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
