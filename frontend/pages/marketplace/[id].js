import Link from "next/link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
//  promise resolve 과정 없이도 변수에 할당할 수 있도록 해준다
import dynamic from "next/dynamic";
import Offers from "../components/Offers";
import Offers3 from "../components/Offers3";
import { useRouter } from "next/router";

import  ajyContract  from "../../hooks/ajyContract";

const deatil = () => {

  const params = useRouter();

  // contract, 지갑 정보 가져오기
  const tokenData = ajyContract();

  // 판매 내역 리스트 담아줌
  const [ saleListarray, setSaleListArray ] = useState([]);
  // 인풋값들
  const [inputSaleAmount,  setInputSaleAmount] = useState(null);

  // onChage 값들 판매수량, 판매가격
  const getSaleAmountValue = (e) => {
    setInputSaleAmount(e.target.value);
  }

  // 최초 실행시 판매 내역 보여줌
  useEffect(() => {
    console.log(tokenData);
    if(tokenData != null){
      ViewOneHandler();
    }
  }, [tokenData]);

  async function setNumberList(data){
      const ViewOne = await tokenData.Stoken.getSalesTokenListAll(parseInt(params.query.id),parseInt(data.listId));
      if(parseInt(data.amount) == parseInt(ViewOne.amount)){
        console.log("사는중 기달기달");
        setTimeout(() => {
          setNumberList(data);
        }, 5000);
      } else{
        ViewOneHandler();
        console.log("구매 완료")
      }
  };

  const ViewOneHandler = async() => {

    // 거래 등록 내용 보기 (from 주소, 판매수량, 가격)
    const saleListNumber = await tokenData.Stoken.saleNumberList(parseInt(params.query.id));

    const arr = [];
    for(let i = 1; i <= saleListNumber; i++){
        const ViewOne = await tokenData.Stoken.getSalesTokenListAll(parseInt(params.query.id),i);
        if(ViewOne.amount != 0){
          const saleListView = {
            account : ViewOne.account,
            amount : parseInt(ViewOne.amount),
            price : parseInt(ViewOne.price),
            listId : parseInt(ViewOne.listId)
          };
          arr.push(saleListView);
        }
      }
      setSaleListArray(arr);

  }

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
                {/* 이부분 마켓플레이스에서 판매기간삭제함 */}
                <tr>
                  <td>수량</td>
                  <td>
                    <NumSelector type="number" onChange={getSaleAmountValue}/>
                  </td>
                </tr>
                {/* <tr>
                  <td>구매가격</td>
                  <td>
                    <NumSelector type="number" />
                  </td>
                </tr> */}
              </tbody>
            </table>
            <div>
              {/* <PageBtn onClick={buyNft}>구매하기</PageBtn> */}
              <Link href="/streaming">
                <PageBtn>스트리밍 하러가기</PageBtn>
              </Link>
            </div>
          </DetailBox>
        </DetailWrap>
        <InfoWrap>
          <InfoBox>
            <div>음원 설명</div>
            <AboutNft>
              <div>음원 설명</div>
              <div>음원 설명음원 설명음원 설명</div>
            </AboutNft>
          </InfoBox>
          <InfoBox>
            <div>Offer</div>
            <Offers3
              saleListarray = {saleListarray}
              inputSaleAmount = {inputSaleAmount}
              setNumberList = {setNumberList}
              tokenId = {parseInt(params.query.id)}
            />
          </InfoBox>
          <InfoBox>
            <div>거래 내역</div>
            <Offers />
          </InfoBox>
        </InfoWrap>
      </div>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
// 사진이랑 정보있는 div
const DetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
  }
`;
// 이미지 정렬용 div
const ImgWrap = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  @media ${(props) => props.theme.device.mobile} {
    > img {
      width: 22rem;
      height: 22rem;
    }
  }
`;
// nft 상세 정보
const DetailBox = styled.div`
  ${(props) => props.theme.align.flexStart};
  font-size: 1.5rem;
  margin-left: 4rem;
  @media ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn};
    margin-left: 0;
  }
  // 카테고리 부분
  > :first-child {
    margin-top: 2rem;
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
const NumSelector = styled.input`
  width: 10rem;
  height: 2rem;
  border: 1px solid white;
`;
// 구매하기/스트리밍하기 버튼
const PageBtn = styled.button`
  ${(props) => props.theme.button.basicBtn};
  margin: 0.5rem;
  width: 12rem;
`;
// 음원 설명, 거래기록 등 상세 정보 넣을 부분
const InfoWrap = styled.div`
  ${(props) => props.theme.align.flexStart};
  width: inherit;
  margin: 2rem 0;
  @media ${(props) => props.theme.device.mobile} {
    margin-left: 1rem;
  }
`;
// 상세정보 속성 박스
const InfoBox = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  margin: 2rem 2rem 2rem 0;
  width: 60rem;
  // 상세정보 제목
  > :first-child {
    margin: 1rem;
    font-size: 3rem;
    font-weight: 900;
  }
`;
// 음원 설명 박스
const AboutNft = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 60rem;
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