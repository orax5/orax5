import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <SearchWrap>
      <SearchBar>
        <input />
        <SearchIcon />
      </SearchBar>
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30rem;
  height: 3rem;
  border: 1px solid white;
  border-radius: 1rem;

  > :first-child {
    width: inherit;
    height: 2.9rem;
    font-size: 1.5rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  > :last-child {
    width: 5rem;
    cursor: pointer;
    background-color: transparent;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;
export default Search;
