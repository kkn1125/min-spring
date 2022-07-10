import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "axios";

function Detail({ blogId }) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios("/api/detail/" + blogId).then((res) => {
      setDetail(res.data);
    });
  }, []);

  return (
    <Container>
      <div>
        <div>
          <span>{detail.title}</span>
          <span>{detail.regdate}</span>
        </div>
        <div>{detail.content}</div>
        <div>{detail.author}</div>
      </div>
    </Container>
  );
}

export default Detail;
