import React from "react";
import styled from "styled-components";

const Offers2 = ({offerAmount,offerPrice,offerAccount}) => {
  const datas = [
    {
      tradeAmount: offerAmount,
      from: offerAccount,
      unitCost: offerPrice,
    },
    {
      tradeAmount: offerAmount,
      from: offerAccount,
      unitCost: offerPrice,
    },
    {
      tradeAmount: offerAmount,
      from: offerAccount,
      unitCost: offerPrice,
    }
  ];

  return (
    <Table style={{ display: "table", width: "100%" }}>
      <thead>
        <tr>
          <th>From</th>
          <th>판매수량</th>
          <th>거래단가</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data, idx) => (
          <tr key={idx}>
            <td>{data.from}</td>
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
export default Offers2;
