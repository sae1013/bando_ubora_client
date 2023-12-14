import React from "react";
import ImageBox from "../components/ImageBox";
import Title from "../components/title";
import WidthSeperator from "../components/width_seperator";
import PageWrapper from "../components/page_wrapper";

function Preview() {
  return (
    <PageWrapper>
      <ImageBox src="/img/A_type_header.jpeg" />
      <ImageBox src="/img/A_type.jpeg" sx={{ padding: "0rem 4rem" }} />

      <WidthSeperator />
      <ImageBox src="/img/B_type_header.jpeg" />
      <ImageBox src="/img/B_type.jpeg" sx={{ padding: "0rem 20rem" }} />
      
      <WidthSeperator/>
      <ImageBox src="/img/C_type_header.jpeg" />
      <ImageBox src="/img/C_type.jpeg" sx={{ padding: "0rem 20rem" }} />
    </PageWrapper>
  );
}

export default Preview;
