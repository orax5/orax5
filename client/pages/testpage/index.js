import React from "react";
import styled from "styled-components";
import CountDown from "../components/CountDown";

const index = () => {
  const endDate = new Date("2023-01-31 11:00:00");
  const [date, hours, minutes, seconds] = CountDown(endDate);
  return (
    <>
      <CountDown
        date={Number(date)}
        hours={Number(hours)}
        minutes={Number(minutes)}
        seconds={Number(seconds)}
      />
    </>
  );
};

const Timer = styled.span`
  color: red;
  font-size: 2rem;
  font-weight: 800;
`;
export default index;
