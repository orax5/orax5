import Link from "next/Link";
import React from "react";
import styled from "styled-components";

const Filter = () => {
  return (
    <FunctionNav>
      <button>
        <Link href="/funding/register" style={{ background: "transparent" }}>
          펀딩등록
        </Link>
      </button>
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
  );
};

// 필터와 펀딩등록하기 검색이 있는 기능모아놓은 네브바
const FunctionNav = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 1rem;
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
export default Filter;
