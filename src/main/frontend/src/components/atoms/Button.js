/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const theme = {
  primary: "#3962e0",
  info: "#39aae0",
  danger: "#e03962",
  success: "#39e067",
};

const round = {
  rounded: 10,
  box: 0,
};

function Button({ color = "info", shape, children }) {
  return (
    <button
      css={css`
        background-color: ${theme[color]};
        color: white;
        border-radius: ${round[shape]}px;
        padding: 0.3rem 0.5rem;
        border: none;
        outline: none;
        transition: box-shadow 150ms ease-in-out;
        &:hover,
        &:focus-within {
          box-shadow: 0 0 0 3px ${theme[color]}55;
        }
        &:active {
          filter: brightness(80%);
        }
        cursor: pointer;
      `}>
      {children}
    </button>
  );
}

export default Button;
