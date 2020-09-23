import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Main } from "./components";

export default function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}
