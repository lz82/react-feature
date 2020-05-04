import React, { Component, createContext } from "react";

const ThemeContext = createContext("light");
const SizeContext = createContext("small");

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

  handleSizeChange(e) {
    this.setState({
      size: e.target.value,
    });
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <SizeContext.Provider value={this.state.size}>
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
          <div>
            <select
              value={this.state.size}
              onChange={(e) => this.handleSizeChange(e)}
            >
              <option>small</option>
              <option>big</option>
            </select>
          </div>

          <ToolBar />
        </SizeContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function ToolBar(props) {
  return <ThemedButton {...props} />;
}

// 当有多个Context时
class ThemedButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <SizeContext.Consumer>
            {(size) => (
              <div>
                theme: {theme}
                <br />
                size: {size}
              </div>
            )}
          </SizeContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
