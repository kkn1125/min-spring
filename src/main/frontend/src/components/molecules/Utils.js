import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import SelectBox from "../atoms/SelectBox";

const selectFilter = [
  {
    value: "1",
    option: "제목 순",
  },
  {
    value: "2",
    option: "저자 순",
  },
  {
    value: "3",
    option: "시간 순",
  },
];

function Utils() {
  return (
    <UtilsBlock>
      <div>
        <SelectBox options={selectFilter} />
        <Button color='info' shape='box'>
          등록
        </Button>
      </div>
    </UtilsBlock>
  );
}

const UtilsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Utils;
