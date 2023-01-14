import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <SearchBar>
      <input />
      <SearchIcon />
    </SearchBar>
  );
};

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
    height: 3rem;
    font-size: 1.5rem;
    border: 1px solid white;
    border-right: none;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  > :last-child {
    width: 5rem;
    height: 3rem;
    cursor: pointer;
    border: 1px solid white;
    border-left: none;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
    @media ${(props) => props.theme.device.mobile} {
      width: 2rem;
    }
  }
`;
export default Search;
