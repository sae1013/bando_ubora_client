import React from "react";
import styled from "styled-components";

function Title(props) {
  const { sx } = props;

  return <Text {...sx}>{props.children}</Text>;
}

const Text = styled.p`
  font-size: ${(props) => props.fontSize || "1.3rem"};
  color: ${(props) => props.color || "#3E3E7E"};
  margin: ${(props) => props.margin || "0"};
  font-weight: 600;
`;

export default Title;
