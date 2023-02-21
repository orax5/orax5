import { ethers } from "ethers";
import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ajyContract from "../../hooks/ajyContract";

const buyticket = () => {
  const tokenData = ajyContract();

  useEffect(()=>{
  },[tokenData])

  const buyOneMonthTicket = async () => {
    const buyTrigger = await tokenData.Ftoken.subscriptionBuy({
      value: ethers.utils.parseEther("0.5"),
    });
    await buyTrigger.wait();
    alert("1개월권 구매되었습니다.")
  };
  const buyThreeMonthTicket = async () => {
    const buyTrigger = await tokenData.Ftoken.subscriptionBuy({
      value: ethers.utils.parseEther("1.0"),
    });
    await buyTrigger.wait();
    alert("3개월권 구매되었습니다.")
  };
  const buySixMonthTicket = async () => {
    const buyTrigger = await tokenData.Ftoken.subscriptionBuy({
      value: ethers.utils.parseEther("2.0"),
    });
    await buyTrigger.wait();
    alert("6개월권 구매되었습니다.")
  };

  return (
    <MainContainer>
      <div></div>

      <div>
        <h1 style={{ textAlign: "center" }}>이용권 구매</h1> <br />
        <p style={{ textAlign: "center" }}>
          휴대폰, 스피커 및 기타 디바이스에서 제한 없이 마음껏 들으세요.
        </p>
        <br />
        <StreamingPlanContainer>
          <StreamingPlan>
            <StreamingPlanPadding>
              <div>
                <h3>1개월</h3>
                <br />
                <p>0.5ETH</p> <br />
                <hr style={{ border: "solid 1px white" }} />
                <br />
                <ul>
                  <li>🜸 무광고로 음악 감상하기</li>
                  <li>🜸 나만의 플레이리스트</li>
                  <li>🜸 여러 디바이스에서 감상</li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div>
                <StartBtn onClick={buyOneMonthTicket}>시작하기</StartBtn>
                <TermsOfUse>이용 약관이 적용됩니다.</TermsOfUse>
              </div>
            </StreamingPlanPadding>
          </StreamingPlan>
          <StreamingPlan>
            <StreamingPlanPadding>
              <div>
                <h3>3개월</h3>
                <br />
                <p>1ETH</p> <br />
                <hr style={{ border: "solid 1px white" }} />
                <br />
                <ul>
                  <li>🜸 무광고로 음악 감상하기</li>
                  <li>🜸 나만의 플레이리스트</li>
                  <li>🜸 여러 디바이스에서 감상</li>
                  <li>🜸 기존가보다 조금 더 할인</li>
                </ul>
              </div>
              <div>
                <StartBtn onClick={buyThreeMonthTicket}>시작하기</StartBtn>
                <TermsOfUse>이용 약관이 적용됩니다.</TermsOfUse>
              </div>
            </StreamingPlanPadding>
          </StreamingPlan>
          <StreamingPlan>
            <StreamingPlanPadding>
              <div>
                <h3>6개월</h3>
                <br />
                <p>2ETH</p> <br />
                <hr style={{ border: "solid 1px white" }} />
                <br />
                <ul>
                  <li>🜸 무광고로 음악 감상하기</li>
                  <li>🜸 나만의 플레이리스트</li>
                  <li>🜸 여러 디바이스에서 감상</li>
                  <li>🜸 기존가보다 더 많이 할인</li>
                </ul>
              </div>
              <div>
                <StartBtn onClick={buySixMonthTicket}>시작하기</StartBtn>
                <TermsOfUse>이용 약관이 적용됩니다.</TermsOfUse>
              </div>
            </StreamingPlanPadding>
          </StreamingPlan>
        </StreamingPlanContainer>
      </div>

      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;

const StreamingPlan = styled.div`
  width: 25rem;
  height: 40rem;
  border: 1px solid white;
  border-radius: 0.75rem;
  margin: 1rem;
`;

const StreamingPlanContainer = styled.div`
  display: flex;
`;

const StreamingPlanPadding = styled.div`
  padding: 0.75rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & li {
    font-size: x-large;
  }
`;

const StartBtn = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  padding: 0.7rem;
  &:hover {
    color: black;
    background-color: white;
    transition: 0.5s;
  }
`;

const TermsOfUse = styled.p`
  color: gray;
  padding-top: 0.3rem;
`;
export default buyticket;
