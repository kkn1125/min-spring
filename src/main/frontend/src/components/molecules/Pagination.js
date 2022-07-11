import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Pagination({ currentPage, showLimit = 5, listLength = 0 }) {
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const totalPages = Math.ceil(listLength / showLimit);
  const isLast = currentPage === totalPages;

  useEffect(() => {
    setPages(new Array(totalPages).fill(0));
  }, [listLength]);

  return (
    <PaginationBlock>
      <button
        onClick={() =>
          navigate(`?page=${currentPage > 1 ? currentPage - 1 : 1}`)
        }>
        ◀️
      </button>
      {pages.map((page, idx) => (
        <button key={idx} onClick={() => navigate(`?page=${idx + 1}`)}>
          {idx + 1}
        </button>
      ))}
      <button
        onClick={() =>
          navigate(`?page=${isLast ? currentPage : currentPage + 1}`)
        }>
        ▶️
      </button>
    </PaginationBlock>
  );
}

const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export default Pagination;
