import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import RegisterVote from "../components/RegisterVote";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import ajyContract from "../../hooks/ajyContract";
import { useWallet } from "../../hooks/useWallet";

const index = () => {
  const tokenData = ajyContract();
  const wallet = useWallet();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [account, setAccount] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const [votingList, setVotingList] = useState([]);

  useEffect(() => {
    setAccount(wallet.info.account);
    if (tokenData != null) {
      viewVoting();
      submit();
    }
  }, []);

  const submit = async (tokenId, date, changeDay) => {
    console.log(tokenId, date, changeDay);
    await tokenData.Dtoken.startVoting(tokenId, date, changeDay);
    setList(tokenId);
  };

  async function setList(tokenId) {
    const tokenTime = await tokenData.Dtoken.getVotingDate(tokenId);
    if (parseInt(tokenTime.time) == 0) {
      setTimeout(() => {
        console.log("거버넌스 등록중");
        setList(tokenId);
      }, 3000);
    } else {
      viewVoting();
    }
  }

  // 거버넌스 리스트 보여주는 함수
  const viewVoting = async () => {
    console.log(account);
    const listNumber = await tokenData.Dtoken.idsView();
    const arr = [];
    let num = 1;
    for (let i = 1; i <= listNumber.length + 1; i++) {
      // 음원 초기정보 가져와서 펀딩 기간이 남아있는 펀딩만 리스트에 담아서 거버넌스 투표현황을 보여준다.
      const end = await tokenData.Dtoken.getTokenOwnerData(i);
      const endTime = parseInt(end.EndTime);
      if (endTime * 1000 > Date.now()) {
        const tokenTime = await tokenData.Dtoken.getVotingDate(i);

        const now = Date.now();
        const tokenJsTime = parseInt(tokenTime.time) * 1000;
        var year = new Date(tokenJsTime).getFullYear().toString().slice(-2); //년도 뒤에 두자리
        var month = ("0" + (new Date(tokenJsTime).getMonth() + 1)).slice(-2); //월 2자리 (01, 02 ... 12)
        var day = ("0" + new Date(tokenJsTime).getDate()).slice(-2); //일 2자리 (01, 02 ... 31)
        if (0 < tokenJsTime && tokenJsTime > now) {
          const votingListView = {
            id: num,
            title: "펀딩 기간 늘리기",
            dueto: `20${year}-${month}-${day}`,
            ownedNft: i,
            content: parseInt(tokenTime.date),
            status: "진행중",
          };
          arr.push(votingListView);
        } else if (0 < tokenJsTime && tokenJsTime < now) {
          const votingListView = {
            id: num,
            title: "펀딩 기간 늘리기",
            dueto: `20${year}-${month}-${day}`,
            ownedNft: i,
            content: parseInt(tokenTime.date),
            status: "종료",
          };
          arr.push(votingListView);
        }
        num++;
      }
    }
    setVotingList(arr);
  };

  const endVoting = async (tokenId) => {
    // 이미 투표 결과가 실행 됐는지 확인
    const votingResult = await tokenData.Dtoken.getVotingDate(parseInt(tokenId));
    // 현재까지 투표수 가져오기
    const votingNum = await tokenData.Dtoken.getVotingCount(parseInt(tokenId));
    const count = parseInt(votingNum);
    // 현재까지 펀딩된 수 가져오기
    const getBalance = await tokenData.Dtoken.tbalanceOf(parseInt(tokenId));
    const Balance = parseInt(getBalance);
    if (Balance != 0) {
      let agree1 = 0;
      let disagree1 = 0;

      for (let i = 1; i <= count; i++) {
        const voting = await Dtoken.getVoting(parseInt(tokenId), i);
        if (voting.result == true) {
          agree1 = agree1 + parseInt(voting.Amount);
        } else if (voting.result == false) {
          disagree1 = disagree1 + parseInt(voting.Amount);
        }
      }
      if (agree1 > disagree1) {
        if (votingResult.result == false) {
          await Dtoken.endVoting(parseInt(tokenId), true);
          alert("투표 가결");
        } else {
          alert("이미 가결 된 투표입니다.");
        }
      } else {
        alert("투표 부결");
      }
    } else {
      alert("해당 음원 nft를 보유하고 있지 않습니다.");
    }
  };

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
        {modalOpen && <RegisterVote submit={submit} setModalOpen={setModalOpen} modalOpen={modalOpen} />}
        <VoteListWrap>
          <table>
            <thead>
              <tr>
                <th onClick={asd}>번호</th>
                <ListImage>이미지</ListImage>
                <th>제목</th>
                <th>내용</th>
                <th>해당 NFT</th>
                <th>종료일</th>
                {/* 종료일이 지나면 '상태 : 종료'로 변경 */}
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {votingList.slice(offset, offset + limit).map((data, idx) => (
                <tr key={idx}>
                  <td>{data.id}</td>
                  <ItemImage>
                    <Image src="/Img/91.jpg" alt="albumArt" width={50} height={50} />
                  </ItemImage>
                  <ItemTitle
                    onClick={() => {
                      // 클릭 시 상세보기 페이지 이동
                      router.push(`/governance/${data.ownedNft}`);
                    }}
                  >
                    {data.title}
                  </ItemTitle>
                  <td>{data.content}일 연장</td>
                  <td>{data.ownedNft}</td>
                  <td>{data.dueto}</td>
                  {data.status == "진행중" ? (
                    <td onClick={() => endVoting(data.ownedNft)}>{data.status}</td>
                  ) : (
                    <td>{data.status}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </VoteListWrap>
        <Pagination total={posts.length} limit={limit} page={page} setPage={setPage} />
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
