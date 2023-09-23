import { useRef } from "react";

const UseRef2 = () => {
  const idRef = useRef(1);

  const plusidRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
  };

  return (
    <>
      <p>useRef 로컬변수 사용</p>
      <h2>{idRef.current}</h2>
      <button onClick={plusidRef}>plus Ref</button>
    </>
  );
};

export default UseRef2;
