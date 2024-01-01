import { useRef, useEffect, forwardRef } from "react";
import styled from "styled-components";
import ImageBox from "../components/ImageBox";
import PageWrapper from "../components/page_wrapper";

const Home = () => {
  const observerContainerRef = useRef();

  useEffect(() => {
    let options = {
      rootMargin: "10px",
      threshold: 0.5,
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
        {/* <section>
          <video autoPlay loop muted src="/videos/brand_video.mp4"></video>
        </section> */}
      </Container>
      <PageWrapper ref={observerContainerRef}>
        <InteractiveSection>
          <ImageBox src={"/img/main_viz_4.png"}></ImageBox>
        </InteractiveSection>
        <InteractiveSection>
          <ImageBox src={"/img/main_viz_11.png"}></ImageBox>
        </InteractiveSection>
        <InteractiveSection>
          <ImageBox src={"/img/main_viz_5.png"}></ImageBox>
        </InteractiveSection>
        <InteractiveSection>
          <ImageBox src={"/img/main_viz_3.png"}></ImageBox>
        </InteractiveSection>
        <InteractiveSection>
          <ImageBox src={"/img/main_viz_10.png"}></ImageBox>
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
