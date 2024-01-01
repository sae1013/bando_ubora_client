import { useEffect } from "react";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import FixedBottomBanner from "./components/fixed_bottom_banner";
import { useMediaQuery } from "react-responsive";

function App() {
  const isPC = useMediaQuery({ query: "(min-width: 769px)" });

  const handleChatBtnClick = () => {
    window.Kakao.Channel.chat({
      channelPublicId: process.env.REACT_APP_KAKAO_OPEN_CHAT_ID,
    });
  };
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.main}>
        <Outlet className="main" />
      </div>
      <FixedBottomBanner />
      <div
        onClick={() => {
          handleChatBtnClick();
        }}
        style={{
          width: isPC ? "20rem" : "17rem",
          position: "fixed",
          bottom: "8rem",
          right: "3rem",
          cursor: "pointer",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            width: "100%",
          }}
          src="img/kakao_talk.png"
        ></img>
      </div>
      <Footer />
    </>
  );
}

export default App;
