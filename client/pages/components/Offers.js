import React from "react";
import styled from "styled-components";

const Offers = () => {
  const datas = [
    {
      executionTime: "23.01.16.14:39",
      nftName: "bell",
      trade: "Sale",
      tradeAmount: "12",
      from: "0xw1m2k5bf63k0hE",
      to: "0xm1bg08dae43",
      unitCost: "0.95",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
    {
      executionTime: "23.02.15.14:40",
      nftName: "bell",
      trade: "Transfer",
      tradeAmount: "12",
      from: "0xw1m2k5bf63k0hE",
      to: "0xm1bg08dae43",
      unitCost: "",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
    {
      executionTime: "23.03.13.14:09",
      nftName: "choi",
      trade: "Transfer",
      tradeAmount: "12",
      from: "0xw1m2k5bf63k0hE",
      to: "0xm1bg08dae43",
      unitCost: "",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
    {
      executionTime: "23.04.01.04:11",
      nftName: "mi",
      trade: "Transfer",
      tradeAmount: "12",
      from: "0xw1m2k5bf63k0hE",
      to: "0xm1bg08dae43",
      unitCost: "",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
    {
      executionTime: "23.09.25.11:32",
      nftName: "bell",
      trade: "Sale",
      tradeAmount: "12",
      from: "0xw1m2k5bf63k0hE",
      to: "0xm1bg08dae43",
      unitCost: "0.95",
      transactionAmount: "2.5",
      fees: "0.0021",
      settlementAmount: "2.4979",
      orderTime: "23.01.15.14:39",
    },
  ];

  return (
    <Table style={{ display: "table", width: "100%" }}>
      <thead>
        <tr>
          <th>체결시간</th>
          <th>종류</th>
          <th>From</th>
          <th>to</th>
          <th>거래수량</th>
          <th>거래단가</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data, idx) => (
          <tr key={idx}>
            <td>{data.executionTime}</td>
            <td>{data.trade}</td>
            <td>{data.from}</td>
            <td>{data.to}</td>
            <td>{data.tradeAmount}{" 개"}</td>
            <td>{data.unitCost}{" ETH"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  margin-top: 1rem;
  text-align: center;
  table-layout:fixed;
  & thead {
    border-bottom: 2px solid #e3e6f0;
  }
  & th {
    padding: 0.75rem;
    font-size: larger;
    font-weight: 500;
  }
  td {
    padding: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    width: 10rem;
  
  }
`;
export default Offers;
