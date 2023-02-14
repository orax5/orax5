const CalcTimes = (countDown) => {
  // 나누기 1000하면 -> 초 단위
  // * 60 -> 분 단위
  // * 60 * 60 -> 시간 단위
  // * 60 * 60 * 24 -> 일 단위
  const date = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [date, hours, minutes, seconds];
};

export default CalcTimes;
