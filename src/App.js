import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "@fontsource/poppins";
import Vector1 from "./Vector1.svg";
import Vector2 from "./Vector2.svg";

function App() {
  return (
    <div className="App">
      <img src={Vector1} className="vector1" alt="logo" />
      <img src={Vector2} className="vector2" alt="logo" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
