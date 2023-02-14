import Image from "next/image";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CountDown from "../components/CountDown";
import { ethers } from "ethers";

const deatil = () => {
  // endDate는 선택된 날짜로 불러와야함, 지금은 임의로 두고 작업
  const endDate = new Date("2023-01-30 14:55:00");
  // 펀딩이 종료되었을 때 보여지는 태그 처리
  const [isTimeOver, setIsTimeOver] = useState(false);
  // countDown 함수 - 계산해서 받은 값을 배열로 받아옴
  const [date, hours, minutes, seconds] = CountDown(endDate, setIsTimeOver);
  // 펀딩 기간 이후 버튼 블락 처리
  const TimeOverAlert = () => {
    alert("펀딩종료 후에는 펀딩에 참여하실 수 없습니다");
  };

  const Ftoken = useSelector((state) => state.user.contracts.Ftoken);
  const user = useSelector((state) => state.user.users.account);

  // 유저가 펀딩하는 함수
  const asd = async() => {
    const aa = await Ftoken.userFundding(1,5, { value: ethers.utils.parseEther("5.0") });
    await aa.wait();
    console.log(aa);
    Ftoken.on("userFunddingEvent", (account,tokenId,amount,price)  => {
      console.log(account.toString());
      console.log(tokenId.toString());
      console.log(amount.toString());
      console.log(price.toString());
    })
  }

  // 지금까지 해당 음원 판매된 갯수
  const qqq = async() => {
    const aa = await Ftoken.priceCheck(1);
    console.log(aa.toString());
  }

  // 입력 수량 정확하게 막기 위해서 해당 DOM태그에 직접 처리
  // 이건 아예 데이터 넘길 때 처리하는게 좋을 수도
  // const numref = useRef();

  return (
    <MainContainer>
      <div></div>
      <div>
        <DetailWrap>
          <ImgWrap>
            <Image
              src="/Img/sample.jpg"
              alt="detail_page_image"
              width={500}
              height={500}
            />
          </ImgWrap>
          <DetailBox>
            <div>
              카테고리 &gt;&nbsp;
              {/* 해당 카테고리만 필터링 된 페이지로 이동 시간 부족하면 따로 이벤트 걸지 않기 */}
              <span>가요</span>
            </div>
            <div>test_title</div>
            <FundingDetails>
              <div>
                {/* 100 * (펀딩 된 수량/전체 수량) */}
                <strong>99 </strong> % 달성
              </div>
              <div>
                <strong>224,431,400 </strong> ETH 펀딩
              </div>
              <div>
                <strong>2065</strong>명의 서포터
              </div>
            </FundingDetails>
            <table>
              <tbody>
                <tr>
                  <TableTitle>펀딩기간</TableTitle>
                  <td onClick={qqq}>2023-01-20 ~ 2023-02-20</td>
                </tr>
                <tr>
                  <TableTitle>남은시간</TableTitle>
                  {isTimeOver ? (
                    <td onClick={asd}>펀딩이 종료되었습니다</td>
                  ) : (
                    <Timer isTimeOver={isTimeOver}>
                      {date}일 {hours}시간 {minutes}분 {seconds}초
                    </Timer>
                  )}
                </tr>
                <tr>
                  <TableTitle>수량</TableTitle>
                  <td>
                    <input
                      type="number"
                      min="1"
                      max="3000"
                      style={{
                        fontSize: "1.5rem",
                        border: "1px solid white",
                        width: " 12rem ",
                      }}
                    />
                    {/*입력 수량/총 개수*/}
                    &nbsp;/ 3000개
                  </td>
                </tr>
              </tbody>
            </table>
            <FundingBtn>
              {/*약간 딜레이가 생겨서 나중에 다른 처리 방법도 고민해보기 */}
              {isTimeOver ? (
                <button onClick={asd}>펀딩이 종료되었습니다</button>
              ) : (
                <button>펀딩하기</button>
              )}
            </FundingBtn>
          </DetailBox>
        </DetailWrap>
        <InfoWrap>
          <AboutNft>
            <div>Notice</div>
            <div>
              <p>목표 금액 500ETH</p>
              <p>펀딩 기간 2023.01.06-2023.01.30</p>
              <p>
                100% 이상 모이면 펀딩이 성공되며, 펀딩 마감일까지 목표 금액이
                100% 모이지 않으면 결제가 진행되지 않습니다.
              </p>
            </div>
          </AboutNft>
          <AboutNft>
            <div>음원 설명</div>
            <div>이걸사네 ㅋㅋ</div>
          </AboutNft>
          <AboutNft>
            <div>음원 설명</div>
            <div>음원 설명 내용</div>
          </AboutNft>
        </InfoWrap>
      </div>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const DetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
`;

const ImgWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  @media ${(props) => props.theme.device.mobile} {
    margin-left: 1rem;
    > img {
      width: 22rem;
      height: 22rem;
    }
  }
`;

const DetailBox = styled.div`
  ${(props) => props.theme.align.flexStart};
  font-size: 1.5rem;
  margin-left: 4rem;
  @media ${(props) => props.theme.device.tablet} {
    margin-left: 0;
  }
  @media ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
    margin-left: 1rem;
  }
  // 카테고리 부분
  > :first-child {
    margin-top: 1rem;
  }
  // nft 제목
  > :nth-child(2) {
    font-size: 5rem;
    font-weight: 900;
  }
  // 상세 정보 테이블
  > table {
    width: 100%;
    line-height: 2.5rem;
    margin-bottom: 2rem;
  }
`;
const TableTitle = styled.td`
  font-weight: 800;
`;
// 펀딩 관련 정보
const FundingDetails = styled.div`
  padding: 0.5rem 0;
  color: red;
  & div {
    padding: 0.3rem 0;
  }
`;
// 펀딩하기 버튼
const FundingBtn = styled.div`
  margin: 0 auto;
  > button {
    ${(props) => props.theme.button.basicBtn}
    width: 28rem;
  }
`;
// 버튼 div
const BtnBox = styled.div`
  width: 30rem;
  margin-top: 1rem;
  @media ${(props) => props.theme.device.mobile} {
    display: flex;
  }
  // 좋아요/문의/공유하기 버튼
  > button {
    ${(props) => props.theme.button.basicBtn};
    margin: 0 1rem;
  }
`;
// 음원 설명, 거래기록 등 상세 정보 넣을 부분
const InfoWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: inherit;
  margin: 5rem 0;
  @media ${(props) => props.theme.device.mobile} {
    margin-left: 1rem;
  }
`;
// 음원 설명 박스
const AboutNft = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 50rem;
  height: auto;
  border: 1px solid gray;
  border-radius: 1rem;
  margin: 1rem 0;
  // 박스 제목
  > :first-child {
    ${(props) => props.theme.align.flexCenter};
    width: inherit;
    height: 3rem;
    color: black;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: white;
    padding-left: 1rem;
  }
  // 박스 내용
  > :last-child {
    width: inherit;
    height: auto;
    padding: 1rem;
  }
`;
const Timer = styled.td`
  color: red;
  font-weight: 800;
`;
export default deatil;