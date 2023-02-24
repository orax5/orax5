import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountDown from "../components/CountDown";
import { useRouter } from "next/router";
import ajyContract from "../../hooks/ajyContract";

const Detail = () => {
  
  const params = useRouter();

  const tokenData = ajyContract();

  // 토큰 ID
  const [tokenId, setTokenId] = useState(0);
  // 거버넌스 투표 기간
  const [tokenTime, setTokenTime] = useState(0);
  // 기간 지났는지 체크
  const [isTimeOver, setIsTimeOver] = useState(false);
  // 시간 변환
  const [date, setdate] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  // 거버넌스 마감 시간
  const [governanceTime, setTime] = useState(0);
  // 현재 투표된 수
  const [count,setCount] = useState(0);
  // 찬성
  const [agree,setAgree] = useState(0);
  // 반대
  const [disagree,setDisagree] = useState(0);
  // 총 발행량
  const [totalBalance,setTotalBalance] = useState(0);
  // 현재 발행량
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if(tokenData != null){
      setTokenId(params.query.id);
      endTime();
      votingCountView(parseInt(params.query.id));
    }
  },[tokenData])

  // 마감 시간 보여주는 함수
  async function endTime(){
    console.log(params.query.id);
    const time = await tokenData.Dtoken.getVotingDate(parseInt(params.query.id));
    const tokenJsTime = parseInt(time.time)*1000;
    setTime(tokenJsTime);
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
  
  // 찬성
  const agreement = async () => {
    if(governanceTime > Date.now()){
      const balance = await tokenData.Dtoken.tbalanceOf(parseInt(tokenId));
      if(parseInt(balance) == 0){
        alert("토큰 보유자가 아니에요");
      } else{
        await tokenData.Dtoken.isVoting(parseInt(tokenId), true);
        votingCountView(tokenId,1);
      }
    } else {
      alert(" 기간이 지났어요.");
    }
  }

  // 반대
  const disagreement = async () => {
    if(governanceTime > Date.now()){
      const balance = await tokenData.Dtoken.tbalanceOf(parseInt(tokenId));
      if(parseInt(balance) == 0){
        alert("토큰 보유자가 아니에요");
      } else{
        await tokenData.Dtoken.isVoting(parseInt(tokenId), false);
        votingCountView(tokenId,2);
      }
    } else {
      alert(" 기간이 지났어요.");
    }
  }

  // 현재 투표들 전체 보여주는 함수
  async function votingCountView(tokenId, go){
    // 현재까지 투표수 가져오기
    const votingNum = await tokenData.Dtoken.getVotingCount(tokenId);
    // 충 발행량 가져오기
    const totalBalance = await tokenData.Dtoken.getTokenOwnerData(tokenId);
    setTotalBalance(parseInt(totalBalance.NftAmount));
    // 현재까지 펀딩된 수 가져오기
    const presentBalance = await tokenData.Ftoken.priceCheck(tokenId);
    setBalance(parseInt(presentBalance));

    let agree1 = 0;
    let disagree1 = 0;

    for(let i = 1; i <= parseInt(votingNum); i++){
      const voting =  await tokenData.Dtoken.getVoting(tokenId,i);
      if(voting.result == true){
        agree1 = agree1+ parseInt(voting.Amount);
      } else if(voting.result == false){
        disagree1 = disagree1 + parseInt(voting.Amount);
      }
    }

    if(go == 1){
      if(agree1 == agree){
        setTimeout(() => {
          console.log("찬성 투표 하는중");
          votingCountView(tokenId,1);
        }, 3000);
      }
    }
    if(go == 2){
      if(disagree1 == disagree){
        setTimeout(() => {
          votingCountView(tokenId,2);
          console.log("반대 투표 하는중");
        }, 3000);
      }
    }
    setAgree(agree1);
    setDisagree(disagree1);
  }


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
              투표기한 :  {date}일 {hours}시간 {minutes}분 {seconds}초 까지
              </Timer>
            )}
          </div>
          <div>
            <div>발행량 : {totalBalance}</div>
            <div>현재 펀딩량 : {balance}</div>
            <div>찬성 : {agree}</div>
            <div>반대 : {disagree}</div>
          </div>
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