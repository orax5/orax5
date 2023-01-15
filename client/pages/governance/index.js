import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import RegisterVote from "../components/RegisterVote";

const index = () => {
  const router = useRouter();

  // 더미데이터
  const datas = [
    {
      id: 1,
      title: "투표 안건 제목",
      dueto: "2023-01-31",
      ownedNft: "해당하는 nft이름",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
    },
    {
      id: 2,
      title: "투표 안건 제목",
      dueto: "2023-01-31",
      ownedNft: "해당하는 nft이름",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
    },
    {
      id: 3,
      title: "투표 안건 제목",
      dueto: "2023-01-31",
      ownedNft: "해당하는 nft이름",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
    },
    {
      id: 4,
      title: "투표 안건 제목",
      dueto: "2023-01-31",
      ownedNft: "해당하는 nft이름",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
    },
    {
      id: 5,
      title: "투표 안건 제목",
      dueto: "2023-01-31",
      ownedNft: "해당하는 nft이름",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
    },
    {
      id: 5,
      title: "투표 안건 제목",
      dueto: "2023-01-31",
      ownedNft: "해당하는 nft이름",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
    },
    {
      id: 5,
      title: "투표 안건 제목",
      dueto: "2023-01-31",
      ownedNft: "해당하는 nft이름",
      content: "거버넌스 내용 이런거 이런거 바꾸자 등등",
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
        <RegisterBtn onClick={showModal}>등록하기</RegisterBtn>
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
              </tr>
            </thead>
            <tbody>
              {datas.map((data, idx) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        </VoteListWrap>
      </div>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
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
    color: yellow;
  }
`;
const RegisterBtn = styled.button`
  ${(props) => props.theme.button.basicBtn}
`;
export default index;
