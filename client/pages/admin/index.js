import React, { useState, useEffect } from "react";
import AdminNav from "./../components/AdminNav";
import styled from "styled-components";
import Recognize from "./Recognize";
// 아이콘
import SwapVertIcon from "@mui/icons-material/SwapVert";

const index = () => {
  // 검색필터
  const [userInput, setUserInput] = useState("");
  console.log(userInput);
  // 입력값을 가져와서 소문자로변경
  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const [modalOpen, setModalOpen] = useState(false); // 클릭했을때 트루폴스 반복
  // onClick 메서드
  const showModalHandler = (id, amount) => {
    setModalOpen(!modalOpen); // 클릭했을때 트루폴스 반복
  };

  const datas = [
    {
      name: "사진스힙합",
      category: "힙합",
      scale: "0.123",
      date: "23.01.12",
      content: "힙합블라",
    },
    {
      name: "나진스댄스",
      category: "댄스",
      scale: "0.456",
      date: "22.12.13",
      content: "댄스블라",
    },
    {
      name: "다진스RnB",
      category: "RnB",
      scale: "0.789",
      date: "19.12.31",
      content: "알엔비블라",
    },
    {
      name: "라진스발라드",
      category: "발라드",
      scale: "1.24",
      date: "03.05.07",
      content: "발라드블라",
    },
    {
      name: "마진스팝",
      category: "팝",
      scale: "2.24",
      date: "18.04.02",
      content: "팝블라",
    },
    {
      name: "뉴진스락",
      category: "락",
      scale: "4.44",
      date: "21.05.07",
      content: "락블라",
    },
    {
      name: "큐락비락",
      category: "락",
      scale: "1.44",
      date: "21.12.07",
      content: "락블라",
    },
    {
      name: "블락비댄스",
      category: "댄스",
      scale: "2.44",
      date: "21.01.07",
      content: "락블라",
    },
    {
      name: "비락비발라드",
      category: "발라드",
      scale: "10.44",
      date: "22.06.07",
      content: "락블라",
    },
    {
      name: "블락비힙합",
      category: "힙합",
      scale: "0.44",
      date: "21.07.07",
      content: "락블라",
    },
  ];

  // 정렬
  const [nameSort, setNameSort] = useState(datas);
  // 정렬 핸들러
  const sortNameHandler = () => {
    const _nameSort = [...nameSort].sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    );
    setNameSort(_nameSort);
  };
  // 필터
  const searched = nameSort.filter((data) =>
    data.name.toLowerCase().includes(userInput)
  );

  return (
    <MainContainer>
      <div></div>
      <FlexWrap>
        <AdminNav />
        <ContainerBoard>
          <h1 style={{ fontSize: "2em", marginBottom: "0.5rem" }}>
            펀딩허락테이블
          </h1>
          <p style={{ marginBottom: "1rem" }}>신중하게 허락해라</p>
          <div>
            <div style={{ padding: "1rem" }}>Data table Example</div>
            <Row>
              <div>
                <label htmlFor="">
                  {"Show "}
                  <select name="" id="">
                    <option value="">10</option>
                    <option value="">25</option>
                    <option value="">50</option>
                    <option value="">100</option>
                  </select>{" "}
                  {"entries"}
                </label>
              </div>
              <div>
                <label htmlFor="">{"Search:"}</label>
                <input type="text" placeholder="Search" onChange={getValue} />
              </div>
            </Row>
          </div>
          <div>
            <Table style={{ display: "table", width: "100%" }}>
              <thead>
                <tr>
                  <th
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Name</div>
                    <div>
                      <button onClick={sortNameHandler}>
                        <SwapVertIcon />
                      </button>
                    </div>
                  </th>
                  <th>Category</th>
                  <th>Funding scale</th>
                  <th>Start Date</th>
                  <th>Content</th>
                  {modalOpen && <Recognize />}
                </tr>
              </thead>
              <tbody>
                {searched.map((data, idx) => (
                  <tr key={data.name} onClick={showModalHandler}>
                    <td>{data.name}</td>
                    <td>{data.category}</td>
                    <td>
                      {data.scale}
                      {"ETH"}
                    </td>
                    <td>{data.date}</td>
                    <td>{data.content}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </ContainerBoard>
      </FlexWrap>
      <div></div>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
  place-items: flex-start;
`;

const FlexWrap = styled.div`
  width: 75rem;
  display: flex;
`;
const ContainerBoard = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  > :nth-child(1) {
    font-size: 1.5rem;
  }
  > :nth-child(2) {
    font-size: 1.5rem;
  }
`;

const Table = styled.table`
  margin-top: 1rem;
  text-align: left;
  & thead {
    border-bottom: 2px solid #e3e6f0;
  }
  & th {
    padding: 0.75rem;
    font-size: larger;
    font-weight: 500;
  }
  & td {
    padding: 0.75rem;
  }
`;
export default index;
