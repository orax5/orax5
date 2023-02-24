import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import ajyContract from "../../hooks/ajyContract";

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
    if (tokenData != null) {
      viewAll();
    }
  }, [tokenData]);

  const viewAll = async () => {
    const funddingCount = await tokenData.Dtoken.idsView();
    console.log(funddingCount.length);
    console.log("#$#$$#")
    const arr = [];
    for (let i = 1; i <= funddingCount.length; i++) {
      const metaData = await tokenData.Dtoken.tokenURI(i);
      const data = await tokenData.Dtoken.getTokenOwnerData(i);
      console.log(metaData)
      console.log(data)
      console.log("#$#$$#")
      fetch(metaData)
      .then(response => {
        console.log("response@@", response)
        return response.json();
      })
      .then(jsondata => {
        console.log("jsondata", jsondata)
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
  };

  // const metaData = "asdasd";

  // const getimage = async() => {
  //   console.log(metaData);
  //   fetch(metaData)
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(jsondata => console.log(jsondata));
  // }

  return (
    <MainContainer>
      <MainItems></MainItems>
      <MainItems>
        <Search />
        <FunctionNav>
          <SelectorFrame>
            <option value="전체">전체</option>
            <option value="진행">진행</option>
            <option value="종료">종료</option>
          </SelectorFrame>
          <SelectorFrame>
            <option value="추천">추천</option>
            <option value="인기">인기</option>
            <option value="펀딩액">펀딩액</option>
            <option value="마감임박">마감임박</option>
            <option value="최신">최신</option>
          </SelectorFrame>
        </FunctionNav>
        <ListWrap>
          {datas.map((data, idx) => (
            <ItemCard key={idx}>
              <div>
                <Image
                  src={data.img}
                  alt="funding_list_image"
                  width={250}
                  height={250}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
              </div>
              <ItemTitle>제목 : {data.title}</ItemTitle>
              <div>{data.category}</div>
              <ItemPrice>펀딩 가격 : {data.unitPrice} eth</ItemPrice>

              <BtnBox>
                <div
                  onClick={() => {
                    router.push(`/funding/${data.tokenId}`);
                  }}
                >
                  상세보기
                </div>
              </BtnBox>
            </ItemCard>
          ))}
        </ListWrap>
        <Pagination total={datas.length} limit={limit} page={page} setPage={setPage} />
      </MainItems>
      <MainItems></MainItems>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const MainItems = styled.div``;
// 필터와 펀딩등록하기 검색이 있는 기능모아놓은 네브바
const FunctionNav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  column-gap: 0.5rem;
  > button {
    ${(props) => props.theme.button.smallBtn}
  }
  > :nth-child(2) {
  }
  > :nth-child(3) {
  }
`;

// 선택규격 가로세로
const SelectorFrame = styled.select`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
`;
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
  @media ${(props) => props.theme.device.tablet}, ${(props) => props.theme.device.mobile} {
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

export default index;
