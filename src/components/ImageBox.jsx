import React from "react";
import styled from "styled-components";

function ImageBox(props) {
  const { src, sx } = props;
  return (
    <Wrapper {...sx}>
      <img src={src} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export default ImageBox;
