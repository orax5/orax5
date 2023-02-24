import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaEthereum } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import ajyContract from "../../hooks/ajyContract";
import { useWallet } from "../../hooks/useWallet";
import Loading from "../components/Loading";
const BASE_URL = "http://ec2-3-34-107-237.ap-northeast-2.compute.amazonaws.com:3001";

const index = () => {
  const tokenData = ajyContract();
  const info = useWallet();
  const router = useRouter();

  const [listdata, setListData] = useState([]);
  const [account, setAccount] = useState("");
  const [permitted, setPermitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    setAccount(info.account);
  }, [tokenData]);

  const token = Cookies.get("jwtToken");

  const fff = async () => {
    await axios({
      url: `${BASE_URL}/admin/mypage`,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("res.data : ", res.data);
        setListData(res.data);
        return;
      })
      .catch((res) => {
        if (res.response.data == 500) {
          setListData([]);
        } else {
          console.log(res);
        }
      });
  };

  useEffect(() => {
    const a = fff();
    console.log(a);
  }, [tokenData]);

  useEffect(() => {
    console.log(listdata);
  }, [listdata]);

  useEffect(() => {
    axios({
      url: `${BASE_URL}/admin/mypage`,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const isPermitted = (id, router) => {
    setLoading(true);
    setFinish(false);
    try {
      axios({
        url: `${BASE_URL}/admin/mypage/permit/${id}`,
        method: "post",
        data: { fundingID: id },
      })
        .then((res) => {
          console.log(res);
          setFinish(true);
          setLoading(false);
          alert("승인완료!");
          fff();
        })
        .catch((err) => {
          console.log(err);
          console.log("#$#$");
        });
      } catch (error) {
        console.log(error);
        console.log("#$#$");
    }
  };

  const isRejected = (id, router) => {
    axios({
      url: `${BASE_URL}/admin/mypage/reject/${id}`,
      method: "post",
      data: { fundingID: id },
    })
      .then((res) => {
        console.log(res);
        setPermitted(false);
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer>
      <div></div>
      <ContentWrap>
        <ContainerBoard>
          <TitleArea>
            <h2>펀딩 승인 테이블</h2>
          </TitleArea>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <div>
                <CreatorAddress>
                  <FaEthereum />
                  &nbsp;
                  {account}
                </CreatorAddress>
              </div>

              <Table>
                <thead>
                  <tr>
                    <th>카테고리</th>
                    <th>음원명</th>
                    <th>총 발행량</th>
                    <th>목표금액</th>
                    <th>펀딩기간</th>
                    <th>승인</th>
                    <th>처리</th>
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
                      <td>
                        {data.shin_ispermit == 1 && (
                          <button
                            onClick={(e) => {
                              isPermitted(data.shin_no);
                            }}
                          >
                            승인
                          </button>
                        )}
                      </td>
                      <td>
                        {/* 이거 아이디 일치하는 값만 바뀌게 수정해줘야됨 지금은 모든 버튼이 다 변경됨 */}
                        {permitted ? (
                          <button
                            onClick={(e) => {
                              createMeta(data.shin_no);
                            }}
                          >
                            메타데이터 생성
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              isRejected(data.shin_no);
                            }}
                          >
                            반려
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
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
    font-size: 1.5rem;
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
      font-size: 0.9rem;
    }
    @media ${(props) => props.theme.device.mobile} {
      padding: 0.2rem 0;
      font-size: 0.7rem;
    }
  }
  & td {
    padding: 0.75rem;
    @media ${(props) => props.theme.device.mobile} {
      padding: 0.2rem 0;
      font-size: 0.7rem;
    }
  }
`;
const CreatorAddress = styled.div`
  color: red;
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const FundingStartBtn = styled.button`
  color: white;
`;

export default index;
