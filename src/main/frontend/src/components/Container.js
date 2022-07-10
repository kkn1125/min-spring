/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

function Container({ children }) {
  return (
    <div
      css={css`
        width: 70%;
        margin: auto;
      `}>
      {children}
    </div>
  );
}

export default Container;
