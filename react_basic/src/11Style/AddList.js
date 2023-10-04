import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 200px;
  overflow-y: scroll;
  background-color: grey;
`;

const _Input = styled.input``;

const _Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: skyblue;
  border-radius: 4px;
  text-align: center;
  border: none;
  margin: 10px;
`;

export default function AddList() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.trim() !== "") {
      setListItems([...listItems, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <_Input value={inputValue} onChange={handleInputChange} />
      <_Button onClick={handleAddButtonClick}>Add</_Button>
      <Container>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
