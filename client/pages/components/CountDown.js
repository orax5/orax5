import React, { useEffect, useState } from "react";
import CalcTimes from "./CalcTimes";

const CountDown = (endDate) => {
  const goalDate = new Date(endDate).getTime();
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCountDown(goalDate - new Date().getTime());
    }, 1000);
  }, [goalDate]);

  return CalcTimes(countDown);
};

export default CountDown;
