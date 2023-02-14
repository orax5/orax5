import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountDown from "../components/CountDown";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Detail = () => {
  
  const params = useRouter();

  const Dtoken = useSelector((state) => state.user.contracts.Dtoken);
  
  
  const [tokenId, setTokenId] = useState(0);
  const [tokenTime, setTokenTime] = useState(0);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [date, setdate] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);
  const [time, settime] = useState(0);

  useEffect(() => {
    setTokenId(params.query.id);
    endTime();
  },[])

  async function endTime(){
    console.log(tokenId);
    const time = await Dtoken.getVotingDate(parseInt(tokenId));
    const tokenJsTime = parseInt(time)*1000;
    settime(tokenJsTime);
    if(tokenJsTime > Date.now()){
      setTokenTime(tokenJsTime);
      var day = ("0" + new Date(tokenJsTime).getDate()).slice(-2); //일 2자리 (01, 02 ... 31)
      var hour = ("0" + new Date(tokenJsTime).getHours()).slice(-2); //시 2자리 (00, 01 ... 23)
      var minute = ("0" + new Date(tokenJsTime).getMinutes()).slice(-2); //분 2자리 (00, 01 ... 59)
      var second = ("0" + new Date(tokenJsTime).getSeconds()).slice(-2); //초 2자리 (00, 01 ... 59)
      setdate(day);
      sethours(hour);
      setminutes(minute);
      setseconds(second);
    }else if(tokenJsTime < Date.now()){
      setIsTimeOver(true);
    }
  }
  
  const agreement = async () => {
    if(time > Date.now()){
      const balance = await Dtoken.balanceOf(tokenId);
      if(parseInt(balance) == 0){
        alert("토큰 보유자가 아니에요");
      } else{
        await Dtoken.isVoting(tokenId, true);
      }
    } else {
      alert(" 기간이 지났어요.");
    }
  }
  const disagreement = async () => {
    if(time > Date.now()){
      const balance = await Dtoken.balanceOf(tokenId);
      if(parseInt(balance) == 0){
        alert("토큰 보유자가 아니에요");
      } else{
        await Dtoken.isVoting(tokenId, false);
      }
    } else {
      alert(" 기간이 지났어요.");
    }
  }


  // 등록하는 곳에서 선택한 날짜로 불러와야함, 지금은 임의로 두고 작업
  const endDate = new Date("2023-01-30 15:20:10");


  return (
    <MainContainer>
      <div></div>
      <div>
        <ContentWrap>
          <h1>펀딩 기간 늘리기</h1>
          <div>
            {isTimeOver ? (
              <h2>투표기간이 종료되었습니다</h2>
            ) : (
              <Timer isTimeOver={isTimeOver}>
              펀딩기한 :  {date}일 {hours}시간 {minutes}분 {seconds}초 까지
              </Timer>
            )}
          </div>
          <div></div>
          <div>
            <Btn onClick={agreement}>찬성</Btn>
            <Btn onClick={disagreement}>반대</Btn>
          </div>
        </ContentWrap>
      </div>
      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
// 투표 안건 정보 보여주는 부분
const ContentWrap = styled.div`
  ${(props) => props.theme.align.flexStart};
  font-size: 1.5rem;
  // 종료까지~ 알려주는 문구
  > :nth-child(2) {
    margin: 1rem 0;
  }
  // 어떤 내용에 대한 투표인지 설명 있는 창
  > :nth-child(3) {
    width: 80rem;
    height: 10rem;
    padding: 1rem;
    border: 1px solid white;
  }
  > :last-child {
    width: 80rem;
    display: flex;
    justify-content: space-evenly;
  }
`;
// 버튼
const Btn = styled.button`
  margin: 1rem 0;
  ${(props) => props.theme.button.basicBtn};
  width: 30rem;
  height: 4rem;
`;
// 댓글 전체박스
const ReplyWrap = styled.div`
  font-size: 1.5rem;
  margin: 4rem 0;
`;
const WriteReply = styled.div`
  ${(props) => props.theme.align.flexCenter};
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem 0;
  width: 80rem;
  > input {
    width: 70rem;
    height: 4rem;
    font-size: 1.5rem;
    border: 1px solid white;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  > button {
    width: 5rem;
    height: 4rem;
    cursor: pointer;
    font-size: 1.5rem;
    border: 1px solid white;
    border-left: none;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;
const ShowReply = styled.ul`
  width: 80rem;
  > :first-child {
    font-size: 1.8rem;
    font-weight: 900;
    margin: 0.5rem 0;
  }
  > :last-child {
    height: auto;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const Timer = styled.span`
  color: red;
  font-size: 2.2rem;
  font-weight: 800;
`;
export default Detail;
