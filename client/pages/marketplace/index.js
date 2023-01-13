import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../styles/global-style";
import Search from "../components/Search";

const index = () => {
  // 페이지 간 이동 시 Link 또는 useRouter 사용
  const router = useRouter();

  // 더미 데이터
  const datas = [
    { id: 1, title: "test_title", price: "0.234ETH" },
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
      {/* 검색창,필터는 다른 곳에서도 사용하므로 컴포넌트화 함 */}
      <Search />
      <ListWrap>
        {/* 배열 안 객체로 받아온 데이터를 map 돌려서 목록 생성 */}
        {datas?.map((data, idx) => (
          <ItemCard key={data.id}>
            <Image
              src="/Img/sample.jpg"
              alt="nft_list_image"
              width={268}
              height={268}
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <ItemTitle>{data.title}</ItemTitle>
            <ItemPrice>{data.price}</ItemPrice>
            <BtnBox>
              <button>찜하기</button>
              <button
                onClick={() => {
                  router.push(`/marketplace/${data.id}`);
                }}
              >
                상세보기
              </button>
            </BtnBox>
          </ItemCard>
        ))}
      </ListWrap>
    </PageContainer>
  );
};

const ListWrap = styled.div`
  width: inherit;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  gap: 2rem;
  place-items: center;
  @media ${(props) => props.theme.device.pc} {
    grid-template-columns: repeat(3, 2fr);
  }
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${(props) => props.theme.device.mobile} {
    grid-template-columns: 1fr;
  }
`;
// 카드 안의 내용 정렬
const ItemCard = styled.div`
  ${(props) => props.theme.align.flexCenterColumn};
  width: 18rem;
  height: 30rem;
  border-radius: 1rem;
  border: 1px solid white;

  @media ${(props) => props.theme.device.tablet} {
    width: inherit;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: inherit;
  }
`;
const ItemTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0.7rem;
`;
const ItemPrice = styled.div`
  font-size: 1.5rem;
`;

const BtnBox = styled.div`
  width: 15rem;
  margin-top: 1rem;
  ${(props) => props.theme.align.flexCenter}
  > button {
    ${(props) => props.theme.button.basicBtn}
    margin: 0.5rem;
  }
`;

export default index;
