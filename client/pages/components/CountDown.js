import React, { useEffect, useState } from "react";
import CalcTimes from "./CalcTimes";

const CountDown = (endDate) => {
  const goalDate = new Date(endDate).getTime(); // 목표일 시간(밀리세컨드)
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCountDown(goalDate - new Date().getTime());
    }, 1000);
  }, [goalDate]);

  return CalcTimes(countDown);
};

export default CountDown;
