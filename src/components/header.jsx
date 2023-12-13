import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPathName } from "../utils/path";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <List>
        {routes
          .filter((ele) => ele.vis)
          .map((route, index) => (
            <Item key={index}>
              <NavLink
                to={`/${route.path}`}
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
                <Title>{route.name}</Title>
              </NavLink>
            </Item>
          ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: #f9f9f9; */
  position: sticky;
  width: 100%;
  height: 7rem;
  top: 0;
  padding: 3rem 0 ;
  border-bottom: 1px solid #f9f9f9;
  /* padding-top: 2rem; */
  /* top: -1rem; */
  /* border: 1px solid black ; */
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

const activeStyle = {
  color: "#3057a6",
  fontWeight: 700,
};

const Item = styled.li`
  padding: 2rem;
  color:#212121;
  /* &:hover {
    background-color: #272154;
    transition: background-color 0.3s ease;
  } */
  span {
    &:hover {
      color: #3057a6;
      transition: color 0.2s ease;
    }
  }
`;

const Title = styled.span`
  color: inherit;
  font-size: 2rem;
`;

export default Header;
