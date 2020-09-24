import React from "react";

export default function CakeTile({ cake }) {
  const { name } = cake;
  return <div>{`Cake is called ${name}`}</div>;
}
