import React from "react";
import styled from "styled-components";

const Pagination = ({ total, limit, page, setPage }) => {
  // (총 게시물 수 / 페이지 당 게시물 수)
  const numPages = Math.ceil(total / limit);
  return (
    <PagingArea>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        ‹
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        ›
      </Button>
    </PagingArea>
  );
};

const PagingArea = styled.div`
  ${(props) => props.theme.align.flexCenter}
  gap: 0.5rem;
  margin: 3rem;
`;
const Button = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 800;
  &[disabled] {
    display: none;
  }
  // 활성화 된 페이지 표시
  &[aria-current] {
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    background: plum;
    border-radius: 50%;
    cursor: revert;
    transform: revert;
  }
`;
export default Pagination;
