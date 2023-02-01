import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
// 더미 데이터
import db from "../../../public/db.json";

const Player = () => {
  const musics = db.musics;
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musics.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musics.length - 1 ? currentTrack + 1 : 0
    );
  };

  // 재생목록 누르면 재생되는 함수
  const playInlistMusic = () => {
    // console.log(audioRef.current);
    // audioRef?.current.audio.current.play();
  };
  return (
    <>
      <PlayerArea>
        <Image
          src={musics[trackIndex].cover}
          alt={"현재스트리밍곡"}
          width={200}
          height={200}
        />
        <ControllPlayers>
          <AudioPlayer
            ref={audioRef}
            header={`${
              musics[trackIndex].title + " - " + musics[trackIndex].artists
            }`}
            volume="0.5"
            src={musics[trackIndex].src}
            showSkipControls
            onClickNext={handleClickNext}
            onPlay={(e) => console.log(e)}
            onEnded={handleEnd}
            hidePlayer={false}
            loop={true}
          />
        </ControllPlayers>
      </PlayerArea>
      {/* 재생목록 */}
      {musics.map((list, idx) => (
        <ListLayout key={idx}>
          <ImgContainer>
            <Image src={list.cover} alt="cover" width={80} height={80} />
          </ImgContainer>
          <ContentBox>
            <span onClick={playInlistMusic()}>{list.title}</span>
            {list.artists}
          </ContentBox>
        </ListLayout>
      ))}
    </>
  );
};
// NowPlaying, AudioPlayer 묶는 div
const PlayerArea = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  padding-top: 4rem;
`;
// AudioPlayer 컨트롤러
const ControllPlayers = styled.div`
  ${(props) => props.theme.align.flexCenterColumn}
  width: 100%;
  height: 10rem;
  > div {
    width: 80%;
  }
`;
const ListLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  place-items: center;
  margin: 0.5rem;
  @media ${(props) => props.theme.device.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.device.mobile} {
    display: none;
  }
`;
const ImgContainer = styled.div``;
const ContentBox = styled.div`
  position: relative;
  width: 95%;
  ${(props) => props.theme.align.flexStart};
  @media ${(props) => props.theme.device.tablet} {
    margin-left: 0;
  }
  padding-left: 1rem;
  > span {
    width: inherit;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 900;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media ${(props) => props.theme.device.tablet},
      ${(props) => props.theme.device.mobile} {
      font-size: 1.5rem;
      font-weight: 900;
    }
  }
  > span:hover {
    text-decoration: underline;
  }
`;
export default Player;
