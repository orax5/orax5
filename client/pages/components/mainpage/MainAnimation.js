import React, { useEffect, useRef, useState } from "react";
// 메인 우주 애니메이션: https://codepen.io/1mincoding/pen/VwYRMrW?editors=1010

const MainAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {   
    // const sin = Math.sin;
    // const cos = Math.cos;
    // const PI = Math.PI;
    // let tempx, tempy, tempz;
    const fov = 150;

    class Dot {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
    }
    
    let canvas, context;
    let dots = [];
    let dotsLength = (innerWidth + innerHeight) / 20;
    
    function setSize() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      initDots();
      context.fillStyle = "white";
      // 투명도 조절하는거임 html 사이즈에 따라 불투명도 조절
      if (innerWidth < 800) {
        context.globalAlpha = 0.3;
      } else {
        context.globalAlpha = 0.8;
      }
    }

    function initDots() {
      dots = [];
      // 나누는 숫자가 작아질수록 점 개수가 많아짐
      dotsLength = (innerWidth + innerHeight) / 15;
      let x, y, z;
      for (let i = 0; i < dotsLength; i++) {
        x = Math.random() * innerWidth - innerWidth / 2;
        y = Math.random() * innerHeight - innerHeight / 2;
        z = Math.random() * innerWidth - innerWidth / 2;
        dots.push(new Dot(x, y, z));
      }
    }

    function drawDots(dot) {
      let scale, x2d, y2d;
      scale = fov / (fov + dot.z);
      x2d = dot.x * scale + innerWidth / 2;
      y2d = dot.y * scale + innerHeight / 2;
      context.fillRect(x2d, y2d, scale * 4, scale * 3);
    }

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      let dot;
      for (let i = 0; i < dots.length; i++) {
        dot = dots[i];
        // 숫자가 커질수록 속도가 빨라진다
        dot.z -= 2;
        if (dot.z < -fov) {
          dot.z += (innerWidth + innerHeight) / 2;
        }
        drawDots(dot);
      }
      requestAnimationFrame(render);
    }

    function init() {
      canvas = document.getElementById("canvas");
      context = canvas.getContext("2d");
      setSize();
      render();
    }

    addEventListener("resize", setSize);
    init();
 
  }, []);
 

  return (
    <>
      <canvas
        ref={canvasRef}
        id="canvas"
        style={{
          backgroundColor: "black",
          position: "absolute",
          width: "100%",
          height: "90vh",
        }}
      />
    </>
  );
};

export default MainAnimation;
