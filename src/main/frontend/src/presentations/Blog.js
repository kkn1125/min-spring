import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/atoms/Button";
import ListItem from "../components/atoms/ListItem";
import SelectBox from "../components/atoms/SelectBox";
import Container from "../components/Container";
import Utils from "../components/molecules/Utils";
import Footer from "../components/organisms/Footer";

const limit = 5;

function Blog() {
  const locate = useLocation();
  const [key, value] = locate.search.slice(1).split("=");
  const [blogList, setBlogList] = useState([]);

  const currentPage = parseInt(value);

  useEffect(() => {
    axios("/api/blogs").then((res) => {
      setBlogList(res.data);
    });
  }, []); // 1번

  return (
    <Container>
      <Utils />
      {blogList.length === 0 && <div>등록된 포스팅이 없습니다 🥲</div>}
      {blogList
        .slice((currentPage - 1) * limit, currentPage * limit)
        .map(({ id, title, regdate, author }, idx) => (
          <ListItem
            key={title + idx}
            id={id}
            title={title}
            regdate={regdate}
            author={author}
          />
        ))}
      <Footer listLength={blogList.length} />
    </Container>
  );
}

export default Blog;
