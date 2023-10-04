import { Component } from "react";

class ShowMessage extends Component {
  ShowMessage = () => {
    alert(this.props.message);
  };

  render() {
    return (
      <>
        <button onClick={this.ShowMessage}>Show Message</button>
      </>
    );
  }
}

export default ShowMessage;
