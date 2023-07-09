import Vehicle from "components/Vehicle/Vehicle";
import { useRouter } from "next/router";

export default function VehiclePage() {
  const router = useRouter();

  const id = Number(router.query.id);

  return <Vehicle id={id} />;
}
