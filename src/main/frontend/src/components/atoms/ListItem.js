import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListItemTitle = styled.div``;

const ListItemTime = styled.div``;

const ListItemAuthor = styled.div``;

const ListItemBlock = styled.div`
  padding: 0.3rem 0.5rem;
`;

function ListItem({ title, author, regdate }) {
  return (
    <ListItemBlock>
      <Wrap>
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemTime>{regdate}</ListItemTime>
      </Wrap>
      <ListItemAuthor>{author}</ListItemAuthor>
    </ListItemBlock>
  );
}

export default ListItem;
