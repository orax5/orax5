import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/Link";
// import { FaEthereum } from "react-icons/fa";
import { useDispatch } from "react-redux";
import axios from "axios";
import useContract from "../../hooks/useContract";
import { useWallet } from "../../hooks/useWallet";

const index = () => {
  const tokenData = useContract();
  const info = useWallet();

  useEffect(() => {
    console.log(tokenData);
    console.log(info);
  }, [tokenData]);

  const account = info.account;
  const chainId = info.chainId;

  useEffect(() => {
    // 크리에이터 마이페이지 접속하자마자 신청했던 목록 불러옴
    if (!account) {
      console.log("지갑을 연결하세요");
    } else {
      axios({
        url: `http://localhost:3001/creator/mypage/${account}`,
        method: "get",
      })
        .then((res) => {
          const shinList = res.data;
          console.log(shinList);
          setListData(shinList);
        })
        .catch((res) => {
          console.log(res);
          if (res.response.data == 500) {
            setListData([]);
          }
        });
    }
  }, []);
  const dispatch = useDispatch();
  const router = useRouter();
  const btnRef = useRef();

  const [listdata, setListData] = useState([]);
  const [clipAccount, setClipAccount] = useState(false);
  const [shinNo, setShinNo] = useState(0);
  const [idxNum, setIdxNum] = useState(0);
  const [FundState, setFundState] = useState(0);

  // 펀딩 성공 시 민팅 신청하는 트랜잭션
  const FundingMinting = async (id, idxNum) => {
    // 민팅 시 컨트랙트에 보낼 정보 idxNum을 이용해서 꺼낸다
    const amount = listdata[idxNum].shin_amount;
    const totalPrice = listdata[idxNum].shin_nft_totalbalance;
    const getTime = listdata[idxNum].shin_period;
    const tokenId = listdata[idxNum].shin_no;
    const metaData = "metadataUrl";
    // 크리에이터가 <펀딩시작> 누르면 민팅이 일어난다
    await Dtoken.mintFundding(account, ftokenCA, tokenId, amount, totalPrice, getTime, metaData);
    Dtoken.on("seccessFundding", (account, tokenId, amount, totalPrice, getTime, metaData) => {
      console.log(account);
      console.log(tokenId);
      console.log(amount);
      console.log(totalPrice);
      console.log(getTime);
      console.log(metaData);
    });
    // 민팅 함수 실행이 끝난 후, 피나타에 올리는 요청을 보내는 함수를 실행한다
    await axios({
      url: `http://localhost:3001/openfunding/${id}`,
      method: "post",
      data: { shinId: id },
    })
      .then((res) => {
        console.log(res);
        const FundState = res.data.fundingState;
        if (FundState == 2) {
          console.log("펀딩 테이블에 2로 들어갔다");
          // setIsOpened(true);
          btnRef.current.disabled = true;
          btnRef.current.style = "display : none";
          // router.reload(); // 새로고침
        } else if (FundState == 1) {
          console.log("펀딩 테이블에 1로 들어갔다");
          // setIsOpened(true);
          // router.reload(); // 새로고침
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 펀딩 성공시 크리에이터가 돈 받는 함수
  const getFundingMoney = async (tokenId) => {
    await Ftoken.isSuccessFundding(tokenId);
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
              {/* {nickname} 님 */}
            </h2>
            <Link href="/creator/register">펀딩 신청</Link>
          </TitleArea>
          <div>
            {/* <div>
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
            </div> */}
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
              {/* <tbody>
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
                    <td>
                      {data.shin_ispermit == 1 ? "승인대기중" : ""}
                      {data.shin_ispermit == 2 && FundState == 0 ? (
                        <FundingStartBtn
                          ref={btnRef}
                          onClick={(e) => {
                            setIdxNum(idx);
                            FundingMinting(data.shin_no, idx);
                          }}
                        >
                          펀딩 시작하기
                        </FundingStartBtn>
                      ) : (
                        ""
                      )}
                      {data.shin_ispermit == 3 ? "승인 반려" : ""}
                    </td>

                    <td>
                      {FundState == 1 && data.shin_ispermit == 2 ? "펀딩 진행 중" : ""}
                      {FundState == 2 ? "실패했는디" : ""}
                      {FundState == 3 ? (
                        <FundingStartBtn
                          ref={btnRef}
                          onClick={(e) => {
                            setIdxNum(idx);
                            getFundingMoney(data.shin_no);
                          }}
                        >
                          모금액 출금하기
                        </FundingStartBtn>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody> */}
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
  @media ${(props) => props.theme.device.tablet}, ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
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
    @media ${(props) => props.theme.device.tablet} {
      width: 10rem;
      height: 3rem;
    }
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
    font-weight: 500;
    font-size: 1.2rem;
    @media ${(props) => props.theme.device.tablet} {
      font-size: 1rem;
    }
    @media ${(props) => props.theme.device.mobile} {
      font-size: 0.7rem;
    }
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
  /* color: white;
  background: plum; */
`;

export default index;
