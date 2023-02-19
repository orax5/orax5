import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import ajyContract from "../../hooks/ajyContract";

const Offers3 = ({saleListarray, inputSaleAmount,setNumberList}) => {
  const tokenData = ajyContract();
 

  const buyNft = async (data) => {
    const totalPrice = inputSaleAmount * data.price;
    await tokenData.Stoken.purchaseToken(
      data.account, 1, parseInt(inputSaleAmount), parseInt(data.listId),
      { value: ethers.utils.parseEther(totalPrice.toString()) }
    );
    setNumberList(data);
  };

  return (
    <Table style={{ display: "table", width: "100%" }}>
      <thead>
        <tr>
          <th onClick={buyNft}>From</th>
          <th>판매수량</th>
          <th>거래단가</th>
        </tr>
      </thead>
      <tbody>
        {saleListarray.map((data, idx) => (
          <tr key={idx}>
            <td>{data?.account}</td>
            <td>{data?.amount}{" 개"}</td>
            <td>{data?.price}{" ETH"}</td>
            <td>
            <button onClick={() => buyNft(data)}>{"구매하기"}</button>
            </td>
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
export default Offers3;