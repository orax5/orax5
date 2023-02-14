import React, { useState, useEffect } from "react";
import styled from "styled-components";
// 아이콘
import SwapVertIcon from "@mui/icons-material/SwapVert";

const TransactionDetails = () => {
  // 검색필터
  const [userInput, setUserInput] = useState("");
  console.log(userInput);
  // 입력값을 가져와서 소문자로변경
  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const datas = [
    {
      executionTime: "23.01.16.14:39",
      nftName: "bell",
      trade: "매수",
      tradeAmount: "12.05",
      unitCost: "0.95",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
    {
      executionTime: "23.02.15.14:40",
      nftName: "bell",
      trade: "매수",
      tradeAmount: "12.05",
      unitCost: "0.95",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
    {
      executionTime: "23.03.13.14:09",
      nftName: "choi",
      trade: "매수",
      tradeAmount: "12.05",
      unitCost: "0.95",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
    {
      executionTime: "23.04.01.04:11",
      nftName: "mi",
      trade: "매수",
      tradeAmount: "12.05",
      unitCost: "0.95",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
    {
      executionTime: "23.09.25.11:32",
      nftName: "bell",
      trade: "매수",
      tradeAmount: "12.05",
      unitCost: "0.95",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
  ];

  // // 정렬
  // const [nameSort, setNameSort] = useState(datas);
  // // 정렬 핸들러
  // const sortNameHandler = () => {
  //     const _nameSort = [...nameSort].sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
  //     setNameSort(_nameSort);
  // }
  // // 필터
  // const searched = nameSort.filter((data)=>
  //     data.name.toLowerCase().includes(userInput)
  // )

  return (
    <FlexWrap>
      <ContainerBoard>
        <div>
          <div style={{ padding: "1rem" }}>1개월⠂거래전체</div>
          <Row>
            <div>
              <label htmlFor="">
                {"Show "}
                <select name="" id="">
                  <option value="">10</option>
                  <option value="">25</option>
                  <option value="">50</option>
                  <option value="">100</option>
                </select>{" "}
                {"entries"}
              </label>
            </div>
            <div>
              <label htmlFor="">{"Search:"}</label>
              <input type="text" placeholder="Search" onChange={getValue} />
            </div>
          </Row>
        </div>
        <div>
          <Table style={{ display: "table", width: "100%" }}>
            <thead>
              <tr>
                <th
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>체결시간</div>
                  <div>
                    <button onClick={"sortNameHandler"}>
                      <SwapVertIcon />
                    </button>
                  </div>
                </th>
                <th>NFT명</th>
                <th>종류(매수,매도)</th>
                <th>거래수량</th>
                <th>거래단가</th>
                <th>거래금액</th>
                <th>수수료</th>
                <th>정산금액</th>
                <th>주문시간</th>
              </tr>
            </thead>
            <tbody>
              {}
              {datas.map((data, idx) => (
                <tr key={idx}>
                  <td>{data.executionTime}</td>
                  <td>{data.nftName}</td>
                  <td>{data.trade}</td>
                  <td>
                    {data.tradeAmount}
                    {" each"}
                  </td>
                  <td>
                    {data.unitCost}
                    {" ETH"}
                  </td>
                  <td>
                    {data.transactionAmount}
                    {" ETH"}
                  </td>
                  <td>
                    {data.fees}
                    {" ETH"}
                  </td>
                  <td>
                    {data.settlementAmount}
                    {" ETH"}
                  </td>
                  <td>{data.orderTime}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </ContainerBoard>
    </FlexWrap>
  );
};
const FlexWrap = styled.div`
  display: flex;
`;
const ContainerBoard = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  > :nth-child(1) {
    font-size: 1.5rem;
  }
  > :nth-child(2) {
    font-size: 1.5rem;
  }
`;

const Table = styled.table`
  margin-top: 1rem;
  text-align: left;
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

export default TransactionDetails;
