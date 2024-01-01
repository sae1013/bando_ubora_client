import { useRef, useEffect, forwardRef } from "react";
import styled from "styled-components";
import ImageBox from "../components/ImageBox";
import PageWrapper from "../components/page_wrapper";
import WidthSeperator from "../components/width_seperator";
import { FaCheck } from "react-icons/fa";
import { PiSealCheckFill } from "react-icons/pi";

const Home = () => {
  const observerContainerRef = useRef();

  useEffect(() => {
    let options = {
      rootMargin: "10px",
      threshold: 0.4,
    };
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.add("fadein-from-bottom");
        } else {
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);
    if (observerContainerRef.current.children) {
      for (let childNode of observerContainerRef.current.children) {
        observer.observe(childNode);
      }
    }

    return () => observer && observer.disconnect();
  }, [observerContainerRef]);

  return (
    <>
      <Container>
        <section>
          <video autoPlay loop muted src="/videos/brand_video.mp4"></video>
        </section>
      </Container>
      <PageWrapper ref={observerContainerRef}>
      <InteractiveSection>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              marginTop:'7rem'
            }}
          >
            <PiSealCheckFill
              size="3rem"
              style={{
                color: "#070ea3",
              }}
            ></PiSealCheckFill>
            <p
              style={{
                color: "#1A1446",
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
                marginLeft: "1rem",
              }}
            >
              유망한 입지조건
            </p>
          </div>
          <ImageBox src={"/img/premium_img2.jpeg"}></ImageBox>
        </InteractiveSection>

        <InteractiveSection>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              marginTop:"7rem"
            }}
          >
            <PiSealCheckFill
              size="3rem"
              style={{
                color: "#070ea3",
              }}
            ></PiSealCheckFill>
            <p
              style={{
                color: "#1A1446",
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
                marginLeft: "1rem",
              }}
            >
              넓은 단지조경
            </p>
          </div>
          <ImageBox src={"/img/main_real_vis1.png"}></ImageBox>
        </InteractiveSection>

        <InteractiveSection>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              marginTop: "7rem",
            }}
          >
            <PiSealCheckFill
              size="3rem"
              style={{
                color: "#070ea3",
              }}
            ></PiSealCheckFill>
            <p
              style={{
                color: "#1A1446",
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
                marginLeft: "1rem",
              }}
            >
              50평대 같은 주방
            </p>
          </div>
          <ImageBox src={"/img/main_real_vis2.png"}></ImageBox>
        </InteractiveSection>

        <InteractiveSection>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          ></div>
          <ImageBox src={"/img/main_real_vis3.png"}></ImageBox>
        </InteractiveSection>
        <InteractiveSection>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              marginTop: "7rem",
            }}
          >
            <PiSealCheckFill
              size="3rem"
              style={{
                color: "#070ea3",
              }}
            ></PiSealCheckFill>
            <p
              style={{
                color: "#1A1446",
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
                marginLeft: "1rem",
              }}
            >
              무엇이든 넣을 수 있는 펜트리
            </p>
          </div>
          <ImageBox src={"/img/main_real_vis4.png"}></ImageBox>
        </InteractiveSection>

        <InteractiveSection>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              marginTop: "7rem",
            }}
          >
            <PiSealCheckFill
              size="3rem"
              style={{
                color: "#070ea3",
              }}
            ></PiSealCheckFill>
            <p
              style={{
                color: "#1A1446",
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
                marginLeft: "1rem",
              }}
            >
              높은 거실 층고
            </p>
          </div>
          <ImageBox src={"/img/main_real_vis5.png"}></ImageBox>
        </InteractiveSection>

        <InteractiveSection>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              marginTop: "7rem",
            }}
          >
            <PiSealCheckFill
              size="3rem"
              style={{
                color: "#070ea3",
              }}
            ></PiSealCheckFill>
            <p
              style={{
                color: "#1A1446",
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 600,
                marginLeft: "1rem",
              }}
            >
              두정역세권 입지조건
            </p>
          </div>
          <ImageBox src={"/img/main_viz_4.png"}></ImageBox>
        </InteractiveSection>
        {/* <InteractiveSection>
          <ImageBox src={"/img/main_viz_4.png"}></ImageBox>
        </InteractiveSection> */}
        <InteractiveSection>
          <ImageBox src={"/img/main_viz_11.png"}></ImageBox>
        </InteractiveSection>
        <InteractiveSection>
          <ImageBox src={"/img/main_viz_5.png"}></ImageBox>
        </InteractiveSection>
        <InteractiveSection>
          <ImageBox src={"/img/main_viz_3.png"}></ImageBox>
        </InteractiveSection>
        
      </PageWrapper>
    </>
  );
};

const Container = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;
  padding: 0;
  video {
    width: 100%;
  }
`;

const InteractiveSection = styled.section`
  opacity: 0;
`;
export default Home;
