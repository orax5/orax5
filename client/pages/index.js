import React from "react";
import PhotoSlide from "./components/mainpage/PhotoSlide";
import MainAnimation from "./components/mainpage/MainAnimation";
import styled from "styled-components";
const Home = () => {
  return (
    <>
      <Box>
        <MainAnimation />
      </Box>
      <PhotoSlide />
    </>
  );
};

const Box = styled.div`
  width: 100vw;
  height: 90vh;
`;
export default Home;
