import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";

import { starshipsState } from "components/VehicleList/VehicleList";

import { Starship } from "types/types";

import { VehicleCard } from "components/Vehicle/Vehicle.styled";

const Vehicle = (name) => {
  const [vehicles] = useRecoilState<Starship[]>(starshipsState);
  if (vehicles.find((starship, key) => starship.name == name.name)) {
    const vehicle = vehicles.find(
      (starship, key) => starship.name == name.name,
    );
    return (
      <VehicleCard>
        <p>Name: {vehicle.name}</p>
        <p>Passengers: {vehicle.passengers}</p>
        <p>Class: {vehicle.starship_class}</p>
        <p>Capacity: {vehicle.cargo_capacity}</p>
        <p>Crew: {vehicle.crew}</p>
        <p>Cost: {vehicle.cost_in_credits}</p>
        <p>Length: {vehicle.length}</p>
        <p>Max speed: {vehicle.max_atmosphering_speed}</p>
      </VehicleCard>
    );
  } else {
    return (
      <>
        <ToastContainer />
        {toast(`Vehicle with id ${name} doesn't exist!`)}
      </>
    );
  }
};

export default Vehicle;
