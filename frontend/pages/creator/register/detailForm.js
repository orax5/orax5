import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { shinFunding } from "../../../redux/modules/funding";
import axios from "axios";
import Cookies from 'js-cookie';

const detailForm = () => {
  const token = Cookies.get('jwtToken');
  console.log(token)
  const router = useRouter();
  const dispatch = useDispatch();

  const [shinTitle, setShinTitle] = useState("");
  const [shinCover, setShinCover] = useState("/Img/transparent.png");
  const [shinCreatorCA, setShinCreatorCA] = useState("0x123456789");
  const [shinCategory, setShinCategory] = useState("발라드");

  // 이전 페이지에서 미리 가져올 정보
  // 1. 크리에이터 계정
  const CA = useSelector((state) => state.user.contracts.account);
  // 2. 이전 페이지에서 업로드하고 받아온 이미지, 제목
  const cover = useSelector((state) => state.funding.imgURL);

  // 미리 들어와있어야 하는 데이터, 무한 렌더링 방지
  useEffect(() => {
    setShinCreatorCA(CA);
    setShinCover(cover);
    setShinTitle(cover.substring(shinCover.indexOf(".com/") + 5));

  });

  // 카테고리 숫자로 받음
  const selectCategory = (e) => {
    const value = e.target.value;
    setShinCategory(value);
  };

  // 펀딩 시작일은 오늘 이후부터 선택 가능하게 설정(삭제)
  // --> 펀딩을 며칠 동안 할지 기간을 입력하는걸로 변경
  const [inputs, setInputs] = useState({
    ShinDescription: "",
    composer: "",
    lyricist: "",
    singer: "",
  });
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const [IntInputs, setIntInputs] = useState({
    shinAmount: 0,
    shinTotalBalance: 0,
    shinPeriod: 0,
    shinIsPermit: 1,
  });
  const intInputsHandler = (e) => {
    const value = parseInt(e.target.value);
    const name = e.target.name;
    setIntInputs({ ...IntInputs, [name]: value });
    // console.log({ ...IntInputs });
  };

  // 숫자 음수 입력 방지
  // const numRef = useRef();
  // numRef.onkeydown = function (e) {
  //   if (!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || e.keyCode == 8)) {
  //     return false;
  //   }
  // };

  const data = { ...inputs, ...IntInputs, shinTitle, shinCategory, shinCreatorCA, shinCover };
  // console.log(data);

  // 백에 보내는 곳
  const shinFunding = (data) => {
    axios({
      url: "http://localhost:3001/creator/shinchung",
      method: "post",
      headers:{
        Authorization: `Bearer ${token}`,
      },
      data: {
        shin_title: data.shinTitle,
        shin_amount: data.shinAmount,
        shin_nft_totalbalance: data.shinTotalBalance,
        shin_cover: data.shinCover,
        shin_period: data.shinPeriod,
        shin_description: data.ShinDescription,
        shin_category: data.shinCategory,
        shin_creator_address: data.shinCreatorCA,
        shin_ispermit: 1,
        com_name: data.composer,
        lyric_name: data.lyricist,
        sing_name: data.singer,
      },
    })
      .then((res) => {
        console.log(res);
        const imageURL = res.data;
        console.log(imageURL);
        router.push("/creator");
      })
      .catch((err) => {
        console.log(err);
      });
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
          {/* 이미지 미리보기 삭제 */}
          <div>
            <div>
              <DetailContent>제목</DetailContent>
              <InputBox readOnly name="shinTitle" value={shinTitle} />
            </div>
            <div>
              <DetailContent>카테고리</DetailContent>
              <SelectOption onChange={selectCategory} name="shinCategory">
                <option value={"발라드"}>발라드</option>
                <option value={"트로트"}>트로트</option>
                <option value={"힙합"}>힙합</option>
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
            </div>
            <div>
              <DetailContent>설명</DetailContent>
              <InputBox onChange={inputsHandler} name="ShinDescription" />
            </div>
          </div>
        </RegistserForm>

        <RegistserForm>
          <div>
            <DetailContent>발행량</DetailContent>
            <InputBox onChange={intInputsHandler} name="shinAmount" type="number" min="10" max="200" />
            {"개"}
          </div>

          <div>
            <DetailContent>펀딩 진행 기간</DetailContent>
            <InputBox onChange={intInputsHandler} name="shinPeriod" type="number" min="1" max="100" />
            {"일간"}
          </div>
          <div>
            <DetailContent>목표 금액</DetailContent>
            <InputBox onChange={intInputsHandler} name="shinTotalBalance" type="number" min="1" />
            {"ETH"}
          </div>
          <BtnBox>
            <SubmitBtn onClick={shinCancel}>취소하기</SubmitBtn>
            <SubmitBtn
              onClick={() => {
                dispatch(shinFunding(data, router));
              }}
            >
              등록하기
            </SubmitBtn>
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
  ${(props) => props.theme.align.flexCenterColumn}
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
