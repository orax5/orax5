import Link from "next/Link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../styles/global-style";

const deatil = () => {
  return (
    <PageContainer>
      {/* 페이지 윗부분은 사진 | 상세정보는 가로로 정렬되어있고 아래부분의 설명,
      거래내역, 그래프 등의 정보는 세로로 정렬할 것이므로 크게 DetailWrap InfoWrap
      두 개 영역으로 나누어 작업함 */}
      <DetailWrap>
        <ImgWrap>
          <Image
            src="/Img/sample.jpg"
            alt="sampleImg"
            width={700}
            height={700}
            style={{ border: "10px solid white", borderRadius: "1rem" }}
          />
        </ImgWrap>
        <DetailBox>
          {/* &gt; : >,  &lt; : < */}
          <div>
            카테고리 &gt;&nbsp;
            <span
              onClick={() => {
                alert("준비중");
              }}
            >
              가요
            </span>
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
    </PageContainer>
  );
};

const DetailWrap = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
`;

const ImgWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
`;

const DetailBox = styled.div`
  display: inherit;
  width: inherit;
  height: inherit;
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
