import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/Link";
import { FaEthereum } from "react-icons/fa";
import { useSelector } from "react-redux";


const index = () => {
  const datas = [
    {
      name: "사진스힙합",
      category: "힙합",
      scale: "0.123",
      date: "23.01.12",
      targetPrice: "1000",
      amount: "100개",
      state: "실패",
    },
    {
      name: "나진스댄스",
      category: "댄스",
      scale: "0.456",
      date: "22.12.13",
      targetPrice: "1000",
      state: "진행 중",
      amount: "100개",
    },
    {
      name: "다진스RnB",
      category: "RnB",
      scale: "0.789",
      date: "19.12.31",
      targetPrice: "1000",
      state: "실패",
      amount: "100개",
    },
    {
      name: "라진스발라드",
      category: "발라드",
      scale: "1.24",
      state: "진행 중",
      date: "03.05.07",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      name: "마진스팝",
      category: "팝",
      scale: "2.24",
      state: "진행 중",
      date: "18.04.02",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      name: "뉴진스락",
      category: "락",
      scale: "4.44",
      state: "완료",
      date: "21.05.07",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      name: "큐락비락",
      category: "락",
      scale: "1.44",
      state: "진행 중",
      date: "21.12.07",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      name: "블락비댄스",
      category: "댄스",
      scale: "2.44",
      state: "완료",
      date: "21.01.07",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      name: "비락비발라드",
      category: "발라드",
      scale: "10.44",
      state: "진행 중",
      date: "22.06.07",
      targetPrice: "1000",
      amount: "100개",
    },
    {
      name: "블락비힙합",
      category: "힙합",
      scale: "0.44",
      state: "실패",
      date: "21.07.07",
      targetPrice: "1000",
      amount: "100개",
    },
  ];

  const [clipAccount, setClipAccount] = useState(false);
  // 보여줄 페이지의 인덱스
  const [index, setIndex] = useState(0);
  
  const Dtoken = useSelector((state) => state.user.contracts.Dtoken);
  const Ftoken = useSelector((state) => state.user.contracts.Ftoken);
  const ftokenCA = useSelector((state)=>state.user.contracts.ftokenCA);
  const account = useSelector((state)=>state.user.users.user_wallet);

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

  useEffect(() => {
    
  },[])

  
  // 펀딩 신청
  const asd = async() =>{
    const aa = await Dtoken.mintFundding(account,ftokenCA,1,10,10,2);
    console.log(aa);
    Dtoken.on("seccessFundding", (account,tokenId,amount,totalPrice,getTime,result)  => {
      console.log(account);
      console.log(tokenId);
      console.log(amount);
      console.log(totalPrice);
      console.log(getTime);
      console.log(result);
    })
  }

  // nft 갯수 확인 ? 해야함? 크리에이터가? 유저는 확인해서 myPageNFT 현황보여줘야하는데
  const qwe = async() => {
    const bb = await Dtoken.balanceOf(account,1);
    console.log(bb.toString());
  }

  // 펀딩 성공시 크리에이터가 돈 받는 함수
  const bvbvbvb = async() => {
    await Ftoken.isSuccessFundding(1);
    Ftoken.on("isSuccessFunddingEvent",(account, tokenId, value) => {
      console.log(account.toString());
      console.log(tokenId.toString());
      console.log(value.toString());
    })
  }

  // 펀딩 실패시 유저가 환불하는 함수
  const zxc = async() => {
    await Ftoken.isfalsedFundding(account,1);
    Ftoken.on("isfalsedFunddingEvnet",(account, tokenId, value) => {
      console.log(account.toString());
      console.log(tokenId.toString());
      console.log(value.toString());
    })
  }

  return (
    <MainContainer>
      <div></div>
      <ContentWrap>
        <ContainerBoard>
          <TitleArea>
            <h1>
              환영합니다!
              <br />
              크리에이터 OOO님
            </h1>
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
                  <th>기간</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, idx) => (
                  <tr key={idx}>
                    <td>{data.category}</td>
                    <td>{data.name}</td>
                    <td onClick={zxc}>{data.amount}</td>
                    <td onClick={bvbvbvb}>{data.targetPrice}{"ETH"}</td>
                    <td onClick={qwe}>
                      {data.date}                      
                    </td>
                    <td onClick={asd}>{data.state}</td>
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
export default index;