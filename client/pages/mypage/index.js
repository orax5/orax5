import React, { useState, useEffect } from "react";
import styled from "styled-components";
// 마이페이지 컴포넌트
import LikeNft from "../components/mypage/LikeNft";
import MyNft from "../components/mypage/MyNft";
import TransactionDetails from "../components/mypage/TransactionDetails";
import FundingNft from "../components/mypage/FundingNft";
// 구글아이콘
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// // 리액트 아이콘
import { FaEthereum } from "react-icons/fa";

const index = () => {
  // 클립보드 카피 되었다는 표시 알려줄려고 셋타임아웃state 관리용useState
  const [clipAccount, setClipAccount] = useState(false);
  // 보여줄 페이지의 인덱스
  const [index, setIndex] = useState(0);

  const adress = "0x123";

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
  const menuArr = ["내 NFT", "찜한 NFT", "펀딩한 NFT", "거래내역"];
  // 클릭시 메뉴[인덱스]에 해당하는 페이지를 보여줌
  const clickHandler = (idx) => {
    setIndex(idx);
  };
  // 보여줄 페이지는 컴포넌트로 만들어 객체 안에 넣어줌
  const pages = {
    0: <MyNft />,
    1: <LikeNft />,
    2: <FundingNft />,
    3: <TransactionDetails />,
  };

  return (
    <MainContainer>
      <div></div>

      <div>
        <div>
          {clipAccount == true ? (
            <>
              <StateButton>
                <FaEthereum />
                Copied!
              </StateButton>
            </>
          ) : (
            <>
              <StateButton onClick={() => copyClipBoardHandler(adress)}>
                <FaEthereum />
                {adress}
              </StateButton>
            </>
          )}
          <StateButton>
            <PermIdentityIcon />
            Edit Profile
          </StateButton>
        </div>

        <StateBoard>
          <AssetsState>
            <div>
              <span>TOTAL ITEMS</span>
            </div>
            <div>
              <span>0</span>
            </div>
          </AssetsState>
          <AssetsState>
            <div>
              <span>UNLISTED ITEMS</span>
            </div>
            <div>
              <span>0</span>
            </div>
          </AssetsState>
          <AssetsState>
            <div>
              <span>ESTIMATED VALUE</span>
            </div>
            <div>
              <span>0</span>
            </div>
          </AssetsState>
          <AssetsState>
            <div>
              <span>LISTED ITEMS</span>
            </div>
            <div>
              <span>0</span>
            </div>
          </AssetsState>
        </StateBoard>
        <br />
        <div>
          <span>cash : </span>
          <span>
            {"999"}
            {"ETH"}
          </span>
        </div>
        <br />
        {menuArr.map((menu, idx) => {
          return (
            <span
              key={idx}
              onClick={() => clickHandler(idx)}
              style={{ marginRight: "1rem" }}
            >
              {menu}
            </span>
          );
        })}

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

const StateBoard = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 13rem);
  grid-template-rows: repeat(2, 1.5rem);
  row-gap: 0.5rem;
  column-gap: 0.5rem;
`;

const AssetsState = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: pink;
  border-radius: 0.5rem;
  // 상대박스 안 span과 div사이 패딩
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: palevioletred solid 1px;
`;

const StateButton = styled.button`
  background-color: pink;
  border: palevioletred solid 1px;
  border-radius: 0.5rem;
  margin-right: 3px;
  cursor: pointer;
  font-size: 1.7rem;
`;

export default index;
