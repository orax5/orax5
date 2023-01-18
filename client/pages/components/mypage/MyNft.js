// 소유 NFT 컴포넌트
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import SaleModal from "./SaleModal";
import Pagination from "../Pagination";

const MyNft = () => {
  // 더미 데이터
  const Items = [
    { img: "1", id: 1, title: "test_title", price: "0.234ETH", amount: 2 },
    { img: "2", id: 2, title: "test_title", price: "0.234ETH", amount: 4 },
    { img: "3", id: 3, title: "test_title", price: "0.234ETH", amount: 11 },
    { img: "4", id: 4, title: "test_title", price: "0.234ETH", amount: 49 },
    { img: "5", id: 5, title: "test_title", price: "0.234ETH", amount: 32 },
    { img: "6", id: 6, title: "test_title", price: "0.234ETH", amount: 77 },
    { img: "7", id: 7, title: "test_title", price: "0.234ETH", amount: 84 },
    { img: "8", id: 8, title: "test_title", price: "0.234ETH", amount: 9 },
    { img: "9", id: 9, title: "test_title", price: "0.234ETH", amount: 33 },
    { img: "10", id: 10, title: "test_title", price: "0.234ETH", amount: 33 },
    { img: "11", id: 11, title: "test_title", price: "0.234ETH", amount: 14 },
    { img: "12", id: 12, title: "test_title", price: "0.234ETH", amount: 33 },
    { img: "13", id: 13, title: "test_title", price: "0.234ETH", amount: 6 },
  ];
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [modalOpen, setModalOpen] = useState(false); // 클릭했을때 트루폴스 반복
  const [id, setId] = useState(null);
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  // onClick 메서드
  const showModalHandler = (id, amount) => {
    setId(id);
    setAmount(amount);
    setModalOpen(!modalOpen); // 클릭했을때 트루폴스 반복
  };

  useEffect(() => {
    setDatas(Items);
  }, []);
  return (
    <div>
      <MainItems>
        <ListWrap>
          {datas.slice(offset, offset + limit).map((data, idx) => (
            <ItemCard key={idx}>
              <div>
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
              </div>
              <ItemTitle>{data.title}</ItemTitle>
              <OwnedNumber>
                {"보유량 "}
                <span>{data.amount}</span>
              </OwnedNumber>
              <BtnBox>
                <div onClick={() => showModalHandler(data.id, data.amount)}>
                  판매하기
                </div>
                <div
                  onClick={() => {
                    router.push(`/marketplace/${data.id}`);
                  }}
                >
                  상세보기
                </div>
              </BtnBox>
            </ItemCard>
          ))}
          {modalOpen && <SaleModal id={id} amount={amount} />}
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
  grid-gap: 2rem;
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
  ${(props) => props.theme.align.flexStart};
  width: inherit;
  height: inherit;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 2px rgba(148, 148, 148, 0.26);

  @media ${(props) => props.theme.device.tablet} {
    width: inherit;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: inherit;
  }
  > div:first-child {
    width: 100%;
    height: inherit;
    overflow: hidden;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  > div:hover img {
    transform: scale(1.2);
    transition: transform 0.3s;
  }
  & img {
    transform: scale(1);
    transition: transform 0.3s;
  }
`;
const ItemTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-left: 1rem;
`;
const OwnedNumber = styled.div`
  margin: 0.5rem 0 0 1rem;
  font-size: 1.2rem;
  > span {
    font-weight: 900;
    color: plum;
  }
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 16.7rem;
  height: 2rem;
  background-color: #171717;
  margin-top: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  > div {
    cursor: pointer;
  }
  > div:hover {
    color: plum;
  }
`;

export default MyNft;
