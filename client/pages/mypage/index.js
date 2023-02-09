import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/Link";
import { useSelector, useDispatch } from "react-redux";
import { ticket } from "../../redux/modules/user";
// 마이페이지 컴포넌트
import MyNft from "../components/mypage/MyNft";
import TransactionDetails from "../components/mypage/TransactionDetails";
import FundingNft from "../components/mypage/FundingNft";
// 구글아이콘
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// 리액트 아이콘
import { FaEthereum } from "react-icons/fa";
import { ethers } from "ethers";

const index = () => {
  // 클립보드 카피 되었다는 표시 알려줄려고 셋타임아웃state 관리용useState
  const [clipAccount, setClipAccount] = useState(false);
  // 보여줄 페이지의 인덱스
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  const copyClipBoardHandler = async (text) => {
    setClipAccount(true); // 트루 값 먼저주고
    setTimeout(() => {
      setClipAccount(false);
    }, 2000); // 2초뒤에 다시 폴스
    try {
      await navigator.clipboard.writeText(text);
      // alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      // alert('복사에 실패하였습니다');
    }
  };

  // 탭제목은 배열에 담아줌
  const menuArr = ["내 NFT", "펀딩한 NFT", "거래내역"];
  // 클릭시 메뉴[인덱스]에 해당하는 페이지를 보여줌
  const clickHandler = (idx) => {
    setIndex(idx);
  };
  // 보여줄 페이지는 컴포넌트로 만들어 객체 안에 넣어줌
  const pages = {
    0: <MyNft />,
    1: <FundingNft />,
    2: <TransactionDetails />,
  };

  // 구독권 확인
  const Ftoken = useSelector((state) => state.user.contracts.Ftoken);
  console.log(Ftoken)
  const account = useSelector((state) => state.user.users.user_wallet);

  const [result, setResult] = useState(null);
  console.log(result)


  useEffect(() => {
    async function checkTicket() {
      const result = await Ftoken.streamingView();
      // 남은 스트리밍 시간
      const leftTime = result.toString();
      // 남은 스트리밍 시간 숫자로
      const lleftTime = parseInt(leftTime)
      // 밀리초로 나눔
      const today = new Date().getTime() / 1000
      // 소수점 내린 최종 현재시간 초
      const ttoday = Math.floor(today)
      console.log("트랜잭션발생시간+30일초",lleftTime);
      console.log("가공한후현재시간초:",ttoday);
      // 남은날짜를 수정 
      setResult(Math.floor((lleftTime - ttoday) * 1000 / 86400000 ));
      console.log("여기결과값",result.toString())
      dispatch(ticket(result,ttoday))
    }
    checkTicket();
    
  }, [result]);
  

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
          <StateButton>
            <PermIdentityIcon />
            &nbsp;
            <Link href="/mypage/settings">Edit Profile</Link>
          </StateButton>
        </UserStateArea>
        <UserInfo>
          {/* <div>
            cash : {"999"}{"ETH"}
          </div> */}
          <div>{result ? ("스트리밍 잔여기한 —̳͟͞͞💁🏻ᩚ "+result+" 일") : "여기 남은 스트리밍 시간"}</div>
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
}

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
