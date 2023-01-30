import React, { useEffect, useState } from "react";
import CalcTimes from "./CalcTimes";

const CountDown = (endDate) => {
  const goalDate = new Date(endDate).getTime(); // 목표일 시간(밀리세컨드)
  const [countDown, setCountDown] = useState(0);

  // 목표일 도달했을 때 -1시간 -1분 이런식으로 뜨기때문에
  // 경과했을 때 멈추는 처리 해줘야함
  useEffect(() => {
    setInterval(() => {
      setCountDown(goalDate - new Date().getTime());
    }, 1000);
  }, [goalDate]);

  return CalcTimes(countDown);
};

export default CountDown;
