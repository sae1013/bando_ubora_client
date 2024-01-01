import React, { useState } from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";
import { GiHamburgerMenu } from "react-icons/gi";
import { routes } from "../routes";
import { NavLink, useNavigate } from "react-router-dom";

function HeaderMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Container>
        <ImageBox
          onClick={() => navigate("/")}
          sx={{
            width: "141px",
            height: "51px",
            position: "relative",
            left: "50%",
            transform: "translate(-50%)",
            cursor: "pointer",
          }}
          src="/img/logo_on_dark.png"
        ></ImageBox>

        <div
          style={{
            position: "relative",
            right: "2rem",
            cursor: "pointer",
          }}
          onClick={() => {
            handleToggleMenu();
          }}
        >
          <GiHamburgerMenu
            size="3.5rem"
            style={{
              color: "#02104D",
            }}
          />
        </div>
      </Container>
      {isSidebarOpen && (
        <SideBar>
          <ItemContainer>
            {routes
              .filter((ele) => ele.vis)
              .map((route, index) => (
                <Item key={index}>
                  <NavLink
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                    }}
                    to={`/${route.path}`}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#696565",
                          }
                        : {}
                    }
                  >
                    <span>{route.name}</span>
                  </NavLink>
                </Item>
              ))}
          </ItemContainer>
        </SideBar>
      )}
    </>
  );
}

const SideBar = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: #fff;
  right: 0;
  animation: 0.3s ease-out slideInFromRight;

  @keyframes slideInFromRight {
    0% {
      right: -100%;
    }
    100% {
      right: 0%;
    }
  }
`;

const ItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.div`
  width: 40%;
  height: 5rem;
  font-size: 1.7rem;
  font-weight: 600;
  text-align: center;
  /* padding: 3rem 4rem; */
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: ${(props) => (props.isTopBarDark ? "#02104D" : "#f9f9f9")};
  color: ${(props) => (props.isTopBarDark ? "#fff" : "#212121")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 999;
  width: 100%;
  height: 7rem;
  font-size: 1.6rem;
  top: 0;
  border-bottom: 1px solid #f9f9f9;
  transition: background-color 0.2s;
  span {
    &:hover {
      color: ${(props) => (props.isTopBarDark ? "#fff" : "#3057a6")};
      transition: color 0.2s ease;
    }
  }
`;

export default HeaderMobile;
