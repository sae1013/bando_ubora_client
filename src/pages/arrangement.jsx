import React from "react";
import PageWrapper from "../components/page_wrapper";
import ImageBox from "../components/ImageBox";
import Title from "../components/title";
import WidthSeperator from "../components/width_seperator";

function Arrangement() {
  return (
    <PageWrapper>
      <Title
        sx={{
          fontSize: "1.7rem",
          margin: "0 0 0 2rem",
        }}
      >
        • 동호수 배치도
      </Title>
      <ImageBox src="/img/bon_dong_img1.jpeg" sx={{ padding: "3rem 4rem" }} />
      <WidthSeperator />

      <Title
        sx={{
          fontSize: "1.7rem",
          margin: "2rem 0 0 2rem",
        }}
      >
        • 동호수 표
      </Title>
      <ImageBox src="/img/bon_dong_img2.jpeg" sx={{ padding: "3rem 4rem" }} />
    </PageWrapper>
  );
}

export default Arrangement;
