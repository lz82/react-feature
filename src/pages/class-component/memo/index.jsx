import React, { Component, PureComponent, memo } from "react";

export default class MemoComponent extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        age: 18,
        name: "lz",
      },
    };
  }

  handleClick = () => {
    const userInfo = this.state.userInfo;
    this.setState({
      userInfo: {
        ...userInfo,
        age: userInfo.age + 1,
      },
    });
  };

  render() {
    const { age } = this.state.userInfo;
    return (
      <div>
        <button onClick={this.handleClick}>add age</button>
        <div>{age}</div>
        <ChlidComponent name={this.state.userInfo.name} />
        <ChildPureComponent name={this.state.userInfo.name} />
        <ChildPureComponent name={this.state.name} userInfo={this.state.userInfo} />
        <ChildFunctionComponent name={this.state.userInfo.name} />
        <ChildMemoComponent name={this.state.userInfo.name} />
        <ChildMemoComponent name={this.state.userInfo.name} age={age} />
      </div>
    );
  }
}

class ChlidComponent extends Component {
  render() {
    console.log("child component render");
    return <div>{this.props.name}</div>;
  }
}

class ChildPureComponent extends PureComponent {
  render() {
    console.log("child pureComponent render");
    return (
      <>
        <div>{this.props.name} </div>
        <div>{this.props.userInfo?.age}</div>
      </>
    );
  }
}

function ChildFunctionComponent(props) {
  console.log("child function component render");
  return <div>{props.name}</div>;
}

// 当父组件内变化的内容不是
const ChildMemoComponent = memo(function (props) {
  console.log("child memo component render");
  return <div>{props.name}</div>;
});
