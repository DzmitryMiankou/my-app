import React from "react";

//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Works from "./components/main/myWorks/Works";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<Main />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
