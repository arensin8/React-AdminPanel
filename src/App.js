import React from 'react';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles.css'
export default function App() {
  return (
   <div className='App'>
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
                element={<New/>}
              />
            </Route>
            <Route path="teachers">
              <Route index element={<List />} />
              <Route path=":teacherId" element={<Single />} />
              <Route
                path="new"
                element={<New/>}
              />
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}
