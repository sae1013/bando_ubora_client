import React from "react";
import HeaderPC from "./header_pc";
import HeaderMobile from "./header_mobile";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isPC = useMediaQuery({ query: "(min-width: 769px)" })

  if (isPC) {
    return <HeaderPC />;
  } else {
    return <HeaderMobile />;
  }
}

export default Header;
