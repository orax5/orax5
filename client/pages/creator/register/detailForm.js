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

  // 이전 페이지에서 업로드하고 받아온 이미지 주소
  // const returnedUrl = useSelector((state) => state.funding.imgURL);
  const returnedUrl = "img/32323.jpg";

  // 카테고리 숫자로 받음
  const [category, setCategory] = useState(1);
  const selectCategory = (e) => {
    const value = parseInt(e.target.value);
    setCategory(value);
  };

  const [inputs, setInputs] = useState({
    title: "",
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
  const setSendData = { ...inputs, category, creatorCA, returnedUrl };
  console.log(setSendData);
  // 백에 보내는 곳
  const shinFunding = async (setSendData) => {
    try {
      const imageRes = await axios({
        url: "http://localhost:3001/creator/shinchung",
        method: "post",
        data: {
          shin_title: title,
          com_name: composer,
          lyric_name: lyricist,
          sing_name: singer,
          shin_amount: nftAmount,
          shin_nft_totalbalance: totalBalance,
          shin_cover: albumArt,
          shin_opendate: opendate,
          shin_description: description,
          shin_category: category,
          shin_creator_address: creatorCA,
          shin_cover: returnedUrl,
        },
      });
      const imageURL = imageRes.data;
      console.log(imageURL);
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
        <Image
          src="/Img/sample.jpg"
          width={400}
          height={400}
          alt="uploadedImg"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <RegistserForm>
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
              <DetailContent>제목</DetailContent>
              <InputBox onChange={inputsHandler} name="title" />
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
            </div>
          </RegistserForm>
          <RegistserForm>
            <div>
              <DetailContent>설명</DetailContent>
              <InputBox onChange={inputsHandler} name="description" />
            </div>
            <div>
              <DetailContent>발행량</DetailContent>
              <InputBox onChange={inputsHandler} name="nftAmount" />
            </div>
            <div>
              <DetailContent>목표 금액</DetailContent>
              <InputBox onChange={inputsHandler} name="totalBalance" />
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
          </RegistserForm>
        </div>
        <div>
          <SubmitBtn onClick={shinCancel}>취소하기</SubmitBtn>
          <SubmitBtn onClick={shinFunding}>등록하기</SubmitBtn>
        </div>
      </RegisterWrap>

      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const RegisterWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 50rem;
  > div {
    ${(props) => props.theme.align.flexCenter};
  }
  // 버튼 박스
  > div:last-child {
    width: 45rem;
    justify-content: space-evenly;
  }
`;
const RegistserForm = styled.div`
  margin: 2rem;
  > h1 {
    text-align: center;
  }
`;
const SelectOption = styled.select`
  width: 15rem;
  height: 2.5rem;
  border-radius: 0.5rem;
`;
const InputBox = styled.input`
  width: 15rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  border: solid 1px white;
`;

const DetailContent = styled.div`
  margin: 0.3rem 0;
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
  &:hover {
    background-color: black;
    color: white;
    border: solid 1px white;
    transition: 0.5s;
  }
`;
export default detailForm;
