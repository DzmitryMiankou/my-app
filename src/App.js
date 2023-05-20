import React, { useRef } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "@fontsource/poppins";
import Vector1 from "./Vector1.svg";
import Vector2 from "./Vector2.svg";
import ScrollToTop from "./hook/scrollTopHook";
import Allevents from "./components/allevents/Allevents";

function App() {
  const titleRef = useRef(null);
  return (
    <div className="App">
      <ScrollToTop />
      <img src={Vector1} className="vector1" alt="logo" />
      <img src={Vector2} className="vector2" alt="logo" />
      <Header />
      <Main />
      <Footer refs={titleRef} />
      <div ref={titleRef} className="allevents">
        <Allevents />
      </div>
    </div>
  );
}

export default App;
