import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:idx" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
