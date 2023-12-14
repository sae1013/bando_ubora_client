import React from "react";
import styled from "styled-components";
import { routes } from "../routes";
import { useLocation } from "react-router-dom";

function Banner() {
  const location = useLocation();
  const { pathname } = location;
  
  const routes_map = routes.reduce((table, route) => {
    const { name, path, vis } = route;
    if (!vis || path == "") {
      return table;
    }

    table[path] = name;
    return table;
  }, {});

  const title = routes_map[pathname.slice(1)]
  
  if(pathname == "/") return null
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24rem;
  background-image: url("/img/main_vis2.jpeg");
  background-position: 40% 60%;
  background-size: cover;
  position: relative;
  isolation: isolate;
  &::after {
    content: "";
    position: absolute;
    background: white;
    z-index: -1;
    inset: 0;
    background-color: black;
    opacity: 0.3;
  }
`;
const Title = styled.p`
  color: #fff;
  font-size: 4rem;
  font-weight: 600;
`;
export default Banner;
