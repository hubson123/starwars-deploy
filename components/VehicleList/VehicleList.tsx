import Vehicle from "components/Vehicle/Vehicle";
import { Starship } from "types/types";

interface VehicleListProps {
  data: Starship[];
}

const VehicleList = ({ data }: VehicleListProps) => {
  return (
    <>
      <h1>Vehicle List: </h1>
      {data.map(() => (
        <Vehicle />
      ))}
    </>
  );
};

export default VehicleList;
