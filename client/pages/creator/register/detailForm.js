import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";

const detailForm = () => {
  const router = useRouter();
  // 리덕스 합치고 useSelector에서 가져올 예정
  // const creatorCA = useSelector((state)=> state.user.users.acount)
  const creatorCA = "0x123131231231313231312";

  // 이전 페이지에서 업로드하고 받아온 이미지/제목
  const returnedUrl = useSelector((state) => state.funding.imgURL);

  const [uploadedImg, setUploadedImg] = useState("transparent.png");
  const [uploadedTitle, setUploadedTitle] = useState("");

  useEffect(() => {
    const preUploadedImg = returnedUrl.name;
    const preUploadedTitle = preUploadedImg.substring(
      0,
      preUploadedImg.length - 4
    );
    setUploadedImg(preUploadedImg);
    setUploadedTitle(preUploadedTitle);
  });

  // 카테고리 숫자로 받음
  const [category, setCategory] = useState(1);
  const selectCategory = (e) => {
    const value = parseInt(e.target.value);
    setCategory(value);
  };

  const [inputs, setInputs] = useState({
    composer: "",
    lyricist: "",
    singer: "",
    description: "",
    nftAmount: "",
    totalBalance: "",
    opendate: "",
  });

  // 펀딩 시작일은 오늘 이후부터 선택 가능하게 설정
  const dateRef = useRef();
  const [date, setDate] = useState();
  const today = Date.now();
  const timeOff = new Date().getTimezoneOffset() * 120000;
  const limitDate = new Date(today - timeOff).toISOString().split("T")[0];
  useEffect(() => {
    setDate(dateRef.current.setAttribute("min", limitDate));
  }, [date]);

  // input 데이터 처리
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    // console.log({ ...inputs });
  };

  // input데이터를 모은 배열에다가 카테고리, 크리에이터 CA, 이미지 주소 전달
  // 새로운 객체를 만들어서 보낸다
  const data = { ...inputs, uploadedTitle, category, creatorCA, returnedUrl };
  console.log(data);

  // 백에 보내는 곳
  const shinFunding = async (data) => {
    try {
      const imageRes = await {
        // const imageRes = await axios({
        // url: "http://localhost:3001/creator/shinchung",
        method: "post",
        data: {
          shin_title: data.uploadedTitle,
          com_name: data.composer,
          lyric_name: data.lyricist,
          sing_name: data.singer,
          shin_amount: data.nftAmount,
          shin_nft_totalbalance: data.totalBalance,
          shin_cover: data.albumArt,
          shin_opendate: data.opendate,
          shin_description: data.description,
          shin_category: data.category,
          shin_creator_address: data.creatorCA,
          shin_cover: data.returnedUrl,
        },
      };
      const imageURL = imageRes.data;
      console.log(imageURL);
      router.push("/creator")
    } catch (e) {
      console.error(e);
    }
  };

  const shinCancel = () => {
    confirm("신청을 취소하시겠습니까?") ? router.push("/creator") : "";
  };

  return (
    <MainContainer>
      <div></div>
      <RegisterWrap>
        <h1>크리에이터 펀딩 신청폼</h1>
        <hr
          style={{
            height: "1px",
            width: "80vw",
            background: "white",
            margin: "0.5rem 0",
          }}
        />
        <RegistserForm>
          <Preview>
            <Image
              src={`/Img/${uploadedImg}`}
              // src={`/Img/Butter.jpg`}
              width={450}
              height={450}
              alt="uploadedImg"
              style={{
                position: "relative",
                top: "1.4rem",
                left: "4rem",
              }}
            />
            <Image
              src={"/cover.png"}
              width={530}
              height={487}
              alt="uploadedImg"
              style={{
                position: "relative",
                bottom: "30rem",
              }}
            />
          </Preview>
          <div>
            <div>
              <DetailContent>제목</DetailContent>
              <InputBox readOnly name="title" value={uploadedTitle} />
            </div>
            <div>
              <DetailContent>카테고리</DetailContent>
              <SelectOption
                onChange={inputsHandler}
                category={category}
                name="category"
              >
                <option onClick={selectCategory} value={1}>
                  발라드
                </option>
                <option onClick={selectCategory} value={2}>
                  트로트
                </option>
                <option onClick={selectCategory} value={3}>
                  힙합
                </option>
              </SelectOption>
            </div>
            <div>
              <DetailContent>작곡가</DetailContent>
              <InputBox onChange={inputsHandler} name="composer" />
            </div>
            <div>
              <DetailContent>작사가</DetailContent>
              <InputBox onChange={inputsHandler} name="lyricist" />
            </div>
            <div>
              <DetailContent>가수</DetailContent>
              <InputBox onChange={inputsHandler} name="singer" />
            </div>{" "}
            <div>
              <DetailContent>설명</DetailContent>
              <InputBox onChange={inputsHandler} name="description" />
            </div>
          </div>
        </RegistserForm>

        <RegistserForm>
          <div>
            <DetailContent>발행량</DetailContent>
            <InputBox onChange={inputsHandler} name="nftAmount" />
          </div>

          <div>
            <DetailContent>펀딩 시작 날짜</DetailContent>
            <InputBox
              type="date"
              onChange={inputsHandler}
              name="opendate"
              ref={dateRef}
              date={date}
            />
          </div>
          <div>
            <DetailContent>목표 금액</DetailContent>
            <InputBox onChange={inputsHandler} name="totalBalance" />
          </div>
          <BtnBox>
            <SubmitBtn onClick={shinCancel}>취소하기</SubmitBtn>
            <SubmitBtn onClick={shinFunding}>등록하기</SubmitBtn>
          </BtnBox>
        </RegistserForm>
      </RegisterWrap>

      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const RegisterWrap = styled.div`
  width: 60vw;
  @media ${(props) => props.theme.device.pc},
    ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.moblie} {
    width: 80vw;
  }
`;
const RegistserForm = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  place-items: center;
  @media ${(props) => props.theme.device.pc} {
    ${(props) => props.theme.align.flexCenterColumn}
  }
`;
// 이미지 미리보기
const Preview = styled.div`
  width: inherit;
  height: 35rem;
  overflow-y: hidden;
  margin-left: 3rem;

  @media ${(props) => props.theme.device.pc} {
    margin-left: 10rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: inherit;
    height: 35rem;
    margin-right: 10rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 26rem;
    height: 23rem;
  }
  // 앨범 아트
  > img:first-child {
    @media ${(props) => props.theme.device.pc} {
      left: -4rem;
    }
    @media ${(props) => props.theme.device.mobile} {
      width: 20.2rem;
      height: 20.2rem;
      position: relative;
      top: 2rem;
      left: 2.2rem;
    }
  }
  // CD 케이스 이미지
  > img:last-child {
    @media ${(props) => props.theme.device.mobile} {
      width: 23rem;
      height: 21.8rem;
      position: relative;
      bottom: 0;
      top: -19.8rem;
      left: 2rem;
    }
  }
`;
const SelectOption = styled.select`
  width: 35rem;
  height: 3rem;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  @media ${(props) => props.theme.device.tablet} {
    width: 30rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 20rem;
  }
`;
const InputBox = styled.input`
  width: 35rem;
  height: 3rem;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  @media ${(props) => props.theme.device.tablet} {
    width: 30rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 20rem;
  }
`;
const DetailContent = styled.div`
  margin: 0.5rem 0;
`;
const BtnBox = styled.div`
  width: 35rem;
  display: flex;
  justify-content: space-evenly;
  @media ${(props) => props.theme.device.mobile} {
    width: 20rem;
  }
`;
const SubmitBtn = styled.button`
  cursor: pointer;
  color: black;
  width: 15rem;
  height: 4rem;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  @media ${(props) => props.theme.device.mobile} {
    width: 8rem;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    border: solid 1px white;
    transition: 0.5s;
  }
`;

export default detailForm;
