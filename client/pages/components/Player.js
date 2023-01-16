import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

const Player = () => {
  const [fillLike, setFillLike] = useState(false);

  // 좋아요 하트 채우기 버튼 핸들러 다시 누르면 하트 비워야해서 하나로만듬
  const fillLikeHandler = () => {
    setFillLike((fillLike) => !fillLike); // on,off 개념 boolean
  };
  return (
    <SideStreamingBox>
      <div>
        <Image
          src={NewJeansOMG}
          alt={"현재스트리밍곡"}
          width={200}
          height={200}
        />
      </div>
      <StreamingControllBox>
        <div>
          {fillLike == false ? (
            <>
              <FavoriteBorderIcon
                style={{ background: "rgba(36, 36, 36, 1)" }}
                onClick={fillLikeHandler}
              />
            </>
          ) : (
            <>
              <Image
                src={heart_on}
                width={24}
                height={24}
                alt="하트채움"
                onClick={fillLikeHandler}
                style={{ background: "rgba(36, 36, 36, 1)" }}
              />
            </>
          )}

          <div style={{ textAlign: "center" }}>
            <div style={{ background: "rgba(36, 36, 36, 1)" }}>Ditto</div>
            <div style={{ background: "rgba(36, 36, 36, 1)", color: "gray" }}>
              NewJeans
            </div>
          </div>
          <MoreHorizIcon style={{ background: "rgba(36, 36, 36, 1)" }} />
        </div>
        <div>
          <VolumeUpIcon style={{ background: "rgba(36, 36, 36, 1)" }} />
          <ShuffleIcon style={{ background: "rgba(36, 36, 36, 1)" }} />
          <SkipPreviousIcon style={{ background: "rgba(36, 36, 36, 1)" }} />
          <PlayArrowIcon
            style={{ background: "rgba(36, 36, 36, 1)", fontSize: "4rem" }}
          />
          <SkipNextIcon style={{ background: "rgba(36, 36, 36, 1)" }} />
          <RepeatIcon style={{ background: "rgba(36, 36, 36, 1)" }} />
          <QueueMusicIcon style={{ background: "rgba(36, 36, 36, 1)" }} />
        </div>

        <hr style={{ border: "solid 0.25rem black" }} />

        <CurrentStreamingContent>
          <Image
            src={NewJeans1stEP}
            alt="뉴진스어텐션"
            width={80}
            height={80}
          />
          <div>
            <div>Attention</div>
            <div>NewJeans</div>
          </div>
        </CurrentStreamingContent>
        <CurrentStreamingContent>
          <Image src={NewJeansOMG} alt="뉴진스디토" width={80} height={80} />
          <div>
            <div>Ditto</div>
            <div>NewJeans</div>
          </div>
        </CurrentStreamingContent>
        <CurrentStreamingContent>
          <Image src={rain} alt="폴킴비" width={80} height={80} />
          <div>
            <div>비</div>
            <div>폴킴</div>
          </div>
        </CurrentStreamingContent>
        <CurrentStreamingContent>
          <Image src={SummerMagic} alt="레드벨벳" width={80} height={80} />
          <div>
            <div>Power Up</div>
            <div>Red Velvet (레드벨벳)</div>
          </div>
        </CurrentStreamingContent>
        <CurrentStreamingContent>
          <Image src={Butter} alt="방탄" width={80} height={80} />
          <div>
            <div>Butter</div>
            <div>BTS (방탄소년단)</div>
          </div>
        </CurrentStreamingContent>
        <CurrentStreamingContent>
          <Image src={SQUAREUP} alt="블랙핑크" width={80} height={80} />
          <div>
            <div>Forever Young</div>
            <div>BLACKPINK</div>
          </div>
        </CurrentStreamingContent>
      </StreamingControllBox>
    </SideStreamingBox>
  );
};

// 스트리밍 내용 박스
const SideStreamingBox = styled.div`
  > :nth-child(1) {
    ${(props) => props.theme.align.flexCenter}
    >img {
      margin-top: 4rem;
    }
  }
`;

// 현재 스트리밍 음악 내용 감싸주는 컨테이너
const CurrentStreamingContent = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem 0rem 0rem 0;
  background: rgba(36, 36, 36, 1);
  > div {
    margin: 1rem;
  }
  & :nth-child(1) {
    font-size: 1.5rem;
  }
  & :nth-child(2) {
    color: gray;
    font-size: 1rem;
  }
`;
// 스트리밍 컨트롤러 박스
const StreamingControllBox = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 4rem;
  }
`;

export default Player;
