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
  /*async function http(params) {
    try {
      const response = await fetch("http://localhost:5000/users/", {
        method: "get",
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  http().then((e) => add(e));
  function add(e) {
    e.forEach((element) => {
      arr.push(element);
    });
  }*/
  let arr = [
    {
      id: "nickNam",
      value: "Nickname",
      placeholder: "Например: Explore23",
      type: "text",
    },
    {
      id: "email",
      value: "Email",
      placeholder: "Например: explore@gmail.com",
      type: "email",
    },
    {
      id: "password",
      value: "Password",
      placeholder: "Например: 230cd_3rD",
      type: "password",
    },
  ];
  console.log(arr);

  const formElem = arr.map(({ id, value }) => <h1 key={id}>{value}</h1>);
  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/works" element={<Works />} />
          <Route path="/learning" element={<Layout />}>
            <Route index element={<Learning />} />
            <Route path="html" element={formElem} />
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
