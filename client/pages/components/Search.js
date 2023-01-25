import React from "react";
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <SearchBox>
      <form action="">
        <SearchInput type="text" placeholder="Search " />
        <SearchBtn>
          <CgSearch />
        </SearchBtn>
      </form>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  border: solid 1px gray;
  height: 40px;
  border-radius: 40px;
  > :hover input {
    width: 200px;
  }
`;
const SearchBtn = styled.button`
  color: #ededed;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: black;
  border: solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchInput = styled.input`
  float: left;
  padding-left: 0.5rem;
  background: none;
  border: none;
  outline: none;
  color: white;
  font-size: 15px;
  line-height: 40px;
  width: 0;
  transition: 0.5s;
`;

export default Search;
