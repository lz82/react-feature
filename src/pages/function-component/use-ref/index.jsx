import React, { useState, useEffect, useRef } from 'react';

export default function UseRefComponent() {
	const [cnt, setCnt] = useState(0);
	const timer = useRef();

	useEffect(() => {
		timer.current = setInterval(() => {
			setCnt((cnt) => cnt + 1);
		}, 1000);
	}, []);

	useEffect(() => {
		if (cnt >= 10) {
			clearInterval(timer.current);
		}
	});

	return <div>{cnt}</div>;
}
