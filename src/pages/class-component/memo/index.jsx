import React, { Component, PureComponent } from "react";

export default class Memo extends Component {
  constructor() {
    super();
    this.state = {
      age: 18,
      userInfo: {
        age: 18,
        name: "lz",
      },
    };
  }

  handleClick = () => {
    this.setState({
      userInfo: {
        age: 18,
        name: "liuz",
      },
    });
  };

  render() {
    const { age } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>add age</button>
        <div>{this.state.age}</div>
        <ChlidComponent name={this.state.userInfo.name} />
      </div>
    );
  }
}

class ChlidComponent extends PureComponent {
  render() {
    console.log("child render");
    return <div>{this.props.name}</div>;
  }
}
