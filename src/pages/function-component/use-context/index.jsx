import React, { createContext, useContext } from 'react';

const themeCxt = createContext({ theme: 'dark', size: 'large' });
const userCxt = createContext();

export default function UseContextComponent() {
	return (
		<>
			<themeCxt.Provider value={{ theme: 'light', size: 'small' }}>
				<userCxt.Provider value={{ name: 'lz', age: 18 }}>
					<h1>有Provider时，不会取声明时的默认值</h1>
					<div>
						<ToolBar>
							<ThemeButton />
						</ToolBar>
					</div>
				</userCxt.Provider>
			</themeCxt.Provider>
			<div>
				<h1>在附近没有Provider时，则会取声明时的默认值</h1>
				<ToolBar>
					<ThemeButton />
				</ToolBar>
			</div>
		</>
	);
}

function ToolBar(props) {
	return props.children;
}

function ThemeButton(props) {
	const ctx = useContext(themeCxt);
	const ctxUser = useContext(userCxt);
	console.log(ctxUser);

	return (
		<>
			<div>theme button's theme is {ctx.theme}</div>
			<div>theme button's size is {ctx.size}</div>
			<div>userInfo. {ctxUser ? 'name: ' + ctxUser.name : 'no user'}</div>
			<div>userInfo. {ctxUser ? 'age: ' + ctxUser.age : 'no user'}</div>
		</>
	);
}
