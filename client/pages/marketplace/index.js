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
    // { id: 9, title: "test_title", price: "0.234ETH" },
    // { id: 10, title: "test_title", price: "0.234ETH" },
  ];

  return (
    <PageContainer>
      {/* 검색창은 다른 곳에서도 사용하므로 컴포넌트화 함 */}
      <Search />
      <ListWrap>
        {/* 배열 안 객체로 받아온 데이터를 map 돌려서 목록 생성 */}
        {datas?.map((data, idx) => (
          <ItemCard key={data.id}>
            {/* 좋아요 아이콘 작동하게, onclick함수 만들어야 됨
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
            /> */}
            <Image
              src="/Img/sample.jpg"
              alt="nft_list_image"
              width={250}
              height={250}
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <ItemTitle
              onClick={() => {
                // 클릭 시 상세보기 페이지 이동
                router.push(`/marketplace/${data.id}`);
              }}
            >
              {data.title}
            </ItemTitle>
            <div>{data.price}</div>
            <BtnBox>
              <button>찜하기</button>
              <button>상세보기</button>
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
  height: 28rem;
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
  font-size: 2rem;
  font-weight: 800;
  margin: 0.7rem;
  cursor: pointer;
`;
const BtnBox = styled.div`
  /* font-size: 2rem;
  font-weight: 800;
  margin: 0.7rem;
  cursor: pointer; */
`;

export default index;
