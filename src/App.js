import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import FixedBottomBanner from "./components/fixed_bottom_banner";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.main}>
        <Outlet className="main" />
      </div>
      <FixedBottomBanner />
      <Footer />
    </>
  );
}

export default App;
