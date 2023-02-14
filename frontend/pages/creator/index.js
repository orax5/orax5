import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/Link";
import { FaEthereum } from "react-icons/fa";
import { useSelector } from "react-redux";

const index = () => {
  const datas = [
    {
      id : 1,name: "사진스힙합",
      category: "힙합",
      scale: "0.123",
      targetPrice: "1000",
      amount: "100개",
      state: "반려",
      dating: "14일",
    },
    {
      id : 2,name: "나진스댄스",
      category: "댄스",
      scale: "0.456",
      targetPrice: "1000",
      state: "펀딩진행중",
      dating: "7일",
      amount: "100개",
    },
    {
      id : 3,name: "다진스RnB",
      category: "RnB",
      scale: "0.789",
      targetPrice: "1000",
      state: "펀딩실패",
      dating: "7일",
      amount: "100개",
    },
    {
      id : 4,name: "라진스발라드",
      category: "발라드",
      scale: "1.24",
      state: "펀딩진행중",
      dating: "14일",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      id : 5,name: "마진스팝",
      category: "팝",
      scale: "2.24",
      state: "심사대기중",
      dating: "7일",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      id : 6,
      name: "뉴진스락",
      category: "락",
      scale: "4.44",
      fundingState:3,
      state: "펀딩성공",
      dating: "14일",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      id : 7,name: "큐락비락",
      category: "락",
      scale: "1.44",
      state: "펀딩진행중",
      dating: "7일",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      id : 8,name: "블락비댄스",
      category: "댄스",
      scale: "2.44",
      admin: 2,
      state: "펀딩시작",
      dating: "7일",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      id : 9,name: "비락비발라드",
      category: "발라드",
      scale: "10.44",
      state: "펀딩진행중",
      dating: "7일",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      id : 10,name: "블락비힙합",
      category: "힙합",
      scale: "0.44",
      state: "펀딩실패",
      dating: "7일",
      targetPrice: "1000",
      amount: "100개",
    },
  ];

  const fund = [{id : 1, state : 1},{id :3, state : 1},{id :4, state : 1},{id : 9, state : 1},]

  const [clipAccount, setClipAccount] = useState(false);
  // 보여줄 페이지의 인덱스
  const [index, setIndex] = useState(0);

  const Dtoken = useSelector((state) => state.user.contracts.Dtoken);
  const Ftoken = useSelector((state) => state.user.contracts.Ftoken);
  const ftokenCA = useSelector((state) => state.user.contracts.ftokenCA);
  const account = useSelector((state) => state.user.users.user_wallet);

  // 클립보트 핸들러
  const copyClipBoardHandler = async (text) => {
    setClipAccount(true);
    setTimeout(() => {
      setClipAccount(false);
    }, 2000);
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {}
  };

  useEffect(() => {}, []);

  const nickname = useSelector((state) => state.user.users.user_nickname);
  console.log(nickname);
  // 펀딩 성공 시 민팅 신청하는 트랜잭션
  const FundingMinting = async() =>{
    const metaData = "metadataUrl"
    const aa = await Dtoken.mintFundding(account,ftokenCA,1,10,10,5,metaData);
    console.log(aa);
    Dtoken.on("seccessFundding", (account,tokenId,amount,totalPrice,getTime,metaData)  => {
      console.log(account);
      console.log(tokenId);
      console.log(amount);
      console.log(totalPrice);
      console.log(getTime);
      console.log(metaData);
    })
  }


  // 펀딩 성공시 크리에이터가 돈 받는 함수
  const getFundingMoney = async() => {
    await Ftoken.isSuccessFundding(1);
    Ftoken.on("isSuccessFunddingEvent", (account, tokenId, value) => {
      console.log(account.toString());
      console.log(tokenId.toString());
      console.log(value.toString());
    });
  };

  return (
    <MainContainer>
      <div></div>
      <ContentWrap>
        <ContainerBoard>
          <TitleArea>
            <h2>
              환영합니다!
              <br />
              {nickname} 님
            </h2>
            <Link href="/creator/register">펀딩 신청</Link>
          </TitleArea>
          <div>
            <div>
              {" "}
              {clipAccount == true ? (
                <CreatorAddress>
                  <FaEthereum />
                  Copied!
                </CreatorAddress>
              ) : (
                <CreatorAddress onClick={() => copyClipBoardHandler(account)}>
                  <FaEthereum />
                  &nbsp;
                  {account}
                </CreatorAddress>
              )}
            </div>
            <Table>
              <thead>
                <tr>
                  <th>카테고리</th>
                  <th>음원명</th>
                  <th>총 발행량</th>
                  <th>목표금액</th>
                  <th>펀딩기간</th>
                  <th>상태</th>
                  <th>현재상태</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, idx) => (
                  <tr key={idx}>
                    <td>{data.category}</td>
                    <td>{data.name}</td>
                    <td>{data.amount}</td>
                    <td>{data.targetPrice}{"ETH"}</td>
                    <td>{data.dating}</td>
                    <td>
                      {data.state} 
                    </td>
                    <td>
                      {data.admin == 2 && <FundingStartBtn onClick={FundingMinting}>펀딩시작트랜잭션</FundingStartBtn>}
                      {data.fundingState == 3 && <FundingStartBtn onClick={getFundingMoney}>펀딩성공돈받자</FundingStartBtn>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </ContainerBoard>
      </ContentWrap>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
  place-items: flex-start;
`;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
`;
const ContainerBoard = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
`;
const TitleArea = styled.div`
  ${(props) => props.theme.align.flexBetween};
  font-size: 1.8rem;
  @media ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
    align-items: start;
  }
  > :first-child {
    @media ${(props) => props.theme.device.tablet} {
      font-size: 1.5rem;
    }
  }
  > :last-child {
    ${(props) => props.theme.align.flexCenter};
    cursor: pointer;
    color: black;
    width: 23.8rem;
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
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  & thead {
    border-bottom: 2px solid #e3e6f0;
  }
  & th {
    padding: 0.75rem;
    font-size: larger;
    font-weight: 500;
  }
  & td {
    padding: 0.75rem;
  }
`;
const CreatorAddress = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const FundingStartBtn = styled.button`
  color: white;
  background:plum;
`


export default index;
