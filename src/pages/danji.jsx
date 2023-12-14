import React from "react";
import Title from "../components/title";
import ImageBox from "../components/ImageBox";
import WidthSeperator from "../components/width_seperator";
import PageWrapper from "../components/page_wrapper";

function Danji() {
  return (
    <PageWrapper>
      <Title
        sx={{
          fontSize: "1.7rem",
          margin: "0 0 0 2rem",
        }}
      >
        • 단지위치
      </Title>
      <ImageBox
        src="/img/area_img1.jpeg"
        sx={{ padding: "3rem 4rem" }}
      ></ImageBox>
      <WidthSeperator />
      <Title
        sx={{
          fontSize: "1.7rem",
          margin: "2rem 0 0rem 2rem",
        }}
      >
        • 입지조건
      </Title>
      <ImageBox
        src="/img/area_img2.jpeg"
        sx={{ padding: "0rem 4rem" }}
      ></ImageBox>
      <WidthSeperator />
      <Title
        sx={{
          fontSize: "1.7rem",
          margin: "2rem 0 2rem 2rem",
        }}
      >
        • 커뮤니티
      </Title>
      <ImageBox
        src="/img/bon_community_img1.jpeg"
        sx={{ padding: "3rem 4rem" }}
      ></ImageBox>
    </PageWrapper>
  );
}

export default Danji;
