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
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30rem;
  height: 3rem;
  border-radius: 1rem;
  @media ${(props) => props.theme.device.pc} {
    width: 30rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 30rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 15rem;
  }
  > :first-child {
    width: inherit;
    height: 2.9rem;
    font-size: 1.5rem;
    border: 1px solid white;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  > :last-child {
    width: 5rem;
    height: 3rem;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid white;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 2rem;
    }
  }
`;
export default Search;
