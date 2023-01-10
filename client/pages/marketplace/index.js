import Image from "next/image";
// import Link from "next/Link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { ListButton, PageContainer } from "../../styles/global-style";

const index = () => {
  const router = useRouter();

  // 더미 데이터
  const datas = [
    { id: 1, title: "test_title" },
    { id: 2, title: "test_title" },
    { id: 3, title: "test_title" },
    { id: 4, title: "test_title" },
    { id: 5, title: "test_title" },
    { id: 6, title: "test_title" },
    { id: 7, title: "test_title" },
    { id: 8, title: "test_title" },
    { id: 9, title: "test_title" },
    { id: 10, title: "test_title" },
  ];

  return (
    <PageContainer>
      <ListWrap>
        {datas?.map((data, idx) => (
          <ItemCard key={data.id}>
            <Image
              src="/Img/sample.jpg"
              alt="sampleImg"
              width={230}
              height={230}
            />
            <ItemTitle
              onClick={() => {
                router.push(`/marketplace/${data.id}`);
              }}
            >
              {data.title}
            </ItemTitle>
            <BtnContainer>
              <button>찜하기</button>
              <button>구매하기</button>
            </BtnContainer>
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
  height: 25rem;
  border-radius: 1rem;
  padding-top: 2rem;
  border: 1px solid white;
`;

const ItemTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin: 0.7rem;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > button {
    border-radius: 0.5rem;
    border: 1px solid white;
    background-color: transparent;
    padding: 0.7rem;
    margin: 0 0.5rem;
  }
  > button:hover {
    color: black;
    background-color: white;
  }
`;

export default index;
