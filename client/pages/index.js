import React from "react";
import PhotoSlide from "./components/mainpage/PhotoSlide";
import MainAnimation from "./components/mainpage/MainAnimation";
import styled from "styled-components";
import Developers from "./components/mainpage/Developers";
import MainText from "./components/mainpage/MainText";
import RoadMap from "./components/mainpage/RoadMap";

const Home = () => {
  return (
    <>
      <Box>
        <MainAnimation />
        <MainText />
      </Box>
      <PhotoSlide />
      <RoadMap />
      <Developers />
    </>
  );
};

// 캔버스는 div로 감싸서 영역을 잡아준다
const Box = styled.div`
  width: 100vw;
  height: 90vh; // nav바 영역 제외한 높이
`;
export default Home;
