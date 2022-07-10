import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";
import Container from "../components/Container";

function Home() {
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore
        at dolorum eaque quod soluta facere officia voluptatibus unde. Nihil
        alias nesciunt molestias. Quos reiciendis sint modi pariatur, voluptates
        veritatis!
        <Button color="primary" shape="box">test</Button>
        <Button shape="rounded" color="danger">test</Button>
        <Button shape="box" color="success">test</Button>
        <Button shape="rounded" color="info">test</Button>
      </p>
    </Container>
  );
}

export default Home;
