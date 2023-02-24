// 소유 NFT 컴포넌트
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Pagination from "../Pagination";
import ajyContract from "../../../hooks/ajyContract";
import { useWeb3React } from "@web3-react/core";

const MyNft = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const tokenData = ajyContract();
  const { account } = useWeb3React();

  const router = useRouter();

  useEffect(() => {
    if (tokenData != null) {
      viewAll();
      console.log("나찾아봐랑");
    }
  }, [tokenData]);

  const viewAll = async () => {
    const funddingCount = await tokenData.Dtoken.idsView();
    console.log(funddingCount.length);
    const arr = [];
    for (let i = 1; i <= funddingCount.length; i++) {
      const metaData = await tokenData.Dtoken.tokenURI(i);
      const data = await tokenData.Dtoken.tbalanceOf(i);
      console.log(data);
      const fuddingData = await tokenData.Dtoken.getTokenOwnerData(i);
      if (parseInt(data) != 0) {
        fetch(metaData)
          .then((response) => {
            return response.json();
          })
          .then((jsondata) => {
            const funddingData = {
              tokenId: i,
              img: jsondata.properties.image.description,
              title: jsondata.title,
              category: jsondata.properties.category.description,
              balance: parseInt(data),
              going: fuddingData.isSuccess,
              endTime: parseInt(fuddingData.EndTime) * 1000,
            };
            arr.push(funddingData);
            if (funddingCount.length == i) {
              setDatas(arr);
              console.log(arr);
              console.log("asdasd");
            }
          });
      } else{
        if (funddingCount.length == i) {
          if(data == 0){
            setDatas(arr);
            console.log(arr);
            console.log("asdasd");
          }
        }
      }
    }
  };

  // 펀딩 실패시 유저가 환불하는 함수
  const isRefund = async (tokenId, going, endTime) => {
    if (endTime < Date.now()) {
      if (going == false) {
        await tokenData.Ftoken.isfalsedFundding(account, tokenId);
        tokenData.Ftoken.on("isfalsedFunddingEvnet", (account, tokenId, value) => {
          console.log(account.toString());
          console.log(tokenId.toString());
          console.log(value.toString());
        });
      } else {
        alert("펀딩에 성공한 건 환불이 안됩니다.");
      }
    } else if (endTime > Date.now()) {
      alert("아직 펀딩 진행중");
    }
  }

  // 펀딩 실패시 유저가 환불하는 함수 
  const isRefund = async(tokenId,going,endTime) => {

    if(endTime < Date.now()){
      if(going == false){
        await tokenData.Ftoken.isfalsedFundding(account,tokenId);
        tokenData.Ftoken.on("isfalsedFunddingEvnet",(account, tokenId, value) => {
          console.log(account.toString());
          console.log(tokenId.toString());
          console.log(value.toString());
        })
      }else{
        alert("펀딩에 성공한 건 환불이 안됩니다.");
      }
    }else if(endTime > Date.now()){
      alert("아직 펀딩 진행중");
    }
  };


  return (
    <div>
      <MainItems>
        <ListWrap>
          {datas.slice(offset, offset + limit).map((data, idx) => (
            <ItemCard key={idx}>
              <div>
                <Image
                  src={data.img}
                  alt="nft_list_image"
                  width={250}
                  height={250}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
              </div>
              <ItemTitle>{data.title} :#{data.tokenId}</ItemTitle>
              <div>{data.category}</div>
              <OwnedNumber>
                {"보유량 "}
                <span>{data.balance}</span>
              </OwnedNumber>
              <BtnBox>
                <div
                  onClick={() => {
                    router.push({
                      pathname: `/mypage/${data.tokenId}`,
                      query: { balance: data.balance, tokenId: data.tokenId },
                    });
                  }}
                >
                  {/* <div onClick={() => {router.push(`/mypage/${data.id}`);}}> */}
                  판매하기
                </div>
                <div
                  onClick={() => {
                    router.push(`/marketplace/${data.tokenId}`);
                  }}
                >
                  상세보기
                </div>
                <div onClick={() => {isRefund(data.tokenId, data.going, data.endTime)}}>
                  환불받기
                </div>
              </BtnBox>
            </ItemCard>
          ))}
        </ListWrap>
        <Pagination total={datas.length} limit={limit} page={page} setPage={setPage} />
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
