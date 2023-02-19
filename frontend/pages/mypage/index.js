import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/Link";
import { useDispatch } from "react-redux";
import { ticket } from "../../redux/modules/user";
import Cookies from 'js-cookie';
import ajyContract from "../../hooks/ajyContract";
// 마이페이지 컴포넌트
import MyNft from "../components/mypage/MyNft";
import TransactionDetails from "../components/mypage/TransactionDetails";
import FundingNft from "../components/mypage/FundingNft";
// 리액트 아이콘
import { FaEthereum } from "react-icons/fa";
import { useWallet } from "../../hooks/useWallet";

const index = () => {
  const tokenData = ajyContract();
  const dispatch = useDispatch();
  // const tokenData = useContract();
  const wallet = useWallet();

  const [account, setAccount] = useState(null);


  // 구독권 확인
  const [result, setResult] = useState(false);


  const checkTicket = async() => {
    console.log(tokenData)
    const result = await tokenData.Ftoken.streamingView();
    // 남은 스트리밍 시간
    // 남은 스트리밍 시간 숫자로
    // 밀리초로 나눔
    const today = new Date().getTime() / 1000;
    // 소수점 내린 최종 현재시간 초
    const ttoday = Math.floor(today);
    console.log( parseInt(result));
    console.log("가공한후현재시간초:", ttoday);
    // 남은날짜를 수정 하는데 현재시간이 0이면 음수찍혀서 종료
    setResult(Math.floor(((parseInt(result) - ttoday) * 1000) / 86400000));
    console.log("여기결과값", parseInt(result));
    // JSX 조건 충족시키려고 만듬 0209
    if (result <= 0) {
      setResult(false);
    }
    dispatch(ticket(result, ttoday));
  }

  useEffect(() => {
    setAccount(wallet.info.account);
    if(tokenData != null){
      checkTicket();
  }
  }, [tokenData]);

  

  const [clipAccount, setClipAccount] = useState(false);
  const [index, setIndex] = useState(0);

  const copyClipBoardHandler = async (text) => {
    setClipAccount(true); // 트루 값 먼저주고
    setTimeout(() => {
      setClipAccount(false);
    }, 2000); // 2초뒤에 다시 폴스
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {}
  };


  const token = Cookies.get('jwtToken');
  // const tokenObject = JSON.parse(token);
  // console.log(tokenObject)
  console.log(token); // 예를 들어, 토큰 값이 객체의 "tokenValue" 속성에 저장되어 있다면 출력

  

  // // nft 갯수 확인 ? 해야함? 크리에이터가? 유저는 확인해서 myPageNFT 현황보여줘야하는데 이거 여기서 쓰는거 아니고 다른데서 하는거라고0208에 집가면서 이야기함 useEffect 안에 들어야가야함
  // const myNftAmount = async () => {
  //   const bb = await Dtoken.balanceOf(account, 1);
  //   console.log(bb.toString());
  // };



  const menuArr = ["내 NFT", "펀딩한 NFT", "거래내역"];
  const clickHandler = (idx) => {
    setIndex(idx);
  };
  const pages = {
    0: <MyNft />,
    1: <FundingNft />,
    2: <TransactionDetails />,
  };

  


  return (
    <MainContainer>
      <div></div>
      <div>
        <UserStateArea>
          {clipAccount == true ? (
            <>
              <StateButton>
                <FaEthereum />
                Copied!
              </StateButton>
            </>
          ) : (
            <>
              <StateButton onClick={() => copyClipBoardHandler(account)}>
                <FaEthereum />
                &nbsp;
                {account}
              </StateButton>
            </>
          )}
          {/* <StateButton>
            <PermIdentityIcon />
            &nbsp;
            <Link href="/mypage/settings">Edit Profile</Link>
          </StateButton> */}
        </UserStateArea>
        <UserInfo>
          <div>{result ? "스트리밍 잔여기한 —̳͟͞͞💁🏻ᩚ " + result + " 일" : "스트리밍권구매하기"}</div>
        </UserInfo>
        <StateBoard>
          <AssetsState>
            <div>TOTAL ITEMS</div>
            <div>0</div>
          </AssetsState>
          <AssetsState>
            <div>UNLISTED ITEMS</div>
            <div>0</div>
          </AssetsState>
          <AssetsState>
            <div>ESTIMATED VALUE</div>
            <div>0</div>
          </AssetsState>
          <AssetsState>
            <div>LISTED ITEMS</div>
            <div>0</div>
          </AssetsState>
        </StateBoard>
        <br />
        <MenuLists>
          {menuArr.map((menu, idx) => {
            return (
              <div key={idx} onClick={() => clickHandler(idx)}>
                {menu}
              </div>
            );
          })}
        </MenuLists>
        {/* 해당하는 페이지 보여주는 부분 */}
        <div>{pages[index]}</div>

        {/*⬆에서 작업 이뤄져야함 */}
      </div>

      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const UserStateArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StateButton = styled.button`
  cursor: pointer;
  width: auto;
  height: 3rem;
  border-radius: 0.5rem;
  font-size: 1.7rem;
`;
const StateBoard = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  @media ${(props) => props.theme.device.tablet} {
    ${(props) => props.theme.align.flexCenterColumn};
    gap: 0.5rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
`;
const AssetsState = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 15rem;
  height: 4rem;
  border: 1px solid plum;
  border-radius: 0.5rem;
`;
const UserInfo = styled.div`
  ${(props) => props.theme.align.flexStart};
  font-size: 1.2rem;
`;
const MenuLists = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  height: 3rem;
  > div {
    align-items: center;
    cursor: pointer;
    width: auto;
    margin-right: 1rem;
    font-size: 1.2rem;
    font-weight: 800;
  }
  > div:hover {
    color: plum;
  }
`;

export default index;
