import React from "react";
import useResponsive from "./useResponsive";

export default function UseResponsiveTest() {
  // getting width and height from useResponsize Hook
  const windowSize = useResponsive();
  // extract width & height
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Use WindowResize/ Responsive Hook</h1>
      <h3>Current window Width & Height</h3>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
}
