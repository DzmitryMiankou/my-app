import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Works from "./components/main/myWorks/Works";
import Learning from "./components/main/learning/Learning";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/main/contacts/Contacts";

function App(props) {
  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/works" element={<Works />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/chat" element={<Contacts />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
