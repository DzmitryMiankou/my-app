import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Works from "./components/main/myWorks/Works";
import Learning from "./components/main/learning/Learning";
import Contacts from "./components/main/contacts/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section>
          <Routes>
            <Route path="/about" element={<Main />} />
            <Route path="/works" element={<Works />} />
            <Route path="/learning" element={<Learning />} />
            <Route
              path="/contacts"
              element={
                <Contacts
                  messege={props.appState.messegData}
                  toRedux={props.toRedux}
                />
              }
            />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
