import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PageContainer } from "../../styles/global-style";
import Image from "next/image";
// 이미지들
import NewJeans1stEP from "../../public/Img/NewJeans1stEP.jpg";
import NewJeansOMG from "../../public/Img/NewJeansOMG.jpg";
import rain from "../../public/Img/rain.jpg";
import SummerMagic from "../../public/Img/SummerMagic.jpg";
import Butter from "../../public/Img/Butter.jpg";
import SQUAREUP from "../../public/Img/SQUAREUP.jpg";
import heart_on from "../../public/Img/heart_on.png";
// 아이콘
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RepeatIcon from "@mui/icons-material/Repeat";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Player from "../components/Player";

const index = () => {
  // 투데이, 보관함 이동하려고 사용
  const [isSelectContent, setSelectContent] = useState(true);
  // 보관함 안에 좋아요한 노래, 아티스트, 펀딩 상태값 문자열로 저장하고 일치하면 일치하는 값 뛰울거 처음 좋아요 효시 띄울려고 초기값 Like만 넣어둠
  const [like, setLike] = useState("Like");
  const [artist, setArtist] = useState("");
  const [funding, setFunding] = useState("");
  // 좋아요 누르면 하트 색 차게 만들려고 하는 state
  const [fillLike, setFillLike] = useState(false);

  // 투데이 or 보관함 content 볼려는 useState값 함수에 하나의 내용만 담으려고 하나씩 만듬
  const todayHandler = () => {
    setSelectContent(true);
  };
  const lockerHandler = () => {
    setSelectContent(false);
  };
  // 보관함 안 카테고리 이동 핸들러
  const likeMusicHandler = () => {
    setLike("Like");
    setArtist("");
    setFunding("");
  };
  const artistHandler = () => {
    setArtist("Artist");
    setLike("");
    setFunding("");
  };
  const fundingHandler = () => {
    setFunding("Funding");
    setLike("");
    setArtist("");
  };
  // 좋아요 하트 채우기 버튼 핸들러 다시 누르면 하트 비워야해서 하나로만듬
  const fillLikeHandler = () => {
    setFillLike((fillLike) => !fillLike); // on,off 개념 boolean
  };

  return (
    <PageContainer>
      <Allrange>
        <TodayContentBox>
          <SelectContent>
            {isSelectContent == true ? (
              <>
                <div onClick={todayHandler} style={{ color: "red" }}>
                  투데이
                </div>
                <div onClick={lockerHandler}>보관함</div>
              </>
            ) : (
              <>
                <div onClick={todayHandler}>투데이</div>
                <div onClick={lockerHandler} style={{ color: "red" }}>
                  보관함
                </div>
              </>
            )}
          </SelectContent>

          {isSelectContent == true ? (
            <>
              <ItemBox>
                <TitleContainer>
                  <div>최근 들은 노래</div>
                  <div>전체보기</div>
                </TitleContainer>
                <AlbumesBox>
                  <MusicAlbumBox>
                    <Image
                      src={NewJeans1stEP}
                      alt="뉴진스어텐션"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Attention</div>
                    <div>NewJeans</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={NewJeansOMG}
                      alt="뉴진스디토"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Ditto</div>
                    <div>NewJeans</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={rain}
                      alt="폴킴"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>비</div>
                    <div>폴킴</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={SummerMagic}
                      alt="레드벨벳써머"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Power Up</div>
                    <div>Red Velvet (레드벨벳)</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={Butter}
                      alt="BTS버터"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Butter</div>
                    <div>BTS (방탄소년단)</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={SQUAREUP}
                      alt="블랙핑크"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Forever Young</div>
                    <div>BLACKPINK</div>
                  </MusicAlbumBox>
                </AlbumesBox>
              </ItemBox>
              <ItemBox>
                <TitleContainer>
                  <div>내 취향 플레이리스트</div>
                  <div>전체보기</div>
                </TitleContainer>
                <AlbumesBox>
                  <MusicAlbumBox>
                    <Image
                      src={NewJeans1stEP}
                      alt="뉴진스어텐션"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Attention</div>
                    <div>NewJeans</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={NewJeansOMG}
                      alt="뉴진스디토"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Ditto</div>
                    <div>NewJeans</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={rain}
                      alt="폴킴"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>비</div>
                    <div>폴킴</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={SummerMagic}
                      alt="레드벨벳써머"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Power Up</div>
                    <div>Red Velvet (레드벨벳)</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={Butter}
                      alt="BTS버터"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Butter</div>
                    <div>BTS (방탄소년단)</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={SQUAREUP}
                      alt="블랙핑크"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Forever Young</div>
                    <div>BLACKPINK</div>
                  </MusicAlbumBox>
                </AlbumesBox>
              </ItemBox>
              <ItemBox>
                <TitleContainer>
                  <div>DTS's 추천 곡</div>
                  <div>전체보기</div>
                </TitleContainer>
                <AlbumesBox>
                  <MusicAlbumBox>
                    <Image
                      src={NewJeans1stEP}
                      alt="뉴진스어텐션"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Attention</div>
                    <div>NewJeans</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={NewJeansOMG}
                      alt="뉴진스디토"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Ditto</div>
                    <div>NewJeans</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={rain}
                      alt="폴킴"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>비</div>
                    <div>폴킴</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={SummerMagic}
                      alt="레드벨벳써머"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Power Up</div>
                    <div>Red Velvet (레드벨벳)</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={Butter}
                      alt="BTS버터"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Butter</div>
                    <div>BTS (방탄소년단)</div>
                  </MusicAlbumBox>
                  <MusicAlbumBox>
                    <Image
                      src={SQUAREUP}
                      alt="블랙핑크"
                      width={200}
                      height={200}
                      style={{ paddingTop: "1rem" }}
                    />
                    <div>Forever Young</div>
                    <div>BLACKPINK</div>
                  </MusicAlbumBox>
                </AlbumesBox>
              </ItemBox>
            </>
          ) : (
            <>
              <LockerTitleContainer>
                {like === "Like" ? (
                  <>
                    <div onClick={likeMusicHandler} style={{ color: "red" }}>
                      노래
                    </div>
                    <div onClick={artistHandler}>아티스트</div>
                    <div onClick={fundingHandler}>펀딩곡</div>

                    {/* 여기 또 컴포넌트 만들어서 해야함 flex먹고 있어서 블락으로 벗어나서하던가해야하지않나  */}
                    <NoneLikeMusic>
                      <div>좋아하는 노래</div>
                      <div>내가 좋아하는 노래를 모아서 감상해보세요.</div>
                    </NoneLikeMusic>
                  </>
                ) : artist === "Artist" ? (
                  <>
                    <div onClick={likeMusicHandler}>노래</div>
                    <div onClick={artistHandler} style={{ color: "red" }}>
                      아티스트
                    </div>
                    <div onClick={fundingHandler}>펀딩곡</div>
                  </>
                ) : (
                  <>
                    <div onClick={likeMusicHandler}>노래</div>
                    <div onClick={artistHandler}>아티스트</div>
                    <div onClick={fundingHandler} style={{ color: "red" }}>
                      펀딩곡
                    </div>
                  </>
                )}
              </LockerTitleContainer>
            </>
          )}
        </TodayContentBox>

        <Player />
      </Allrange>
    </PageContainer>
  );
};

// 투데이, 내 보관함
const SelectContent = styled.div`
  display: flex;
  font-size: x-large;
  > :nth-child(1) {
    margin-right: 1rem;
  }
`;

const ItemBox = styled.div`
  width: 100%;
  padding-top: 8rem;
`;

// 타이틀, 전체보기 띄어놓는 컨테이너
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > :first-child {
    font-size: larger;
  }
  > :last-child {
    color: gray;
  }
`;

// 이미지랑 노래 이름 아티스트 감싼 박스
const MusicAlbumBox = styled.div`
  width: 200px;
  height: 250px;
  margin-right: 1rem;
  > :nth-child(2) {
  }
  > :last-child {
    color: gray;
  }
`;

// 앨범들을 감싼 박스
const AlbumesBox = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

// 투데이 내용 박스 컨테이너
const TodayContentBox = styled.div``;
// 전범위 감싸는거
const Allrange = styled.div`
  display: flex;
`;

// 보관함 내용
const LockerTitleContainer = styled.div`
  display: flex;
  > div {
    margin-top: 2rem;
    margin-right: 1rem;
  }
`;

// 좋아요한 음악이 없었을때 띄울 컴포넌트박스
const NoneLikeMusic = styled.p`
  display: block;
  margin-top: 30rem;
  margin-left: 15rem;
  text-align: center;
  > :nth-child(1) {
  }
  > :nth-child(2) {
    color: gray;
  }
`;

export default index;
