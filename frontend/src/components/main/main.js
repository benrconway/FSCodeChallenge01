import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About, SingleCake } from "../../pages";

export default function Main({ data, updateData }) {
  return (
    <main>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cakes/:id">
          <SingleCake cakes={data} />
        </Route>
        <Route path="/">
          <Home cakes={data} updateData={updateData} />
        </Route>
      </Switch>
    </main>
  );
}
