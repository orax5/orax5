import React from "react";
import styled from "styled-components";

const Pagination = ({ total, limit, page, setPage }) => {
  // (총 게시물 수 / 페이지 당 게시물 수)
  const numPages = Math.ceil(total / limit);
  return (
    <PagingArea>
      <Button onClick={() => setPage((page = 1))} disabled={page === 1}>
        «
      </Button>
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
      <Button onClick={() => setPage(numPages)} disabled={page === numPages}>
        »
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
  background: black;
  color: white;
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  &[disabled] {
    display: none;
  }
  &[aria-current] {
    background: white;
    color: black;
    cursor: revert;
    transform: revert;
  }
`;
export default Pagination;
