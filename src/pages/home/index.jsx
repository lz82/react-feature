import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <h1>Class Component</h1>
      <ul>
        <li>
          <Link to="/class/context-basic">Context Basic</Link>
        </li>
        <li>
          <Link to="/class/context-type">Context Type</Link>
        </li>
        <li>
          <Link to="/class/lazy">Lazy load</Link>
        </li>
        <li>
          <Link to="/class/memo">Memo</Link>
        </li>
      </ul>

      <h1>Function Component</h1>
      <ul>
        <li>
          <Link to="/function/use-state">useState</Link>
        </li>
        <li>
          <Link to="/function/use-effect">useEffect</Link>
        </li>
      </ul>
    </div>
  );
}
