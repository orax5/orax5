// 소유 NFT 컴포넌트
import React from 'react'
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

const LikeNft = () => {
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
    <div>
       <MainItems>
        <ListWrap>
          {datas?.map((data, idx) => (
            <ItemCard key={data.id}>
              <Image
                src="/Img/sample.jpg"
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
      </MainItems>
    </div>
  )
}

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

export default LikeNft