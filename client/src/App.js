import React, { Suspense } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/home/Main";
//import Works from "./components/main/myWorks/Works";
import Learning from "./components/main/learning/Learning";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/main/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Layout from "./components/main/learning/layout";
import Registration from "./components/main/registration/Registration";

const OtherComponent = React.lazy(() =>
  import("./components/main/myWorks/Works")
);

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/works"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <OtherComponent />
              </Suspense>
            }
          />
          <Route path="/learning" element={<Layout />}>
            <Route index element={<Learning />} />
            <Route path="html" element={<h1>ergver</h1>} />
            <Route path="css" element={<h1>ergver</h1>} />
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
