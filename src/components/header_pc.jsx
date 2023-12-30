import React, { useState, useEffect, useCallback } from "react";
import { AiFillPhone } from "react-icons/ai";

import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

function HeaderPC() {
  const [isTopBarDark, setIsTopBarDark] = useState(false);
  const navigate = useNavigate();
  const handleTopBarTransition = useCallback(() => {
    if (window.scrollY > 90) {
      setIsTopBarDark(true);
    } else {
      setIsTopBarDark(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleTopBarTransition, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleTopBarTransition);
    };
  });

  return (
    <Container isTopBarDark={isTopBarDark}>
      <List>
        <img
          src={
            isTopBarDark ? "/img/logo_on_light.png" : "/img/logo_on_dark.png"
          }
          style={{
            width: "141px",
            height: "52px",
            cursor: "pointer",
          }}
          onClick={() => {
            return navigate("/");
          }}
        ></img>
        {routes
          .filter((ele) => ele.vis)
          .map((route, index) => (
            <Item key={index}>
              <NavLink
                to={`/${route.path}`}
                style={({ isActive }) =>
                  isActive
                    ? isTopBarDark
                      ? darkActiveStyle
                      : lightActiveStyle
                    : {}
                }
              >
                <Title>{route.name}</Title>
              </NavLink>
            </Item>
          ))}
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiFillPhone style={{ fontSize: "2rem", marginRight: ".5rem" }} />
          <span style={{ fontSize: "1.7rem", fontWeight: 700 }}>1688-6251</span>
        </div>
      </List>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => (props.isTopBarDark ? "#02104D" : "#f9f9f9")};
  color: ${(props) => (props.isTopBarDark ? "#fff" : "#212121")};
  position: sticky;
  z-index: 999;
  width: 100%;
  height: 7rem;
  font-size: 1.6rem;
  top: 0;
  padding: 3rem 0;
  border-bottom: 1px solid #f9f9f9;
  transition: background-color 0.2s;

  span {
    &:hover {
      color: ${(props) => (props.isTopBarDark ? "#fff" : "#3057a6")};
      transition: color 0.2s ease;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  height: 100%;
`;

const darkActiveStyle = {
  color: "#fff",
  fontWeight: 700,
  fontSize: "1.8rem",
  transition: "font-size 0.2s",
};

const lightActiveStyle = {
  color: "#3057a6",
  fontWeight: 700,
  fontSize: "1.8rem",
  transition: "font-size 0.2s",
};
const Item = styled.li`
  padding: 2rem;
  color: inherit;
`;

const Title = styled.span`
  color: inherit;
  font-size: inherit;
`;

export default HeaderPC;
