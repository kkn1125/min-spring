import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../components/atoms/Button";
import SelectBox from "../components/atoms/SelectBox";
import Container from "../components/Container";

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

function Blog() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    axios("/api/blogs").then((res) => {
      setBlogList(res.data);
    });
  }, []);

  return (
    <Container>
      <SelectBox options={selectFilter} />
      <Button color='info' shape='box'>
        등록
      </Button>
      
      {blogList.length === 0 && <div>등록된 포스팅이 없습니다 🥲</div>}
      {blogList.map(({ title, regdate, content, author }) => (
        <div key={regdate}>
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
