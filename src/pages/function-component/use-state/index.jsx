import React, { useState } from "react";

export default function UseState(props) {
  console.log("render");
  const [cnt, setCnt] = useState(() => {
    // 只会在初始化执行一次
    console.log("set state");
    return props.defautCnt || 0;
  });

  const [age, setAge] = useState(18);

  const addCnt = () => {
    setCnt(cnt + 1);
  };

  const addAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <div>cnt:{cnt}</div>
      <div>
        <button onClick={addCnt}>add cnt</button>
      </div>
      <br />
      <div>age:{age}</div>
      <div>
        <button onClick={addAge}>add age</button>
      </div>
    </div>
  );
}
