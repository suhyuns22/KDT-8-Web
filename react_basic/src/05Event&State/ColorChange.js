import { Component } from "react";

class ColorChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      text: "검정색 글씨",
    };
  }

  changeRed = () => {
    this.setState({ color: "red", text: "빨간색 글씨" });
  };

  changeBlue = () => {
    this.setState({ color: "blue", text: "파란색 글씨" });
  };

  render() {
    const { color, text } = this.state;

    return (
      <div>
        <h1 style={{ color }}>{text}</h1>
        <button onClick={this.changeRed}>빨간색</button>
        <button onClick={this.changeBlue}>파란색</button>
      </div>
    );
  }
}

export default ColorChange;
