function Myname() {
  const name = "차수현";
  const my_style = {
    color: "orange",
    backgroundColor: "blue",
    fontSize: "40px",
    padding: "12px",
  };

  return (
    <>
      <div style={my_style}> {name} </div>
    </>
  );
}

export default Myname;
