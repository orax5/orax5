import Link from "next/Link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../styles/global-style";
// 이미지들
import heart_on from "../../public/Img/heart_on.png";
import chat from "../../public/Img/chat.png";



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
            style={{ border: "10px solid white", borderRadius: "1rem" }}
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
            <b>⠂</b>
            <span>R&B</span>
          </div>
          {/* 두번째 자식 */}
          <div>박진영R&B</div>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>123456 </strong> % 달성
                </td>
              </tr>
              <tr>
                <td>
                  <strong>224,431,400 </strong> ETH 펀딩
                </td>
              </tr>
              <tr>
                <td>
                <strong>2065</strong>명의 서포터
                </td>
              </tr>
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
                  <input type="number" style={{fontSize:"1.5rem"}}/>
                </td>
              </tr>
            </tbody>
          </table>
         
            <PageBtn>펀딩하기</PageBtn>
           
          <div>
              <SmallBtn>
                <Image 
                  src={heart_on}
                  width={20} height={20}
                  style={{background:"transparent"}}/> {3683}
              </SmallBtn>
              <SmallBtn>
                <Image 
                    src={chat}
                    width={20} height={20}
                    style={{background:"transparent"}}/> 문의
              </SmallBtn>
              <SmallBtn>공유하기</SmallBtn>
          </div>
        </InfoWrap>
      </DetailWrap>
      <NewWrap>
        <AboutNft>
          <div>Notice</div>
          <div>
            <p>목표 금액 500ETH</p>
            <p>펀딩 기간 2023.01.06-2023.01.30</p>
            <p>100% 이상 모이면 펀딩이 성공되며, 펀딩 마감일까지 목표 금액이 100% 모이지 않으면 결제가 진행되지 않습니다.</p>
          </div>
        </AboutNft>
        <AboutNft>
          <div>음원 설명</div>
          <div>이걸사네 ㅋㅋ</div>
        </AboutNft>

        {/* 거래내역 추가하기 -> 컴포넌트로 만들지? */}
      </NewWrap>
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
    margin-top: -3rem;
  }
`;

const PageBtn = styled.button`
  cursor: pointer;
  color: black;
  width: 40rem;
  height: 4rem;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  &:hover{  
    background-color : black;
    color : white;
    border : solid 1px white;
    transition: 0.5s;
  }
`;

const NewWrap = styled.div`
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

const SmallBtn = styled.button`
  cursor: pointer;
  color: black;
  width: 13.35rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  &:hover{  
    background-color : black;
    color : white;
    border : solid 1px white;
    transition: 0.5s;
  }
`

export default deatil;

