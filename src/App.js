import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Works from "./components/main/myWorks/Works";
import Learning from "./components/main/learning/Learning";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/main/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Layout from "./components/main/learning/layout";

function App(props) {
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
        </Routes>
      </section>
      <Footer className="sdf" />
    </div>
  );
}

export default App;
