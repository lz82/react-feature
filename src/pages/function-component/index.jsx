import React from "react";
import { Route, Link } from "react-router-dom";

import UseState from "./use-state";

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
    </div>
  );
}
