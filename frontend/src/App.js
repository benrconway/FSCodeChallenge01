import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Main } from "./components";
import { getData } from "./utils";

export default function App() {
  const [data, setData] = React.useState([]);

  const loadData = async () => {
    const res = await getData("/cakes");
    setData(res);
  };

  React.useEffect(() => {
    loadData();
    return () => {};
  }, []);

  return (
    <Router>
      <Header />
      <Main data={data} />
    </Router>
  );
}
