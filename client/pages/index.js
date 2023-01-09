import React, { useEffect, useRef, useState } from "react";
import MainAnimation from "./components/MainAnimation";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef();

  const scrollHandler = () => {
    setScrollY(window.pageYOffset);
    console.log(scrollY);
    if (window.pageYOffset > 925) {
      ref.current.style.backGroundColor = "red";
    } else {
      ref.current.style.color = "blue";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });
  return (
    <div>
      <MainAnimation />
      <div
        onScroll={scrollHandler}
        style={{
          height: "100vh",
          borderBottom: "1px solid black",
        }}
      />
      <div ref={ref} onScroll={scrollHandler} style={{ height: "100vh" }} />
      <div ref={ref} onScroll={scrollHandler} style={{ height: "100vh" }} />
      <div ref={ref} onScroll={scrollHandler} style={{ height: "100vh" }} />
    </div>
  );
};

export default Home;
