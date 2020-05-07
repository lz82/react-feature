import React, { useState, useMemo, useCallback, memo } from 'react';

export default function UseMemoCb() {
	const [cnt, setCnt] = useState(0);
	const [age, setAge] = useState(18);

	const handleClick = () => {
		setCnt(cnt + 1);
	};

	const doubleCnt = useMemo(() => {
		return cnt * 2;
	}, [cnt]);

	const handleChildClick = () => {
		console.log('click...');
	};

	const handleCbClick = useCallback(() => {
		setAge((age) => age + 1);
	}, []);

	return (
		<div>
			<div>cnt:{cnt}</div>
			<div>double cnt: {doubleCnt}</div>
			<div>
				<button onClick={handleClick}>add cnt</button>
			</div>
			<ToolBar age={age} />
			<FooBar age={age} onClick={handleChildClick} />
			<LooBar age={age} onClick={handleCbClick} />
		</div>
	);
}

// 可以看到，点击add cnt时，ToolBar不会重新渲染
const ToolBar = memo(function (props) {
	console.log('render toolbar...');
	const realAge = useMemo(() => {
		return props.age * 2;
	}, [props.age]);

	return <div>{realAge}</div>;
});

// 当像子组件传递事件句柄时，因为父组件每次重新渲染时，事件句柄都发生了变化，因此导致子组件也发生了变化
const FooBar = memo(function (props) {
	console.log('render foobar...');
	return <div>{props.age}</div>;
});

// 使用useCallback后，虽然不能阻止每次生成新的句柄，但是可以使其不被执行
const LooBar = memo(function (props) {
	console.log('render loobar...');
	return <div onClick={props.onClick}>{props.age}</div>;
});
