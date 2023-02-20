import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Image from "next/image";
import styled from "styled-components";
import Pagination from "../Pagination";
import ajyContract from "../../../hooks/ajyContract";
import { useWallet } from "../../../hooks/useWallet";

const FundingNft = () => {
  const tokenData = ajyContract();
  const wallet = useWallet();
  const router = useRouter();
  const [account, setAccount] = useState(null);

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
  const [isFailed, setIsFailed] = useState(false);
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    setAccount(wallet.info.account);
    setDatas(Items);
  }, []);

  const failHandler = () => {
    setIsFailed(!isFailed);
  };

  // 펀딩 실패시 유저가 환불하는 함수 
  const isRefund = async() => {
    await tokenData.Ftoken.isfalsedFundding(account,1);
    tokenData.Ftoken.on("isfalsedFunddingEvnet",(account, tokenId, value) => {
      console.log(account.toString());
      console.log(tokenId.toString());
      console.log(value.toString());
    })
  };

  return (
    <div>
      <MainItems>
        <button onClick={failHandler}>환불상태 오이오이</button>
        <ListWrap>
          {datas.slice(offset, offset + limit).map((data, idx) => (
            <ItemCard key={idx}>
              <div>
                <Image
                  src={`/Img/dummy/${data.img}.jpg`}
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
              <ItemPrice>{data.price}</ItemPrice>
              <BtnBox>
                {isFailed ? (
                  <div onClick={isRefund}>환불하기</div>
                ) : (
                  <div
                    onClick={() => {
                      router.push(`/marketplace/${data.id}`);
                    }}
                  >
                    상세보기
                  </div>
                )}
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
  > div:nth-child(3) {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`;
const ItemTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-left: 1rem;
`;
const ItemPrice = styled.div`
  margin-left: 1rem;
  font-size: 1.2rem;
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

export default FundingNft;
