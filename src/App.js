import React, { useState, useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { studentInputs } from "./formSource";
import { productInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";

import "./styles.css";
export default function App() {
  const { darkMode } = useContext(DarkModeContext);

  const [dark, setDark] = useState(false);
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="students">
              <Route index element={<List />} />
              <Route path=":studentId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={studentInputs} title={"Add New Student"} />
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
