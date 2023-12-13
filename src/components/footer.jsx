import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Left>
        <h3>두정역 반도유보라 모델하우스</h3>
        <p>천안시 서북구 두정동 393-22번지</p>
        <div>
          <img src="/img/footer_img1.png"></img>
        </div>
      </Left>
      <Right>
        <span>분양문의</span>
        <p>1688-6251</p>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  padding-left: 5%;
  padding-right:10%;
  background-color: #1c1c22;
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 16rem;
  color: #fff;
  font-size: 1.5rem;
  font-style: bold;
  justify-content: space-between;
`;

const Left = styled.div`

  > h3 {
    font-size: 1.5rem;
  }
  > p {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const Right = styled.div`
  > span {
    display: inline-block;
    margin-top: 1rem;
    font-style: bold;
    font-size: 1.7rem;
  }
  > p {
    font-size: 7rem;
  }
`;
export default Footer;
