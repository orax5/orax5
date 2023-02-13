import React from "react";
import styled from "styled-components";

const Offers2 = ({saleListarray}) => {

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
        {saleListarray.map((data, idx) => (
          <tr key={idx}>
            <td>{data.account}</td>
            <td>{data.amount}{" 개"}</td>
            <td>{data.price}{" ETH"}</td>
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
