import React, { useEffect, useState } from "react";

const CountDown = (endDate) => {
  // 남은 날짜 계산
  const today = new Date().getTime();
  const goalDate = new Date(endDate).getTime();
  const [CountDown, setCountDown] = useState(goalDate - today);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCountDown(goalDate - today);
  //   }, 1000);
  // }, [goalDate]);

  // useInterval(() => {
  //   setCountDown(goalDate - today);
  // }, 1000);

  const date = Math.floor(CountDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (CountDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((CountDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((CountDown % (1000 * 60)) / 1000);
  return [date, hours, minutes, seconds];
  // return (
  //   <>
  //     {date}일 {hours}시간 {minutes}분 {seconds}초
  //   </>
  // );
};

export default CountDown;
