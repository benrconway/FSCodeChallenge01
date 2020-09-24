import React from "react";
import { CakeTile } from "../../components";

export default function Home({ cakes }) {
  const loadPage = () => {
    // in case of an error being passed down
    if (cakes.status && cakes.status > 400) {
      return (
        <p>Oops, something happened while we were baking, try again later.</p>
      );
    }
    // if cakes is undefined, loading is true and display loading message
    if (!cakes) {
      return <p>Cakes are still baking</p>;
    }
    // else if cakes will be an array, loading is false and replace with a bunch of cake tiles.
    return cakes.map((cake) => (
      <CakeTile cake={cake} key={`${cake.name}-${cake.id}`} />
    ));
  };

  return (
    <div>
      <p>Cake List</p>
      {loadPage()}
    </div>
  );
}
