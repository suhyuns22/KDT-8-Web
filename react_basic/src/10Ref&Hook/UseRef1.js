import { useRef } from "react";

const UseRef1 = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>

      <input ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </>
  );
};

export default UseRef1;
