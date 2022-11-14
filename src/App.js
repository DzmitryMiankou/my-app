import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Works from "./components/main/myWorks/Works";
import Learning from "./components/main/learning/Learning";
import ContactsContainer from "./components/main/contacts/ContactsContainer";
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
                  disPatch={props.dispatch}
                  newCommit={props.appState.commit.newCommitChanges}
                />
              }
            />
            <Route
              path="/chat"
              element={
                <ContactsContainer
                  store={props.appState}
                  dispatch={props.dispatch}
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
