import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/function/use-state">use state</Link>
        </li>
        <li>
          <Link to="/function/use-effect">use effect</Link>
        </li>
        <li>
          <Link to="/function/use-context">use context</Link>
        </li>
        <li>
          <Link to="/function/use-memo-cb">use memo & callback</Link>
        </li>
        <li>
          <Link to="/function/use-ref">use ref</Link>
        </li>
        <li>
          <Link to="/function/custom-hook">custom hook</Link>
        </li>
        <li>
          <Link to="/function/todo-list">todo list</Link>
        </li>
      </ul>
    </div>
  );
}
