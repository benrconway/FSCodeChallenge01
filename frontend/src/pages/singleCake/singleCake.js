import React from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../utils";
import { CakeTile } from "../../components";

export default function SingleCake() {
  const { id } = useParams();
  const [cake, setCake] = React.useState();

  const displayCake = (cake) => {
    if (!cake || cake.name === undefined) {
      return <p>Please wait, your cake is still baking</p>;
    }
    return (
      <CakeTile
        cake={cake}
        key={`${cake.name}-${cake.id}`}
        fullDescription={true}
      />
    );
  };

  React.useEffect(() => {
    const loadData = async () => {
      const res = await getData(`/cakes/${id}`);
      setCake(res);
    };
    loadData();
  }, [id]);

  return <div>{displayCake(cake)}</div>;
}
