import styled from "styled-components";

const _BoxOne = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;
//prpos이용
const _BoxTwo = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;
//상속받아서 이용하는 방법
const _CircleOne = styled(_BoxTwo)`
  /* background-color: ${(props) => props.color};
  width: 100px;
  height: 100px; */
  border-radius: 50px;
`;

//기존태그를 이름만 바꿔서 사용하는 방법 => as 라는 키워드 사용
const _Btn = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`;

//태그 옵션 넣는 방법
const _Input = styled.input.attrs({ required: true })``;

//중첩
const _BoxThree = styled.div`
  width: 200px;
  height: 100px;
  text-align: center;
  background-color: aqua;
  line-height: 100px;

  ${_Input} {
    background-color: yellow;
  }

  p {
    color: "red;";
    font-weight: 900;
    &:hover {
      font-size: 32px;
    }
  }
`;

const _BtnTwo = styled.div`
  background-color: blue;
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  text-align: center;
  margin: 10px;
  padding: 10px;

  &:active {
    background-color: red;
    color: black;
  }
`;

export default function StyledComponent() {
  return (
    <div>
      <_BoxOne></_BoxOne>
      <_BoxTwo color="red" />
      <_BoxTwo color="orange" />
      <_CircleOne color="green"></_CircleOne>
      <_Btn as="a" href="https://www.naver.com">
        click
      </_Btn>
      <_Input></_Input>
      <_BoxThree>
        <p>HELLO</p>
      </_BoxThree>
      <_BtnTwo>색상변경</_BtnTwo>
    </div>
  );
}
