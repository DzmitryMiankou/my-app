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
            <Route path="/" element={<Main />} />
            <Route path="/works" element={<Works />} />
            <Route
              path="/learning"
              element={
                <Learning
                  linkText={props.appState.learningLink}
                  disPatch={props.disPatch}
                  newCommit={props.appState.commit.newCommitChanges}
                />
              }
            />
            <Route
              path="/chat"
              element={
                <Contacts
                  messege={props.appState.messeges.messegData}
                  newMessege={props.appState.messeges.newChange}
                  disPatch={props.disPatch}
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
