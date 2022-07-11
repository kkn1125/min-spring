import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListItemTitle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
`;

const ListItemTime = styled.div``;

const ListItemAuthor = styled.div``;

const ListItemBlock = styled.div`
  padding: 0.3rem 0.5rem;
`;

function ListItem({ id, title, author, regdate }) {
  return (
    <ListItemBlock>
      <ListWrap>
        <ListItemTitle to={`/blog/${id}`}>{title}</ListItemTitle>
        <ListItemTime>{regdate}</ListItemTime>
      </ListWrap>
      <ListItemAuthor>{author}</ListItemAuthor>
    </ListItemBlock>
  );
}

export default ListItem;
