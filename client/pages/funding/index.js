import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const index = () => {
  const router = useRouter();

  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    setDatas(Items);
  }, []);
  // 더미 데이터
  const Items = [
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
    <MainContainer>
      <MainItems></MainItems>
      <MainItems>
        <Search />
        <Filter />
        <ListWrap>
          {datas.slice(offset, offset + limit).map((data, idx) => (
            <ItemCard key={data.id}>
              <Image
                src="/Img/sample.jpg"
                alt="funding_list_image"
                width={268}
                height={268}
                style={{
                  marginTop: "-1rem",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
              <ItemTitle>{data.title}</ItemTitle>
              <ItemPrice>{data.price}</ItemPrice>
              <div>가요{"⠂"}R&B</div>
              <BtnBox>
                <button>찜하기</button>
                <button
                  onClick={() => {
                    router.push(`/funding/${data.id}`);
                  }}
                >
                  상세보기
                </button>
              </BtnBox>
            </ItemCard>
          ))}
        </ListWrap>
        <Pagination
          total={datas.length}
          limit={limit}
          page={page}
          setPage={setPage}
          shape="rounded"
        />
      </MainItems>
      <MainItems></MainItems>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const MainItems = styled.div``;

const ListWrap = styled.div`
  display: grid;
  grid-area: main;
  grid-template-columns: repeat(4, 2fr);
  place-items: center;
  grid-gap: 1rem;
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
  margin: 0.5rem;
`;
const ItemPrice = styled.div`
  font-size: 1.5rem;
`;
const BtnBox = styled.div`
  width: 15rem;
  ${(props) => props.theme.align.flexCenter}
  > button {
    ${(props) => props.theme.button.basicBtn}
    margin: 0.5rem;
  }
`;

export default index;
