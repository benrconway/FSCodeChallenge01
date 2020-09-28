import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About, SingleCake, NewCake } from "../../pages";

export default function Main({ data }) {
  return (
    <main>
      <Switch>
        <Route path="/new">
          <NewCake />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cakes/:id">
          <SingleCake />
        </Route>
        <Route path="/">
          <Home cakes={data} />
        </Route>
      </Switch>
    </main>
  );
}
