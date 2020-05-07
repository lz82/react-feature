import React, { useState, useEffect } from 'react';

export default function UseEffectComponent(props) {
	const [cnt, setCnt] = useState(0);
	const [size, setSize] = useState({
		width: window.document.documentElement.clientWidth,
		height: window.document.documentElement.clientHeight,
	});

	useEffect(() => {
		document.title = `cnt: ${cnt}, width: ${size.width}, height: ${size.height}`;
	}, [cnt, size.height, size.width]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	useEffect(() => {
		const handleClick = () => {
			console.log(cnt);
		};

		document.querySelector('#odd').addEventListener('click', handleClick);

		return () => {
			document.querySelector('#odd').removeEventListener('click', handleResize);
		};
	});

	const handleResize = () => {
		setSize({
			width: window.document.documentElement.clientWidth,
			height: window.document.documentElement.clientHeight,
		});
	};

	const onAddCntClick = () => {
		setCnt(cnt + 1);
	};

	return (
		<div>
			<div className="cnt">{cnt}</div>
			<div>
				<button onClick={onAddCntClick}>add cnt</button>
			</div>

			{cnt % 2 ? (
				<div id="odd">
					<div>
						<div>width: {size.width}</div>
						<div>height: {size.height}</div>
					</div>
				</div>
			) : (
				<span id="odd">
					<div>
						<div>width: {size.width}</div>
						<div>height: {size.height}</div>
					</div>
				</span>
			)}
		</div>
	);
}
