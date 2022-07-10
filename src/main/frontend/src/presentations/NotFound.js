import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Not Found 🥲</h1>
      <p>요청하신 페이지를 찾지 못 했습니다.</p>
      <button onClick={(e) => navigate('/')}>홈으로</button>
    </Container>
  );
}

export default NotFound;
