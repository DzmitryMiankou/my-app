import React from "react";

//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
