import { API_URL } from "../../constants";
import VehicleList from "../../components/VehicleList/VehicleList";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Starship } from "types/types";

export const getServerSideProps: GetServerSideProps<{
  data: Starship[];
}> = async () => {
  const res = await fetch(`${API_URL}/starships/`);
  const json = await res.json();
  const data = json.results;
  return { props: { data } };
};

export default function VehicleListPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <VehicleList data={data} />;
}
