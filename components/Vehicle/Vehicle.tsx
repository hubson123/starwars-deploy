import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";

import { starshipsState } from "components/VehicleList/VehicleList";

import { Starship } from "types/types";

import { VehicleCard } from "components/Vehicle/Vehicle.styled";

const Vehicle = (id) => {
  const [vehicles] = useRecoilState<Starship[]>(starshipsState);

  if (vehicles.find((starship, key) => key == id.id)) {
    const vehicle = vehicles[id.id];
    return (
      <VehicleCard>
        <p>{vehicle.name}</p>
        <p>{vehicle.model}</p>
        <p>{vehicle.passengers}</p>
        <p>{vehicle.starship_class}</p>
        <p>{vehicle.MGLT}</p>
        <p>{vehicle.cargo_capacity}</p>
        <p>{vehicle.consumables}</p>
        <p>{vehicle.crew}</p>
        <p>{vehicle.cost_in_credits}</p>
        <p>{vehicle.hyperdrive_rating}</p>
        <p>{vehicle.length}</p>
        <p>{vehicle.manufacturer}</p>
        <p>{vehicle.max_atmosphering_speed}</p>
        <p>{vehicle.cargo_capacity}</p>
      </VehicleCard>
    );
  } else {
    return (
      <>
        <ToastContainer />
        {toast(`Vehicle with id ${id} doesn't exist!`)}
      </>
    );
  }
};

export default Vehicle;
