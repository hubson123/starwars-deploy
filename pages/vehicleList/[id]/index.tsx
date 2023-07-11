import Vehicle from "components/Vehicle/Vehicle";
import { useRouter } from "next/router";

export default function VehiclePage() {
  const router = useRouter();

  const id = router.query.id;

  return <Vehicle name={id} />;
}
