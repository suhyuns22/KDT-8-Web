import { Component } from "react";

class Hide extends Component {
  state = {
    visible: true,
  };

  handleHide = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleHide}>
          {this.state.visible ? "사라져라" : "나타나라"}
        </button>
        {this.state.visible && <h1>안녕하세요</h1>}
      </div>
    );
  }
}

export default Hide;
