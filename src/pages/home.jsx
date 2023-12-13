import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <video autoPlay loop muted src="/videos/brand_video.mp4"></video>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f7f7f7;
  > video {
    width: 100%;
  }
`;
export default Home;
