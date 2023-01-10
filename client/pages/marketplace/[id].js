import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../styles/global-style";

const deatil = () => {
  return (
    <PageContainer>
      <DetailWrap>
        <ImgWrap>
          <Image
            src="/Img/sample.jpg"
            alt="sampleImg"
            width={700}
            height={700}
            style={{ border: "20px solid white", borderRadius: "1rem" }}
          />
        </ImgWrap>
        <InfoWrap>
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
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </NumSelector>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <PageBtn>구매하기</PageBtn>
            <PageBtn>스트리밍 하러가기</PageBtn>
          </div>
        </InfoWrap>
      </DetailWrap>
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

const InfoWrap = styled.div`
  display: inherit;
  width: inherit;
  height: inherit;
  font-size: 1.5rem;

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
export default deatil;

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const id = params.id;

//   console.log(id);

//   return { props: { id } };
// }
