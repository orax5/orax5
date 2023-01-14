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
                  <td>판매시간</td>
                  <td>2023-01-20 ~ 2023-02-20</td>
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

  > :first-child {
    margin-top: 2rem;
  }

  & span:hover {
    cursor: pointer;
    color: red;
  }
  > :nth-child(2) {
    font-size: 5rem;
    font-weight: 900;
  }
  > table {
    width: 100%;
    height: inherit;
  }
  > :last-child {
    margin-top: 1rem;
  }
`;

const NumSelector = styled.select`
  width: 15rem;
  height: 2rem;
`;

const PageBtn = styled.button`
  cursor: pointer;
  color: black;
  width: 15rem;
  height: 4rem;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
`;

const InfoWrap = styled.div`
  width: inherit;
  margin: 5rem 9rem;
`;

const AboutNft = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 50rem;
  height: auto;
  border: 1px solid gray;
  border-radius: 1rem;

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
  > :last-child {
    margin: 2rem;
  }
`;
export default deatil;
