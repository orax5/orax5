import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ajyContract from "../../hooks/ajyContract";

const RegisterVote = ({setModalOpen, modalOpen, submit}) => {
  const tokenData = ajyContract();

  useEffect(()=>{
    if(tokenData != null){
      
   }
  },[tokenData])

  // 토큰 id 담기
  const [tokenInput, setTokenInput] = useState(0);
  // 펀딩 기간 조정한 거 담기
  const [changeDay, setChangeDay] = useState(0);
  // 거버넌스 투표기간 담기
  const [endDate, setEndDate] = useState(0);

  // 거버넌스 투표 기간 보여주는 함수
  const pickedDateHandler = (e) => {
    const endTime = new Date(e.target.value).getTime();
    const endDate = (endTime - new Date().getTime()) / 86400000;
    const getDate = Math.ceil(endDate);
    setEndDate(getDate);
    console.log(getDate);
  };

  // 안건 투표 기간 정하는 함수
  const getTiem = (e) => {
    setChangeDay(e.target.value);
  };

  // 어떤 음원 Id 거버넌스 할 건지 
  const getTokenId = (e) => {
    setTokenInput(e.target.value);
  }

  const Registration = async() => {
    const DtokenBalance = await tokenData.Dtoken.getTokenOwnerData(tokenInput);
    const FtokenBalance = await tokenData.Ftoken.priceCheck(tokenInput);

    const average = parseInt(DtokenBalance.NftAmount) / 2;
    // 초기 발행량과 현재 펀딩된 물량을 비교해서 절반을 넘겨야지 거버넌스 투표 신청이 된다.
    if(average < FtokenBalance){
      submit(parseInt(tokenInput), parseInt(endDate), parseInt(changeDay));
    }else{
      alert("펀딩 진행률 50퍼 넘었는지 확인하라능!");
    }
    submit(parseInt(tokenInput), parseInt(endDate), parseInt(changeDay));

    // console.log(modalOpen); 
    // setModalOpen(!modalOpen);
  }

  return (
    <RegisterWrap>
      <ContentWrap>
        <label>신청할 NFT ID</label>
        <input type="number" onChange={getTokenId}/>
        <label>투표 기간</label>
        <input type="date" onChange={pickedDateHandler} />
        <label>투표 안건</label>
        <select>
          <option>펀딩 기간 늘리기</option>
        </select>
        <label>요청 기간</label>
        <input type="number" onChange={getTiem} />
        <button onClick={Registration}>등록</button>
      </ContentWrap>
    </RegisterWrap>
  );
};
// 전체 div
const RegisterWrap = styled.div`
  width: 35rem;
  height: 40rem;
  font-size: 1.5rem;
  border: 1px solid white;
  border-radius: 1rem;
  background-color: black;
  position: absolute;
  @media ${(props) => props.theme.device.mobile} {
    width: 25rem;
  }
`;
// 내용 div
const ContentWrap = styled.div`
  ${(props) => props.theme.align.flexStart};
  width: 31rem;
  padding: 2rem;
  > label {
    font-size: 2rem;
    font-weight: 800;
  }
  > input,
  select {
    width: inherit;
    height: 3rem;
    font-size: 1.3rem;
    border: 1px solid white;
    margin: 0.5rem 0 1.2rem 0;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
  > textarea {
    width: inherit;
    height: 6rem;
    resize: none;
    border: 1px solid white;
    font-size: 1.3rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
  & button {
    ${(props) => props.theme.button.basicBtn};
    width: inherit;
    text-align: center;
    margin-top: 1.2rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
`;
export default RegisterVote;