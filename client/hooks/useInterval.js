import React, { useEffect, useRef } from "react";

// callback 함수와 delay를 전달받았다
const useInterval = (callback, delay) => {
  // useRef는 콜백함수
  const savedCallback = useRef();
  // callback이 변할 때마다 useEffect가 실행되어 savedCallback의 current값이 새로운 callback 데이터로 업데이트된다
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // 해당 함수는 콜백함수
    function count() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(count, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
