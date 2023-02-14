import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/Link";
import { FaEthereum } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

const index = () => {
  const [listdata, setListData] = useState([]);
  const [clipAccount, setClipAccount] = useState(false);

  const Dtoken = useSelector((state) => state.user.contracts.Dtoken);
  const Ftoken = useSelector((state) => state.user.contracts.Ftoken);
  const ftokenCA = useSelector((state) => state.user.contracts.ftokenCA);
  const account = useSelector((state) => state.user.contracts.account);

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
    axios({
      url: `http://localhost:3001/creator/mypage/${account}`,
      method: "get",
    })
      .then((res) => {
        const shinList = res.data;
        setListData(shinList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const nickname = useSelector((state) => state.user.users.user_nickname);
  console.log(nickname);
  // 펀딩 성공 시 민팅 신청하는 트랜잭션
  const FundingMinting = async () => {
    const aa = await Dtoken.mintFundding(account, ftokenCA, 1, 10, 10, 2);
    console.log(aa);
    Dtoken.on("seccessFundding", (account, tokenId, amount, totalPrice, getTime, result) => {
      console.log(account);
      console.log(tokenId);
      console.log(amount);
      console.log(totalPrice);
      console.log(getTime);
      console.log(result);
    });
  };

  // 펀딩 성공시 크리에이터가 돈 받는 함수
  const getFundingMoney = async () => {
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
                {listdata.map((data, idx) => (
                  <tr key={idx}>
                    <td>{data.shin_category}</td>
                    <td>{data.shin_title}</td>
                    <td>{data.shin_amount}</td>
                    <td>
                      {data.shin_nft_totalbalance}
                      {"ETH"}
                    </td>
                    <td>{data.shin_period}</td>
                    <td>{data.shin_ispermit == 1 ? "승인대기중" : ""}</td>
                    <td>
                      {data.shin_ispermit == 2 && (
                        <FundingStartBtn onClick={FundingMinting}>펀딩시작트랜잭션</FundingStartBtn>
                      )}
                      {data.shin_ispermit == 3 && (
                        <FundingStartBtn onClick={getFundingMoney}>펀딩성공돈받자</FundingStartBtn>
                      )}
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
  background: plum;
`;

export default index;
