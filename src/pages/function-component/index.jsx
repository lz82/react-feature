import React from "react";
import { Route, Link } from "react-router-dom";

import UseState from "./use-state";
import UseEffect from "./ues-effect";
import UseContext from "./use-context";
import UseMemoCb from "./use-memo-cb";
import UseRef from "./use-ref";
import CustomHook from "./custom-hook";
import TodoList from './todo-list'

export default function FunctionComponent(props) {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>function Component</h1>
      {props.children}
      <Route
        path="/function/use-state"
        render={(props) => <UseState {...props} />}
      />
      <Route
        path="/function/use-effect"
        render={(props) => <UseEffect {...props} />}
      />
      <Route
        path="/function/use-context"
        render={(props) => <UseContext {...props} />}
      />
      <Route
        path="/function/use-memo-cb"
        render={(props) => <UseMemoCb {...props} />}
      />
      <Route
        path="/function/use-ref"
        render={(props) => <UseRef {...props} />}
      />
      <Route
        path="/function/custom-hook"
        render={(props) => <CustomHook {...props} />}
      />
      <Route 
        path="/function/todo-list"
        render={props => <TodoList {...props} />}
      />
    </div>
  );
}
