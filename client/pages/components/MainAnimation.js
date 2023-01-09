import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MainAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth); // 5216
    let height = (canvas.height = window.innerHeight); // 3664
    let cX = width / 2; // 2608
    let cY = height / 2; // 1832

    let fl = 3;
    let shapes = [];
    let numShapes = 1000;

    // 랜덤 뽑는 함수
    function rand() {
      return Math.random() * 10000;
    }

    for (let i = 0; i < numShapes; i++) {
      shapes[i] = {
        x: rand(-1000, 1000),
        y: rand(-1000, 1000),
        z: rand(0, 10000),
      };
    }

    ctx.translate(cX, cY);

    function resetFrame() {
      //ctx.clearRect(-cX, -cY, width, height);
      ctx.fillStyle = "rgba(0,0,0,.5)";
      ctx.fillRect(-cX, -cY, width, height);
    }

    function draw() {
      resetFrame();
    }

    function update() {
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < numShapes; i++) {
        let shape = shapes[i],
          perspective = fl / (fl + shape.z);

        ctx.save();
        ctx.translate(shape.x * perspective, shape.y * perspective);
        ctx.scale(perspective, perspective);
        ctx.fillRect(-3, -3, 6, 6);
        ctx.restore();

        shape.z += 50;
        if (shape.z > 10000) {
          shape.z = 0;
        }
        fl += 0.01;
        if (fl > 5000) {
          fl = 3;
        }
      }
    }

    function loop() {
      draw();
      update();
      window.requestAnimationFrame(loop);
    }
    loop();
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="canvas"
        style={{
          backgroundColor: "red",
          display: "block",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      />
    </>
  );
};

// const BackGround = styled.div`
//   background-color: #111;
// `;

// const Canvas = styled.div`
//   color: white;
//   background-color: rgba(0, 0, 0, 0);
//   display: block;
//   position: absolute;
//   top: 0px;
//   left: 0px;
// `;
export default MainAnimation;
