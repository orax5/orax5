import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import { useDispatch, useSelector } from "react-redux";
import db from "../../../public/db.json";
const Player = () => {
  const dispatch = useDispatch();
  const leftStreaming = useSelector((state) => state.user.tickets.leftTicket);
  const intLeftStreaming = parseInt(leftStreaming);
  const ttoday = useSelector((state) => state.user.tickets.ttoday);
  const leftDay = Math.floor(((intLeftStreaming - ttoday) * 1000) / 86400000);
  // console.log(intLeftStreaming);
  // console.log(ttoday);
  // console.log(isNaN(leftDay));

  const alamTest = () => {};

  const musics = db.musics;
  // 이건 오른쪽 슬라이드에서 선택하면 재생목록에 추가되고 이걸 최종적으로
  // 플레이어 부분에서 보여줄건데, 로컬 스토리지에 넣어놓고 사용할 예정
  // 아니면 백에 말해서 재생목록 DB를 만들던지
  // const addedSings = useSelector((state) => state.streaming.playList);
  // console.log(addedSings);
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);

  // 다음곡, 이전곡
  const handleClickNext = () => {
    setTrackIndex((currentTrack) => (currentTrack < musics.length - 1 ? currentTrack + 1 : 0));
  };
  const handleClickPrev = () => {
    setTrackIndex((currentTrack) => (currentTrack == 0 ? musics.length - 1 : currentTrack - 1));
  };
  // 재생목록 누르면 재생되는 함수
  const playInmusicMusic = (id) => {
    // 로그인안하거나 그냥 접근하면 selector가 NaN를 표기하는데 이 값이 나오면~
    if (isNaN(leftDay) === true || 0 >= leftDay) {
      alert("스트리밍권을 구매해주세요");
      return;
    }
    // console.log(audioRef.current);
    // DB 전체 노래 목록에서 list에서 클릭된 음악의 id와 일치하는 곡을 찾음
    const findId = musics.filter((el) => el.id == id);
    // console.log(findId[0]);
    const targetId = findId[0].id - 1;
    setTrackIndex(targetId);
    // audioRef.current?.audio.current.play();
  };

  const playS3Music = (id) => {
    console.log(id); // 2/12 여기서는 map돌린게 아니라서 id 바로 못찾아옴 다른 방법으로 가져오기
    dispatch(playSong(id));
  };

  return (
    <>
      <PlayerArea>
        <Image src={musics[trackIndex].cover} alt={"현재스트리밍곡"} width={200} height={200} />
        <ControllPlayers>
          <AudioPlayer
            header={`${musics[trackIndex].title + " - " + musics[trackIndex].artists}`}
            volume="0.5"
            src={musics[trackIndex].src} // 여기서 바로 링크 전달안하고 제목.mp3 이런 파일을 플레이버튼 클릭 시에 넘겨준다 그래서 null 일때와 데이터가 들어왔을 때로 구분해서 음악이 플레이되게 하기로 함
            showSkipControls
            onClickPrevious={handleClickPrev}
            onClickNext={handleClickNext}
            onPlay={() => playS3Music(id)}
            hidePlayer={false}
            loop={true}
          />
        </ControllPlayers>
      </PlayerArea>
      {/* 재생목록 */}
      {musics.map(({ id, cover, title, artists }, idx) => (
        <ListLayout key={idx}>
          <ImgContainer>
            <Image src={cover} alt="cover" width={80} height={80} />
          </ImgContainer>
          <ContentBox>
            <span
              onClick={(e) => {
                playInmusicMusic(id);
              }}
            >
              {title}
            </span>
            {artists}
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
    @media ${(props) => props.theme.device.tablet}, ${(props) => props.theme.device.mobile} {
      font-size: 1.5rem;
      font-weight: 900;
    }
  }
  > span:hover {
    text-decoration: underline;
  }
`;
export default Player;
