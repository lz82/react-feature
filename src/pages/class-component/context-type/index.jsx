import React, { Component, createContext } from "react";

const ThemeContext = createContext("light");

export default class ContextType extends Component {
  constructor() {
    super();
    this.state = {
      theme: "dark",
      size: "small",
    };
  }

  handleChange(e) {
    this.setState({
      theme: e.target.value,
    });
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div>context type</div>
        <div>
          <select
            value={this.state.theme}
            onChange={(e) => this.handleChange(e)}
          >
            <option>light</option>
            <option>dark</option>
          </select>
        </div>
        <ToolBar />
      </ThemeContext.Provider>
    );
  }
}

function ToolBar(props) {
  return (
    <>
      <ThemedButton {...props} />
      <ThemeDiv {...props} />
    </>
  );
}

// 当有多个Context时
// 使用contextType
class ThemedButton extends Component {
  render() {
    return <div>current theme: {this.context}</div>;
  }
}
// 使用class的挂载属性contextType
ThemedButton.contextType = ThemeContext;

class ThemeDiv extends Component {
  static contextType = ThemeContext;

  render() {
    return <div>use static context type: {this.context}</div>;
  }
}
