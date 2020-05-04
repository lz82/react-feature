import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ContextBasic from './context-basic'
import ContextType from './context-type'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
