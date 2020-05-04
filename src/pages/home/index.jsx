import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <h1>Class Component</h1>
      <ul>
        <li>
          <Link to="/class/context-basic">Context Basic</Link>
          <Link to="/class/context-type">Context Type</Link>
        </li>
      </ul>
    </div>
  );
}
