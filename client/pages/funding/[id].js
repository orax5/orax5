import Link from "next/Link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
// 이미지들
import heart_on from "../../public/Img/heart_on.png";
import chat from "../../public/Img/chat.png";

const deatil = () => {
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
                <strong>123456 </strong> % 달성
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
                  <td>펀딩시간</td>
                  <td>2023-01-20 ~ 2023-02-20</td>
                </tr>
                <tr>
                  <td>남은시간</td>
                  <td>00일 00시 00분</td>
                </tr>
                <tr>
                  <td>펀딩금액(ETH)</td>
                  <td>
                    <input
                      type="number"
                      style={{
                        fontSize: "1.5rem",
                        border: "1px solid white",
                        width: " 12rem ",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <FundingBtn>
              <button>펀딩하기</button>
            </FundingBtn>

            <BtnBox>
              <button>
                <Image
                  src={heart_on}
                  width={20}
                  height={20}
                  style={{ background: "transparent" }}
                />
                {3683}
              </button>
              <button>
                <Image
                  src={chat}
                  width={20}
                  height={20}
                  style={{ background: "transparent" }}
                />{" "}
                문의
              </button>
              <button>공유하기</button>
            </BtnBox>
          </DetailBox>{" "}
        </DetailWrap>{" "}
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
          {/* 거래내역 추가하기 -> 컴포넌트로 만들지? */}
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

  @media ${(props) => props.theme.device.tablet} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
  @media ${(props) => props.theme.device.mobile} {
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
  // 카테고리 하위메뉴
  & span:hover {
    cursor: pointer;
    color: red;
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
export default deatil;
