import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Main } from "./components";
import { getData } from "./utils";

export default function App() {
  const [data, setData] = React.useState();

  const updateData = (newData) => {
    const updatedData = data;
    updatedData.push(newData);
    setData(updatedData);
  };

  React.useEffect(() => {
    const loadData = async () => {
      console.log(data);
      if (!data) {
        const res = await getData("/cakes");
        setData(res);
      }
    };
    loadData();
  }, [data]);

  return (
    <Router>
      <Header />
      <Main data={data} updateData={updateData} />
    </Router>
  );
}
