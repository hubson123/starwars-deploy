import { Starship } from "types/types";

const Vehicle = (starship: Starship) => {
  return (
    <>
      <h1>{starship.name}</h1>
      <p>{starship.cargo_capacity}</p>
    </>
  );
};

export default Vehicle;
