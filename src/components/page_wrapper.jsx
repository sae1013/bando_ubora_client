import React from "react";
import styled from "styled-components";

const PageWrapper = React.forwardRef((props, ref) => {
  return <Container ref={ref}>{props.children}</Container>;
});

const Container = styled.div`
  max-width: 1360px;
  min-width: 360px;
  padding: 3rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
export default PageWrapper;
