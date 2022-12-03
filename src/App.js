import React from "react";
//import logo from './logo.svg';
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Works from "./components/main/myWorks/Works";
import Learning from "./components/main/learning/Learning";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/main/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Layout from "./components/main/learning/layout";
import Registration from "./components/main/registration/Registration";

function App() {
  let a = [];
  async function http(params) {
    try {
      await fetch("http://localhost:5000", {
        method: "get",
      })
        .then((response) => response.json())
        .then((result) => a.push(result));
      return a;
    } catch (error) {
      console.log(error);
    }
  }
  http();
  console.log(a);

  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/works" element={<Works />} />
          <Route path="/learning" element={<Layout />}>
            <Route index element={<Learning />} />
            <Route path="html" element={<h1>efvre</h1>} />
            <Route path="css" element={<Works />} />
            <Route path="figma" element={<Learning />} />
          </Route>
          <Route path="/chat" element={<Contacts />} />
          <Route path="/regist" element={<Registration />} />
        </Routes>
      </section>
      <Footer className="sdf" />
    </div>
  );
}
export default App;
