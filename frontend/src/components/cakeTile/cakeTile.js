import React from "react";
import { Link } from "react-router-dom";

export default function CakeTile({ cake }) {
  const { id, name, imageUrl } = cake;
  console.log(cake);
  return (
    <div className="cake-tile">
      <img className="cake-tile-image" src={imageUrl} alt={`${name}`} />
      <p>{`${name}`}</p>
      <Link to={`/cakes/${id}`}>More details</Link>
    </div>
  );
}
