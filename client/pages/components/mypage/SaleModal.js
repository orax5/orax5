import React,{useState, useRef} from "react";
import styled from "styled-components";

const SaleModal = ({id,amount}) => {
    
    const [salePrice, setSalePrice] = useState(null);
    const getSalePriceValue = (e) => {
        setSalePrice(e.target.value);
        console.log(salePrice);
    };
    const totalPrice = amount * salePrice;

  return (
  <RegisterWrap>
    <ContentWrap>
      <label>판매 수량</label>
      <input type="number"/>
      <label>판매 가격 ETH</label>
      <input type="number" onChange={getSalePriceValue} />
      <label>총액</label>
      <input value={totalPrice}/>
      <button>등록</button>
    </ContentWrap>
  </RegisterWrap>
  )
}
// 전체 div
const RegisterWrap = styled.div`
  width: 35rem;
  height: 35rem;
  font-size: 1.5rem;
  border: 1px solid white;
  border-radius: 1rem;
  background-color: black;
  position: absolute;
  @media ${(props) => props.theme.device.mobile} {
    width: 25rem;
  }
`;
// 내용 div
const ContentWrap = styled.div`
  ${(props) => props.theme.align.flexStart};
  width: 31rem;
  padding: 2rem;

  > label {
    font-size: 2rem;
    font-weight: 800;
  }
  > input,
  select {
    width: inherit;
    height: 3rem;
    font-size: 1.3rem;
    border: 1px solid white;
    margin: 0.5rem 0 1.2rem 0;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
  > textarea {
    width: inherit;
    height: 6rem;
    resize: none;
    border: 1px solid white;
    font-size: 1.3rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
  & button {
    ${(props) => props.theme.button.basicBtn};
    width: inherit;
    text-align: center;
    margin-top: 1.2rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 20rem;
    }
  }
`;

export default SaleModal