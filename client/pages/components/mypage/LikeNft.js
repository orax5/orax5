// 소유 NFT 컴포넌트
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Pagination from "../Pagination";

const LikeNft = () => {
  const router = useRouter();

  // 더미 데이터
  const Items = [
    { img: "1", id: 1, title: "test_title", price: "0.234ETH" },
    { img: "2", id: 2, title: "test_title", price: "0.234ETH" },
    { img: "3", id: 3, title: "test_title", price: "0.234ETH" },
    { img: "4", id: 4, title: "test_title", price: "0.234ETH" },
    { img: "5", id: 5, title: "test_title", price: "0.234ETH" },
    { img: "6", id: 6, title: "test_title", price: "0.234ETH" },
    { img: "7", id: 7, title: "test_title", price: "0.234ETH" },
    { img: "8", id: 8, title: "test_title", price: "0.234ETH" },
    { img: "9", id: 9, title: "test_title", price: "0.234ETH" },
    { img: "10", id: 10, title: "test_title", price: "0.234ETH" },
    { img: "11", id: 10, title: "test_title", price: "0.234ETH" },
    { img: "12", id: 10, title: "test_title", price: "0.234ETH" },
    { img: "13", id: 10, title: "test_title", price: "0.234ETH" },
  ];
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    setDatas(Items);
  }, []);
  return (
    <div>
      <MainItems>
        <ListWrap>
          {datas.slice(offset, offset + limit).map((data, idx) => (
            <ItemCard key={idx}>
              <Image
                src={`/Img/dummy/${data.img}.jpg`}
                alt="nft_list_image"
                width={268}
                height={268}
                style={{
                  marginTop: "-0.9rem",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
              <ItemTitle>{data.title}</ItemTitle>
              <ItemPrice>{data.price}</ItemPrice>
              <BtnBox>
                <button>Purchase</button>
                <button
                  onClick={() => {
                    router.push(`/marketplace/${data.id}`);
                  }}
                >
                  Detail
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
        />
      </MainItems>
    </div>
  );
};

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

export default LikeNft;
