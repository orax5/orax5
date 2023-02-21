import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import  ajyContract  from "../../hooks/ajyContract";

const index = () => {
  const router = useRouter();

  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // contract, 지갑 정보 가져오기
  const tokenData = ajyContract();

  useEffect(() => {
    console.log(tokenData);
    if(tokenData != null){
      viewAll();
    }
  }, [tokenData]);

    const viewAll = async() => {
    const funddingCount = await tokenData.Dtoken.idsView();

    const arr = [];
    for(let i = 1; i <= funddingCount.length; i++){
      const metaData = await tokenData.Dtoken.tokenURI(i);
      const data = await tokenData.Dtoken.getTokenOwnerData(i);
      fetch(metaData)
      .then(response => {
        return response.json();
      })
      .then(jsondata => {
        console.log(jsondata.properties.image.description)
        const funddingData = { 
          tokenId : i,
          img : jsondata.properties.image.description,
          title : jsondata.title,
          category : jsondata.properties.category.description,
          unitPrice : (parseInt(data.UnitPrice) / (10 ** 18)),
          going : data.isSuccess,
          
        }
        arr.push(funddingData);
        if(arr.length == funddingCount.length){
          setDatas(arr);
        }
      });
    }
    console.log(arr);
  }

  return (
    <MainContainer>
      <MainItems></MainItems>
      <MainItems>
        <Search />
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
              <ItemTitle>{data.title}</ItemTitle>
              <ItemPrice>{data.category}</ItemPrice>
              <BtnBox>
                <div
                  onClick={() => {
                    router.push(`/marketplace/${data.tokenId}`);
                  }}
                >
                  상세보기
                </div>
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
  grid-gap: 2rem;
  margin-top: 2.5rem;
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
  ${(props) => props.theme.align.flexStart};
  width: inherit;
  height: inherit;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 2px rgba(148, 148, 148, 0.26);
  @media ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile} {
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

export default index;