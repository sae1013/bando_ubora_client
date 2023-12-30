import React from "react";
import styled from "styled-components";

function PageWrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: 1360px;
  min-width: 360px;
  padding: 3rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
  
`;
export default PageWrapper;
