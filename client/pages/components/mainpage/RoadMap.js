import React from "react";
import styled from "styled-components";

const RoadMap = () => {
  return (
    <MainContainer>
      <div></div>
      <MapContainer>
        <h1>ROADMAP</h1>
      </MapContainer>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: cadetblue;
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const MapContainer = styled.div`
  display: inherit;
  
`;
export default RoadMap;
