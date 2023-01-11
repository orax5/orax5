import Image from "next/image";
// import Link from "next/Link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { ListButton, PageContainer } from "../../styles/global-style";
import Search from "../components/Search";

const index = () => {
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
      <Search />
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
                router.push(`/marketplace/${data.id}`);
              }}
            >
              {data.title}
            </ItemTitle>
            <div>{data.price}</div>
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

export default index;
