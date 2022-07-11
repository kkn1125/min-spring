import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../molecules/Pagination";
import SearchBar from "../molecules/SearchBar";

const showLimit = 5;

function Footer({listLength}) {
  const locate = useLocation();

  const [key, value] = locate.search.slice(1).split('=');
  const currentPage = parseInt(value);
  
  return (
    <FooterBlock>
      <SearchBar />
      <Pagination
        currentPage={currentPage}
        showLimit={showLimit}
        listLength={listLength}
      />
    </FooterBlock>
  );
}

const FooterBlock = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export default Footer;
