import React from "react";
import styled from "styled-components";

function FixedBottomBanner() {
  
  return (
    <Container
      href="tel:16886251"
      style={{
        width: "100%",
        height: "6rem",
        backgroundColor: "#1A1446",
        opacity: 0.9,
        cursor: "pointer",
      }}
    >
      <Contents>
        <Text>전화상담</Text>
        <Text style={{ marginLeft: "1rem" }}>1688-6251</Text>
      </Contents>
    </Container>
  );
}

const Container = styled.a`
  @media only screen and (max-width: 768px) {
    display: block;
    position: fixed;
    z-index: 999;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;
const Text = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;
const Contents = styled.div`
`;
const Box = styled.div``;
export default FixedBottomBanner;
