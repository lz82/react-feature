import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import ContextBasic from "./context-basic";
import ContextType from "./context-type";
import LazyLoad from "./lazy";
import Memo from "./memo";

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Class Component</h1>
        {this.props.children}
        <Route
          path="/class/context-basic"
          render={(props) => <ContextBasic {...props} />}
        />
        <Route
          path="/class/context-type"
          render={(props) => <ContextType {...props} />}
        />
        <Route path="/class/lazy" render={(props) => <LazyLoad {...props} />} />
        <Route path="/class/memo" render={(props) => <Memo {...props} />} />
      </div>
    );
  }
}
