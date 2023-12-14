import React from "react";
import styled from "styled-components";

function PageWrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: 1360px;
  padding: 3rem;
`;
export default PageWrapper;
