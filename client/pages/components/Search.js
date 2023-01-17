import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    // <SearchBar>
    //   <input />
    //   <SearchIcon />
    // </SearchBar>
    <SearchBox>
      <form action="">
        <SearchInput type="text" placeholder="Search "/>
        <SearchBtn>
          <CgSearch/>
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
`
const SearchBtn = styled.button`
  color: #EDEDED;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: black;
  border: solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SearchInput = styled.input`
  float: left;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  color: white;
  font-size: 15px;
  line-height: 40px;
  width: 0; 
  transition: 0.5s; 
`


// const SearchBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 30rem;
//   height: 3rem;
//   border-radius: 1rem;
//   margin-bottom: 1rem;
//   @media ${(props) => props.theme.device.pc} {
//     width: 30rem;
//   }
//   @media ${(props) => props.theme.device.tablet} {
//     width: 30rem;
//   }
//   @media ${(props) => props.theme.device.mobile} {
//     width: 15rem;
//   }
//   > :first-child {
//     width: inherit;
//     height: 3rem;
//     font-size: 1.5rem;
//     border: 1px solid white;
//     border-right: none;
//     border-bottom-left-radius: 1rem;
//     border-top-left-radius: 1rem;
//   }
//   > :last-child {
//     width: 5rem;
//     height: 3rem;
//     cursor: pointer;
//     border: 1px solid white;
//     border-left: none;
//     border-bottom-right-radius: 1rem;
//     border-top-right-radius: 1rem;
//     @media ${(props) => props.theme.device.mobile} {
//       width: 2rem;
//     }
//   }
// `;
export default Search;
