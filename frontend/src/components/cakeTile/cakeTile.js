import React from "react";
import { Link } from "react-router-dom";

export default function CakeTile({ cake, fullDescription }) {
  const { id, name, imageUrl, comment, yumFactor } = cake;
  return (
    <div className="cake-tile">
      <img className="cake-tile-image" src={imageUrl} alt={`${name}`} />
      <p>{`${name}`}</p>
      {fullDescription ? (
        <>
          <p>{`Yum Factor: ${yumFactor}`}</p>
          <p>{`${comment}`}</p>
        </>
      ) : (
        <Link to={`/cakes/${id}`}>More details</Link>
      )}
    </div>
  );
}
