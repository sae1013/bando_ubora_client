import React from "react";
import styled from "styled-components";
import ImageBox from "../components/ImageBox";

function About() {
  return (
    <Wrapper>
      <ImageBox src = "/img/main_vis2.jpeg"/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default About;
