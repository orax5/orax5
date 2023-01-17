import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import RegisterVote from "../components/RegisterVote";
import Pagination from "../components/Pagination";

const index = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    setPosts(datas);
  }, []);

  // 더미데이터
  const datas = [
    {
      id: 1,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "진행중",
    },
    {
      id: 1,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "진행중",
    },
    {
      id: 1,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "진행중",
    },
    {
      id: 1,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "진행중",
    },
    {
      id: 1,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "진행중",
    },
    {
      id: 1,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "진행중",
    },
    {
      id: 2,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "종료",
    },
    {
      id: 3,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "종료",
    },
    {
      id: 4,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "진행중",
    },
    {
      id: 5,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "진행중",
    },
    {
      id: 5,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "진행중",
    },
    {
      id: 5,
      title: "투표 제목",
      dueto: "2023-01-31",
      ownedNft: "해당 nft",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
      status: "종료",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <MainContainer>
      <div></div>
      <div>
        <HeadContainer>
          <h1>GOVERNANCE</h1>
          <RegisterBtn onClick={showModal}>등록하기</RegisterBtn>
        </HeadContainer>
        {modalOpen && <RegisterVote setModalOpen={setModalOpen} />}
        <VoteListWrap>
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <ListImage>이미지</ListImage>
                <th>제목</th>
                <th>해당 NFT</th>
                <th>종료일</th>
                {/* 종료일이 지나면 '상태 : 종료'로 변경 */}
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {datas.slice(offset, offset + limit).map((data, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <ItemImage>
                    <Image
                      src="/Img/NewJeansOMG.jpg"
                      alt="albumArt"
                      width={50}
                      height={50}
                    />
                  </ItemImage>
                  <ItemTitle
                    onClick={() => {
                      // 클릭 시 상세보기 페이지 이동
                      router.push(`/governance/${data.id}`);
                    }}
                  >
                    {data.title}
                  </ItemTitle>
                  <td>{data.ownedNft}</td>
                  <td>{data.dueto}</td>
                  <td>{data.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </VoteListWrap>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const HeadContainer = styled.div`
  ${(props) => props.theme.align.flexBetween}
  margin-bottom: 1rem;
  @media ${(props) => props.theme.device.mobile} {
    ${(props) => props.theme.align.flexCenterColumn}
  }
  > h1 {
    font-weight: 800;
    font-size: 3rem;
  }
`;
// 목록 감싸는 div
const VoteListWrap = styled.div`
  width: 80rem;
  font-size: 1.5rem;
  // 표 정렬 및 여백
  > table {
    width: 100%;
    line-height: 2rem;
    text-align: center;
  }
  // 항목 row 구분선
  > table > thead > tr > th {
    padding: 1rem;
    border-bottom: 1px solid white;
  }
`;
// 모바일 화면에서는 이미지를 보여주지 않음
const ListImage = styled.th`
  @media ${(props) => props.theme.device.mobile} {
    display: none;
  }
`;
const ItemImage = styled.td`
  > img:first-child {
    margin: 0 auto;
  }
  @media ${(props) => props.theme.device.mobile} {
    display: none;
  }
`;
// 제목 강조
const ItemTitle = styled.td`
  cursor: pointer;
  font-weight: 800;
  &:hover {
    color: plum;
  }
`;
const RegisterBtn = styled.button`
  ${(props) => props.theme.button.basicBtn}
`;
export default index;
