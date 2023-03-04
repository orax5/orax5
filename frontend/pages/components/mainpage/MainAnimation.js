import React, { useEffect, useRef, useState } from "react";
// 메인 우주 애니메이션: https://codepen.io/1mincoding/pen/VwYRMrW?editors=1010

const MainAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fov = 150; // Field of view = 시야 https://trts1004.tistory.com/12109520

    class Dot {
      // 객체의 기본 상태를 설정해주는 생성자 메서드
      constructor(x, y, z) {
        this.x = x; // this.선언할 이름 = 변수를 할당함
        this.y = y; // 이 한 줄이 프로퍼티
        this.z = z;
      }
    }
    // 선언, 컨텍스트 선언
    let canvas, context;
    let dots = [];
    // (내부 넓이 + 높이) /20
    let dotsLength = (innerWidth + innerHeight) / 20;
    // 사이즈 설정 함수
    function setSize() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      // 아래 선언한 함수 호출
      initDots();
      // fillStyle - 색상이나 스타일을 도형안에 사용할 수 있다.
      context.fillStyle = "white";
      // 투명도 조절하는거임 html 사이즈에 따라 불투명도 조절 width 넓이가 줄어들면 dots 색이 옅어짐 = 0.3
      if (innerWidth < 800) {
        context.globalAlpha = 0.3;
      } else {
        context.globalAlpha = 0.8;
      }
    }

    function initDots() {
      dots = [];
      // 나누는 숫자가 작아질수록 점 개수가 많아짐
      dotsLength = (innerWidth + innerHeight) / 2;
      let x, y, z;
      // 점 개수만큼 x,y,z 축 좌표를 for문을 돌린다
      // 즉, 각 점 하나 마다의 랜덤한 좌표값이 생성된다
      for (let i = 0; i < dotsLength; i++) {
        x = Math.random() * innerWidth - innerWidth / 2;
        y = Math.random() * innerHeight - innerHeight / 2;
        z = Math.random() * innerWidth - innerWidth / 2;
        // 생성된 좌표값은 배열에 넣어준다
        // X는 가로 방향, Y는 높이, Z 는 세로방향
        dots.push(new Dot(x, y, z));
      }
    }

    // 점 그리기
    function drawDots(dot) {
      let scale, x2d, y2d;
      // 크기 = 시야/ 시야 + z축 좌표값
      scale = fov / (fov + dot.z);
      // x 좌표 * 크기 + 너비 /2
      x2d = dot.x * scale + innerWidth / 2;
      y2d = dot.y * scale + innerHeight / 2;
      // (x시작좌표,y시작좌표,x길이,y길이) 즉 가로 4 세로 3 비율의 dots이 생김
      // fillRect(x,y,width,height) : 색이 채워진 사각형을 그림
      context.fillRect(x2d, y2d, scale * 4, scale * 3);
    }

    function render() {
      // 캔버스 전체 지우기 == 날라오는 점들 초기화 잔상안남게
      // clearRect(x,y,width,height) : 특정영역을 지움
      context.clearRect(0, 0, canvas.width, canvas.height);
      let dot;
      for (let i = 0; i < dots.length; i++) {
        dot = dots[i];
        // 숫자가 커질수록 속도가 빨라진다
        dot.z -= 1;
        if (dot.z < -fov) {
          dot.z += (innerWidth + innerHeight) / 2;
        }
        drawDots(dot);
      }
      requestAnimationFrame(render);
      //  백그라운드 동작 및 비활성화시 중지(성능 최적화)
      // - 최대 1ms(1/1000s)로 제한되며 1초에 60번 동작
      // - 다수의 애니메이션에도 각각 타이머 값을 생성 및 참조하지 않고 내부의 동일한 타이머 참조
    }

    function init() {
      //  <canvas> 요소를 표시할 DOM을 검색
      canvas = document.getElementById("canvas");
      // getContext() : 랜더링 컨텍스트와 (렌더링 컨텍스트의) 그리기 함수들을 사용할 수 있다 <canvas> 요소가 있으면 getContext() 메서드를 사용하여 드로잉 컨텍스트에 엑세스가 가능하다.
      context = canvas.getContext("2d");
      setSize();
      render();
    }
    // 브라우저의 크기가 변경될 때 발생
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
