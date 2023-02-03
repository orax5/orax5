import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/Link";
import { ethers } from "ethers"
// 지갑연결
import { useWeb3React } from '@web3-react/core';
import { injected } from './../../lib/connectors';
// 
import dtsToken from '../../contracts/DtsToken.json';

const index = () => {
  const {
    connector, // 현재 dapp에 연결된 월렛의 connector 값
    library, // web3 provider 제공
    chainId, // dapp에 연결된 account의 chainId
    account, // dapp에 연결된 account address
    active, // active: dapp 유저가 로그인 된 상태인지 체크
    error,
    activate, // activate: dapp 월렛 연결 기능 수행함수
    deactivate, // deactivate: dapp 월렛 해제 수행함수
  } = useWeb3React();

  const Provider = library;  

  

  useEffect(() => {
    account ? (async() =>{
        const contractInstance = new ethers.Contract(dtsToken.networks[chainId].address, dtsToken.abi);
        console.log(contractInstance)
        // contractInstance.balanceOf(account, 1)
        // const count = await contractInstance.current().call()

      })() : ""
      
    // account ? setTimeout(() => {
    //   (async() =>{
    //     const contractInstance = new ethers.Contract(dtsToken.networks[chainId].address, dtsToken.abi);
    //     console.log(contractInstance)
    //     contractInstance.balanceOf(account, 1)

    //   })()
    //   }, 1000) : ""
    // account ? console.log(dtsToken.abi) : ""

    });

  // 메타마스크 깔려 있는지 여부 확인
  // if (typeof window.ethereum !== 'undefined') {
  //    console.log('MetaMask is installed!');
  // }

   // 지갑 연결
   const onClickActivateHandler = () => {
    activate(injected, (error) => {
      if (isNoEthereumObject(error))
        window.open("https://metamask.io/download.html");
    });
  }

  // 연결 해제
  const onClickDeactivateHandler = () => {
    deactivate(); // connector._events.Web3ReactDeactivate() 이거랑 같은건데
  }


  
  return (
    <MainContainer>
      <div></div>
      <LoginWrap>
        <div style={{ marginTop: "10rem" }}>
          <header>
            <h1>LOGIN</h1>
          </header>
          {account != null ? (
            <AddressBox>{account}</AddressBox>
          ) : (
            <AddressBox>
              <h2>지갑을 연결해주세요</h2>
              <button onClick={onClickActivateHandler}>지갑 연결</button>
            </AddressBox>
          )}

          <InputBox>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
            />
            <label htmlFor="password">비밀번호</label>
          </InputBox>
          <Forgot>비밀번호 찾기</Forgot>
          <Submit type="submit" value="로그인" />
          <Link href="/login/join">
            <Submit type="submit" value="회원가입" />
          </Link>
        </div>
      </LoginWrap>

      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
// 로그인 영역 감싼 div
const LoginWrap = styled.div`
  width: 30rem;
  @media ${(props) => props.theme.device.mobile} {
    width: 20rem;
  }
`;
// 지갑 주소 감싼 div
const AddressBox = styled.div`
  ${(props) => props.theme.align.flexBetween};
  margin-top: 1rem;
  > button {
    font-size: 1rem;
    font-weight: 800;
  }
  > button:hover {
    color: plum;
  }
`;
const InputBox = styled.div`
  position: relative;
  margin: 10px 0;
  > input {
    background: transparent;
    border: none;
    border-bottom: solid 1px #ccc;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 100%;
  }
  > input::placeholder {
    color: transparent;
  }
  /* 이것도 있어야함 아래랑 세트 */
  > input:placeholder-shown + label {
    color: #aaa;
    font-size: 14pt;
    top: 15px;
  }
  /* 이거해야 왔다갔다함 */
  > input:focus + label,
  label {
    color: plum;
    font-size: 10pt;
    pointer-events: none;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
`;
const Submit = styled.input`
  cursor: pointer;
  background-color: plum;
  border: none;
  color: white;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  font-size: 14pt;
  margin-top: 1rem;
`;
// 속성 사라지게 만듬 비밀번호 찾기임
const Forgot = styled.div`
  cursor: pointer;
  text-align: right;
  font-size: 12pt;
  color: rgb(164, 164, 164);
  margin: 10px 0px;
`;

export default index;
