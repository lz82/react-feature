import React, { useState, useEffect, useCallback } from "react";

export default function CustomHook() {
  const size = useResize();
  return (
    <div>
      <div>width: {size.width}</div>
      <div>height: {size.height}</div>
      <Toolbar />
    </div>
  );
}

function Toolbar() {
  const size = useResize();

  return (
    <>
      <div>
        child size: {size.width}*{size.height}
      </div>
    </>
  );
}

function useResize() {
  const [size, setSize] = useState({
    width: window.document.documentElement.clientWidth,
    height: window.document.documentElement.clientHeight,
  });

  // const handleResize = () => {
  //   setSize({
  //     width: window.document.documentElement.clientWidth,
  //     height: window.document.documentElement.clientHeight,
  //   });
  // };

  const handleResize = useCallback(() => {
    setSize({
      width: window.document.documentElement.clientWidth,
      height: window.document.documentElement.clientHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, [handleResize]);

  return size;
}
