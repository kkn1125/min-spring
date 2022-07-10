import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Select = styled.select(() => ({
  // css
  borderWidth: 1,
  borderColor: "#cdcdcd",
  borderStyle: "solid",
}));

const Option = styled.option(({})=>({
}));

function SelectBox({ name, options }) {
  // logic
  
  return (
    <Select>
      {options.map(({ value, option }, idx) => (
        <Option
          key={value}
          value={value}
          >
          {option}
        </Option>
      ))}
    </Select>
  );
}

export default SelectBox;
