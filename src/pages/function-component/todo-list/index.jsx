import React, { useRef, useState, memo, useEffect } from 'react';

const LOCAL_KEY = '_$_todo_list_';

export default function TodoList() {
	const [todos, setTodos] = useState([]);
	const id = useRef();

	useEffect(() => {
		const todolist = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
		if (todolist.length > 0) {
			id.current = todolist[todolist.length - 1].id;
		} else {
			id.current = 0;
		}
		setTodos(todolist);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
	}, [todos]);

	const onAdd = (val) => {
		const newItem = {
			id: ++id.current,
			txt: val,
			status: 0,
		};
		setTodos((todos) => [...todos, newItem]);
	};

	const onToggle = (id, status) => {
		setTodos((todos) =>
			todos.map((item) => {
				return item.id === id ? { ...item, status: !status } : item;
			})
		);
	};

	const onDel = (id) => {
		setTodos((todos) => todos.filter((item) => item.id !== id));
	};

	return (
		<div>
			<TodoInput onAdd={onAdd} />

			<List list={todos} onToggle={onToggle} onDel={onDel} />
		</div>
	);
}

const TodoInput = memo(function (props) {
	const { onAdd } = props;
	const inputRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const val = inputRef.current.value;
		onAdd(val);
		inputRef.current.value = '';
	};

	return (
		<form onSubmit={onSubmit}>
			<input ref={inputRef} />
		</form>
	);
});

const TodoItem = memo(function (props) {
	const { id, txt, status, onChange, onDel } = props;

	const handleChange = () => {
		onChange(id, status);
	};

	const handleDel = () => {
		onDel(id);
	};

	return (
		<li style={{ width: 550, display: 'flex' }}>
			<input type="checkbox" checked={status} onChange={handleChange} />
			<span>{txt}</span>
			<span style={{ marginLeft: 100, cursor: 'pointer' }} onClick={handleDel}>
				x
			</span>
		</li>
	);
});

const List = memo(function (props) {
	const { list, onToggle, onDel } = props;
	return (
		<ul>
			{list.map((todo) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					txt={todo.txt}
					status={todo.status}
					onChange={onToggle}
					onDel={onDel}
				/>
			))}
		</ul>
	);
});
