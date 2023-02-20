import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/Link";
// import { FaEthereum } from "react-icons/fa";
import axios from "axios";
import ajyContract from "../../hooks/ajyContract";
import { useWeb3React } from "@web3-react/core";
import { openFunding } from "../../redux/modules/funding";

const index = () => {
  const router = useRouter();
  const btnRef = useRef();
  const dispatch = useDispatch();

  const [listdata, setListData] = useState([]);
  const tokenId = useSelector((state) => state.funding.funding.tokenId);
  const metaData = useSelector((state) => state.funding.funding.metaData);
  const balance = useSelector((state) => state.funding.funding.balance);

  // 컨트랙트 실행 함수 가져오기
  const tokenData = ajyContract();
  const { account } = useWeb3React();
  useEffect(() => {
    if (tokenData != null) {
      console.log(tokenData);
    }
  }, [tokenData]);

  // 들어오자마자 펀딩 신청한 목록 보여주기
  useEffect(() => {
    axios({
      url: `http://localhost:3001/creator/mypage/${account}`,
      method: "get",
    })
      .then((res) => {
        const shinList = res.data;
        setListData(shinList);
      })
      .catch((res) => {
        if (res.response.data == 500) {
          setListData([]);
        } else {
          console.log(res);
        }
      });
  }, []);

  // 펀딩 성공 시 민팅 신청하는 트랜잭션
  const FundingMinting = (id, idxNum) => {
    const amount = listdata[idxNum].shin_amount;
    const totalPrice = listdata[idxNum].shin_nft_totalbalance;
    const getTime = listdata[idxNum].shin_period;
    const ftokenCA = tokenData.ftokenCA;
    dispatch(openFunding(id));
    contractMinting(account, ftokenCA, tokenId, amount, totalPrice, getTime, metaData);
  };
  // 민팅하는 함수
  const contractMinting = (account, ftokenCA, tokenId, amount, totalPrice, getTime, metaData) => {
    tokenData.Dtoken.mintFundding(account, ftokenCA, tokenId, amount, totalPrice, getTime, metaData);
    tokenData.Dtoken.on("seccessFundding", (account, tokenId, amount, totalPrice, getTime, metaData) => {
      console.log(account);
      console.log(tokenId);
      console.log(amount);
      console.log(totalPrice);
      console.log(getTime);
      console.log(metaData);
    });
    try {
      btnRef.current.style = "display : none";
      alert("펀딩 오픈!");
    } catch (error) {
      console.log(error);
    }
  };

  // 펀딩 성공시 크리에이터가 돈 받는 함수
  const getFundingMoney = async (account, tokenId, value) => {
    // console.log(tokenId);
    await tokenData.Ftoken.isSuccessFundding(3);
    await tokenData.Ftoken.on("isSuccessFunddingEvent", (account, tokenId, value) => {
      console.log(account.toString());
      console.log(tokenId.toString());
      console.log(value.toString());
    });
  };
  const refundMoney = async (account, tokenId, value) => {
    await tokenData.Ftoken.isfalsedFundding(account, 3);
    await tokenData.Ftoken.on("isfalsedFunddingEvnet", (account, tokenId, value) => {
      console.log(account.toString());
      console.log(tokenId.toString());
      console.log(value.toString());
    });
  };
  const [result, setresult] = useState(false);

  const checkAmount = async (yy) => {
    // const checkAmt = await tokenData.Ftoken.priceCheck(tokenId);
    // const nowAmt = parseInt(checkAmt);
    console.log(yy);
    const nowAmt = 20;
    // 현재 펀딩된 수량 >= 목표수량
    if (nowAmt > yy) {
      setresult(true);
      btnRef.current.value = "환불";
      refundMoney(account, tokenId, 10);
      alert("환불할게여ㅠ");

      // 백에다 fund_state == 3으로 바뀌는 요청 보내고 응답값을 받아서 새로 목록을 랜더링한다
    } else {
      console.log("실패");
      setresult(false);
      btnRef.current.value = "출금";
      getFundingMoney(account, tokenId, 10);
      alert("출금할게요^0^");

      // 백에다 fund_state == 2으로 바뀌는 요청 보내고 펀딩 실패를 보여준다
    }
  };

  return (
    <MainContainer>
      <div></div>
      <ContentWrap>
        <ContainerBoard>
          <TitleArea>
            <h2>크리에이터 펀딩 테이블</h2>
            <Link href="/creator/register">펀딩 신청</Link>
          </TitleArea>
          <div>
            <div>
              {/* {" "}
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
              )} */}
            </div>
            <Table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>카테고리</th>
                  <th>음원명</th>
                  <th>총 발행량</th>
                  <th>목표금액</th>
                  <th>펀딩기간</th>
                  <th>상태</th>
                  <th>결과</th>
                </tr>
              </thead>
              <tbody>
                {listdata.map((data, idx) => (
                  <tr key={idx}>
                    <td>{data.shin_no}</td>
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
                      {data.shin_ispermit == 2 &&
                      data.funding[0].fund_state !== 1 &&
                      data.funding[0].fund_state !== 2 &&
                      data.funding[0].fund_state !== 3 ? (
                        <FundingStartBtn
                          ref={btnRef}
                          type="submit"
                          onClick={(e) => {
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
                      <FundingStartBtn
                        ref={btnRef}
                        type="submit"
                        value={"결과"}
                        onClick={() => {
                          checkAmount(data.shin_amount);
                        }}
                      ></FundingStartBtn>
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

const FundingStartBtn = styled.input`
  /* color: white;
  background: plum; */
`;

export default index;
