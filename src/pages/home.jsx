import React from "react";
import styled from "styled-components";
import ImageBox from "../components/ImageBox";
import PageWrapper from "../components/page_wrapper";

function Home() {
  return (
    <>
      <Container>
        {/* <section>
          <video autoPlay loop muted src="/videos/brand_video.mp4"></video>
        </section> */}
      </Container>
      <PageWrapper>
        <section>
          <ImageBox src={"/img/main_viz_4.png"}></ImageBox>
        </section>
        <section>
          <ImageBox src={"/img/main_viz_11.png"}></ImageBox>
        </section>
        <section>
          <ImageBox src={"/img/main_viz_5.png"}></ImageBox>
        </section>
        <section>
          <ImageBox src={"/img/main_viz_3.png"}></ImageBox>
        </section>
        <section>
          <ImageBox src={"/img/main_viz_10.png"}></ImageBox>
        </section>
      </PageWrapper>
    </>
  );
}

const Container = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;
  padding: 0;
  video {
    width: 100%;
  }
`;
export default Home;
