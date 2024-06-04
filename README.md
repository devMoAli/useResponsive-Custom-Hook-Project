# useResponsive-Custom-Hook-Project

![useResponsive-Custom-Hook-Project](useResponsive.gif)


useResponsize.jsx

import { useLayoutEffect, useState } from "react";

function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    // initial width & height
    width: 0,
    height: 0,
  });

  function handleResize() {
    // setting the current width & height of the window
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    // after mount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}

export default useResponsive;


now let’s use this hook in our component useResponsiveTest.jsx

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
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
}


App.js
import UseResponsiveTest from "./components/useResponsiveTest";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseResponsiveTest />
    </div>
  );
}

export default App;

now you can see window current width and height printed and when u resize the page it changes to the current size which could be useful to apply css on the page style 
