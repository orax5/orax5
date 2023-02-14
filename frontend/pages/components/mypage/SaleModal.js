import React,{useState, useRef} from "react";
import styled from "styled-components";

const SaleModal = ({id,amount}) => {
    
    const [salePrice, setSalePrice] = useState(null);
    const [inputSaleAmount,  setInputSaleAmount] = useState(null);
    const getSalePriceValue = (e) => {
      setSalePrice(e.target.value);
    };
    const getSaleAmountValue = (e) => {
      setInputSaleAmount(e.target.value);
    }
    // 총액
    const totalPrice = (inputSaleAmount * salePrice);
    // 수수료 금액
    const fees = (totalPrice * 0.05)
    // 진짜총액
    const realTotalPrice = totalPrice - fees;

    // 등록버튼 핸들러
    const registerHandler = () => {
      // 판매수량이 보유량보다 큰 경우 
      if( inputSaleAmount > amount){
        alert("판매수량이 보유량보다 많습니다.");
      } else{
        alert("등록되었습니다.")
      }
    }
 
  return (
  <RegisterWrap>
    <ContentWrap>
      <label>판매 수량</label>
      <input type="number" onChange={getSaleAmountValue}/>
      <label>판매 가격 ETH</label>
      <input type="number" onChange={getSalePriceValue} />
      <label>수수료 (5%)</label>
      <input  value={fees} readOnly/>
      <label>총액</label>
      <input value={realTotalPrice} readOnly/>
      <button onClick={registerHandler}>등록</button>
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