import Link from "next/Link";
import Image from "next/image";
import { useRouter } from "next/router";
import React,{ useState } from "react";
import styled from "styled-components";
//  promise resolve 과정 없이도 변수에 할당할 수 있도록 해준다
import Offers from "../components/Offers";

const deatil = () => {
  const router = useRouter();
  // console.log(router.query.amount)        
  const amount = router.query.amount; // props로 전달받는 amount

  const [unsigned, setUnsigned] = useState(false);
  const [inputSaleAmount,  setInputSaleAmount] = useState(null);

  const getSaleAmountValue = (e) => {
    setInputSaleAmount(e.target.value);
  }

  const unsignedToggleHandler = () => {
    setUnsigned(!unsigned)
  }

  

  const SaleHandler = () => {
    if(inputSaleAmount == 0 || inputSaleAmount== null){
      alert("0과 공백은 입력 불가능합니다.")
    } else if(inputSaleAmount <= amount ){
      alert("판매등록되었습니다.")
    }  else {
      alert("판매수량이 보유량보다 높습니다.")
    }
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
                <tr>
                  <td>수량 (보유:{amount})</td>
                  <td>
                    <NumSelector type="number" onChange={getSaleAmountValue}/>
                  </td>
                </tr>
                <tr>
                  <td>가격</td>
                  <td>
                    <NumSelector type="number" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <PageBtn onClick={SaleHandler}>판매하기</PageBtn>
              <Link href="/streaming">
                <PageBtn>스트리밍</PageBtn>
              </Link>
              <PageBtn onClick={unsignedToggleHandler}>미체결내역</PageBtn>
            </div>
          </DetailBox>
        </DetailWrap>
        <InfoWrap>
          {unsigned && (
            <InfoBox>
              <div>미체결내역</div>
              <AboutNft>
                <div style={{display:"flex", justifyContent: "space-around"}}>
                  <div style={{color:"black"}}>수량</div>
                  <div style={{color:"black"}}>가격</div>
                  <CancleBtnn>취소</CancleBtnn>
                </div>
                <div style={{display:"flex", justifyContent: "space-around", alignItems: "center"}}>
                  <div style={{minWidth:"2rem", textAlign:"center"}}>1</div>
                  <div>100</div>
                  <CancleBtn>취소</CancleBtn>
                </div>
              </AboutNft>
            </InfoBox>
          )}
          <InfoBox>
            <div>음원 설명</div>
            <AboutNft>
              <div>음원 설명</div>
              <div>음원 설명음원 설명음원 설명</div>
            </AboutNft>
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
// 구매하기/스트리밍/ 미체결 버튼
const PageBtn = styled.button`
  ${(props) => props.theme.button.basicBtn};
  margin: 0.5rem;
  width: 8rem;
`;

// 취소버튼
const CancleBtn = styled.button`
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    background-color: transparent;
    font-size: 1.2rem;
    margin: 0.5rem;
    width: 4rem;
    :hover {
      background:white;
      color:black;
    }
`
// 칸 메꿀라고 야매로만듬
const CancleBtnn = styled.button`
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    background-color: transparent;
    font-size: 1.2rem;
    margin: 0.5rem;
    width: 4rem;
    cursor: default;
`

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
    padding-right: 1rem;
  }
  // 박스 내용
  > :last-child {
    width: inherit;
    height: auto;
    padding: 1rem;
  }
`;

export default deatil;