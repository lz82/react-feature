import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ClassComponent from "./pages/class-component";
import FunctionComponent from "./pages/function-component";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/class"
          render={(props) => <ClassComponent {...props} />}
        />
        <Route
          path="/function"
          render={(props) => <FunctionComponent {...props} />}
        />
        <Route render={(props) => <Home {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
