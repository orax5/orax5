import Link from "next/Link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

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
              width={450}
              height={450}
            />
          </ImgWrap>
          <DetailBox>
            <div>
              카테고리 &gt;&nbsp;
              {/* 해당 카테고리만 필터링 된 페이지로 이동 시간 부족하면 따로 이벤트 걸지 않기 */}
              <span>가요</span>
            </div>
            <div>test_title</div>
            <table>
              {/* 제목과 내용을 정렬하기 쉽게하려고 table사용 */}
              <tbody>
                <tr>
                  <td>작곡가</td>
                  <td>프로필 확인하기</td>
                </tr>
                <tr>
                  <td>작사가</td>
                  <td>프로필 확인하기</td>
                </tr>
                <tr>
                  <td>가수</td>
                  <td>프로필 확인하기</td>
                </tr>
                <tr>
                  <td>판매기간</td>
                  <td>~ 2023-02-20</td>
                </tr>
                <tr>
                  <td>남은시간</td>
                  <td>00일 00시 00분</td>
                </tr>
                <tr>
                  <td>수량</td>
                  <td>
                    <NumSelector>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </NumSelector>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <PageBtn>구매하기</PageBtn>
              <Link href="/streaming">
                <PageBtn>스트리밍 하러가기</PageBtn>
              </Link>
            </div>
          </DetailBox>
        </DetailWrap>
        <InfoWrap>
          <AboutNft>
            <div>음원 설명</div>
            <div>음원 설명 내용</div>
          </AboutNft>
          <AboutNft>
            <div>음원 설명</div>
            <div>음원 설명 내용</div>
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
  @media ${(props) => props.theme.device.pc} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
  @media ${(props) => props.theme.device.tablet} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
  @media ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
`;

const ImgWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
`;

const DetailBox = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  font-size: 1.5rem;
  margin-left: 4rem;
  @media ${(props) => props.theme.device.mobile} {
    margin-left: 0;
  }
  // 카테고리 부분
  > :first-child {
    margin-top: 2rem;
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
    line-height: 2rem;
    @media ${(props) => props.theme.device.mobile} {
      text-align: center;
    }
  }
  // 버튼 div
  > :last-child {
    ${(props) => props.theme.align.flexCenter};

    margin-top: 1rem;
    @media ${(props) => props.theme.device.mobile} {
      ${(props) => props.theme.align.flexCenterColumn};
    }
  }
`;
// 수량 선택 박스
const NumSelector = styled.select`
  width: 10rem;
  height: 2rem;
`;
// 구매하기/스트리밍하기 버튼
const PageBtn = styled.button`
  ${(props) => props.theme.button.basicBtn};
  margin: 0.5rem;
  width: 12rem;
`;
// 음원 설명, 거래기록 등 상세 정보 넣을 부분
const InfoWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: inherit;
  margin: 5rem 0;
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
