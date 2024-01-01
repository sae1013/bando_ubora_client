import React from "react";
import styled from "styled-components";

function ImageBox(props) {
  const { src, sx } = props;
  return (
    <Wrapper {...sx} onClick={props.onClick}>
      <img src={src} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  position: ${(props) => props.position || "static"};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  cursor: ${(props) => props.cursor};

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export default ImageBox;
