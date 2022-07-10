import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";

function Blog() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    axios("/api/blogs").then((res) => {
      setBlogList(res.data);
    });
  }, []);

  return (
    <Container>
      {blogList.length === 0 && <div>등록된 포스팅이 없습니다 🥲</div>}
      {blogList.map(({ title, regdate, content, author }) => (
        <div>
          <div>
            <span>{title}</span>
            <span>{regdate}</span>
          </div>
          <div>{content}</div>
          <div>{author}</div>
        </div>
      ))}
    </Container>
  );
}

export default Blog;
