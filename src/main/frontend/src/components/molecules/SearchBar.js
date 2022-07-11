import React from "react";
import styled from "styled-components";

function SearchBar() {
  return (
    <SearchBarBlock>
      <SearchInput />
    </SearchBarBlock>
  );
}

const SearchBarBlock = styled.div``;
const SearchInput = styled.input`
  border: 1px solid #cdcdcd;
  padding: 0.5rem 0.7rem;
  border-radius: 7px;
  outline: none;
`;

export default SearchBar;
