import { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <>
        제가 좋아하는 음식은
        <span style={{ color: "red" }}>{this.props.food}</span> 입니다.
      </>
    );
  }
}

ClassProps.defaultProps = {
  food: "햄버거",
};

export default ClassProps;
