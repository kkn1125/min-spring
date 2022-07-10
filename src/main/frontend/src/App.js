/** @jsxImportSource @emotion/react */
import { Routes, Route, Link } from "react-router-dom";
import Blog from "./presentations/Blog";
import Detail from "./presentations/Detail";
import Home from "./presentations/Home";
import NotFound from "./presentations/NotFound";
import { css } from "@emotion/react";

const menuForm = (name, path) => ({ name, path });

const menuList = [menuForm("home", "/"), menuForm("blog", "/blog")];

function App() {
  return (
    <div>
      <nav css={css`
        display: flex;
        gap: 1rem;
        padding: 1rem;
        & a {
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
          text-transform: uppercase;
        }
      `}>
        {menuList.map(({ name, path }) => (
          <Link key={name} to={path}>
            {name}
          </Link>
        ))}
      </nav>
      <hr />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:blogId' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
