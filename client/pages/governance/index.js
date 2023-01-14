import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PageContainer } from "../../styles/global-style";
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
    <PageContainer>
      <RegisterBtn onClick={showModal}>등록하기</RegisterBtn>
      <VoteListWrap>
        {modalOpen && <RegisterVote setModalOpen={setModalOpen} />}

        {datas.map((data, idx) => (
          <VoteItems key={idx}>
            <div>
              <ContentHeader>
                <div
                  onClick={() => {
                    // 클릭 시 상세보기 페이지 이동
                    router.push(`/governance/${data.id}`);
                  }}
                >
                  {data.title}
                </div>
                <div>종료일 : {data.dueto}</div>
              </ContentHeader>
              <ContentBody>
                <div>{data.ownedNft}</div>
              </ContentBody>
            </div>
            <div>
              <Image
                src="/Img/NewJeansOMG.jpg"
                alt="albumArt"
                width={200}
                height={200}
              />
            </div>
          </VoteItems>
        ))}
      </VoteListWrap>
    </PageContainer>
  );
};

const RegisterBtn = styled.button`
  ${(props) => props.theme.button.basicBtn}
`;
const VoteListWrap = styled.div`
  width: inherit;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 2rem;
  place-items: center;
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
const SubPageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 4rem 0 1rem 5rem;
`;

// const VoteListWrap = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 5fr);
//   justify-items: center;
//   row-gap: 1.5rem;
//   font-size: 1.5rem;
// `;

const VoteItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 38rem;
  height: 17rem;
  padding: 2rem;
  border: 1px solid white;
  border-radius: 1rem;
`;
const ContentHeader = styled.div`
  margin: 0.5rem;
  > div {
    ${(props) => props.theme.align.flexCenter};
  }
  > :first-child {
    cursor: pointer;
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }
  & input {
    width: 10rem;
    height: 2rem;
    margin-left: 1rem;
  }
`;

const ContentBody = styled.div`
  margin: 0.5rem;

  > div {
    ${(props) => props.theme.align.flexCenter};
  }
  & select {
    width: 20rem;
    height: 2rem;
    margin-left: 1rem;
  }
`;

export default index;
