import React from "react";
import ImageBox from "../components/ImageBox";
import Title from "../components/title";
import WidthSeperator from "../components/width_seperator";
import PageWrapper from "../components/page_wrapper";

function Intro() {
  
  return (
    <PageWrapper>
      <Title
        sx={{
          fontSize: "1.7rem",
          margin: "0 0 0 2rem",
        }}
      >
        • 사업개요
      </Title>
      <ImageBox src="/img/main_vis2.jpeg" sx={{ padding: "3rem 4rem" }} />
      <ImageBox src="/img/info.jpeg" sx={{ padding: "4rem" }} />

      <WidthSeperator />
      <Title
        sx={{
          fontSize: "1.7rem",
          margin: "2rem 0 2rem 2rem",
        }}
      >
        • 오시는길
      </Title>
      <ImageBox src="/img/location_img1.jpeg" sx={{ padding: "3rem 20rem" }} />
    </PageWrapper>
  );
}

export default Intro;
