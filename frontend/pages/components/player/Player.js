import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import { useDispatch, useSelector } from "react-redux";
import db from "../../../public/db.json";
import ajyContract from "../../../hooks/ajyContract";
import { ticket } from "../../../redux/modules/user";
const Player = () => {
  const tokenData = ajyContract();
  const dispatch = useDispatch();

  // 로컬스토리지 유저 그레이드 값 구하는거
  const myValue = JSON.parse(localStorage.getItem("persist:root"));
  // console.log(myValue)
  // console.log(myValue.user)
  let userGrade;
  if (myValue && myValue.hasOwnProperty('user')) {
    const userObject = JSON.parse(myValue.user);
    userGrade = userObject.users.user_grade;
    console.log(userGrade)
  }

  const musics = db.musics;
  // 이건 오른쪽 슬라이드에서 선택하면 재생목록에 추가되고 이걸 최종적으로
  // 플레이어 부분에서 보여줄건데, 로컬 스토리지에 넣어놓고 사용할 예정
  // 아니면 백에 말해서 재생목록 DB를 만들던지
  // const addedSings = useSelector((state) => state.streaming.playList);
  // console.log(addedSings);
  const audioRef = useRef(null);

   // 구독권 확인
  const [result, setResult] = useState(false);
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
  const playInmusicMusic = async(id) => {
    const result = await tokenData.Ftoken.streamingView();
    // 남은 스트리밍 시간 숫자로
    // 밀리초로 나눔
    const today = new Date().getTime() / 1000;
    // 소수점 내린 최종 현재시간 초
    const ttoday = Math.floor(today);
    console.log(parseInt(result));
    console.log("가공한후현재시간초:", ttoday);
    // 남은날짜를 수정 하는데 현재시간이 0이면 음수찍혀서 종료
    setResult(Math.floor(((parseInt(result) - ttoday) * 1000) / 86400000));
    console.log("여기결과값", parseInt(result));
    // JSX 조건 충족시키려고 만듬 0209
    if (result == 0) {
      setResult(false);
    }
    dispatch(ticket(result, ttoday));
    // 로그인안하거나 그냥 접근하면 selector가 NaN를 표기하는데 이 값이 나오면~
    if (userGrade == 0 || result == false || 0 >= ttoday) {
      alert("스트리밍권을 구매해주세요");
      return;
    }
    // console.log(audioRef.current);
    // DB 전체 노래 목록에서 list에서 클릭된 음악의 id와 일치하는 곡을 찾음
    const findId = musics.filter((el) => el.id == id);
    // console.log(findId[0]);
    const targetId = findId[0].id - 1;
    setTrackIndex(targetId);
  };

  useEffect(() => {
    if (tokenData != null) {
      playInmusicMusic(id);
    }
  }, []);

  return (
    <>
      <PlayerArea>
        <Image src={musics[trackIndex].cover} alt={"현재스트리밍곡"} width={200} height={200} />
        <ControllPlayers>
          <AudioPlayer
            header={`${musics[trackIndex].title + " - " + musics[trackIndex].artists}`}
            volume="0.5"
            src={musics[trackIndex].src} 
            showSkipControls
            onClickPrevious={handleClickPrev}
            onClickNext={handleClickNext}
            onPlay={(e) => console.log(e)}
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
