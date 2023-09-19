import panda from "./panda.jpeg";

function Hello() {
  const style = {
    color: "orange",
    fontSize: "40px",
    marginTop: "20px",
  };

  return (
    <>
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={panda}></img>
      </div>
    </>
  );
}

export default Hello;
