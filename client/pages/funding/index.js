import Image from "next/image";
import Link from "next/Link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import {  PageContainer } from "../../styles/global-style";
import Search from "../components/Search";

const index = () => {
  const router = useRouter();

  // 더미 데이터
  const datas = [
    { id: 1, title: "박진영R&B", price: "0.234ETH" },
    { id: 2, title: "test_title", price: "0.234ETH" },
    { id: 3, title: "test_title", price: "0.234ETH" },
    { id: 4, title: "test_title", price: "0.234ETH" },
    { id: 5, title: "test_title", price: "0.234ETH" },
    { id: 6, title: "test_title", price: "0.234ETH" },
    { id: 7, title: "test_title", price: "0.234ETH" },
    { id: 8, title: "test_title", price: "0.234ETH" },
    { id: 9, title: "test_title", price: "0.234ETH" },
    { id: 10, title: "test_title", price: "0.234ETH" },
  ];

  return (
    <PageContainer>

       <Search />

       <FunctionNav>
        <button>
          <Link href="/funding/register" style={{background:"transparent"}}>
          펀딩등록
          </Link>
        </button>
        <SelectorFrame>
          <option value="전체">전체</option>
          <option value="진행">진행</option>
          <option value="종료">종료</option>
        </SelectorFrame>
        <SelectorFrame>
          <option value="추천">추천</option>
          <option value="인기">인기</option>
          <option value="펀딩액">펀딩액</option>
          <option value="마감임박">마감임박</option>
          <option value="최신">최신</option>
        </SelectorFrame>
       </FunctionNav>
       
      <ListWrap>
        {datas?.map((data, idx) => (
          <ItemCard key={data.id}>
            {/* 좋아요 아이콘, onclick함수 만들어야 됨 */}
            <Image
              src="/Img/heart_off.png"
              alt="LikedIcon"
              width={20}
              height={20}
              style={{
                position: "absolute",
                margin: "1rem -12rem 0 0",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            />
            <Image
              src="/Img/sample.jpg"
              alt="sampleImg"
              width={230}
              height={230}
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <ItemTitle
              onClick={() => {
                router.push(`/funding/${data.id}`);
              }}
            >
              {data.title}
            </ItemTitle>
            <div>{data.price}</div>
            <div>가요{"⠂"}R&B</div>
          </ItemCard>
        ))}
      </ListWrap>
    </PageContainer>
  );
};

const ListWrap = styled.div`
  /* ${(props) => props.theme.align.flexCenter};
  flex-wrap: wrap; */
  width: inherit;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  row-gap: 2rem;
  justify-items: center;
  align-content: center;
`;

const ItemCard = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: inherit;
  height: 21rem;
  border-radius: 1rem;
  border: 1px solid white;
  &:hover {
    // 구매하기 버튼 보여지게
  }
`;

const ItemTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin: 0.7rem;
  cursor: pointer;
`;

// 필터와 펀딩등록하기 검색이 있는 기능모아놓은 네브바 
const FunctionNav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  > :nth-child(1){
    cursor: pointer;
    color: black;
    width: 5rem;
    height: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    :hover{
      background-color: black;
      color: white;
      border: solid 1px white;
      transition: 0.5s;
    }
  }   
  > :nth-child(2){

  }
  > :nth-child(3){
    
  }
`

// 선택규격 가로세로
const SelectorFrame = styled.select`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
`;


export default index;
