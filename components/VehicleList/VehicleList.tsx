import { getStarships } from "api/apiCalls";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PulseLoader } from "react-spinners";
import { useRecoilState, atom } from "recoil";

import { Starship } from "types/types";

import { StyledCard, StyledWrapper } from "styled-components/General";

export const starshipsState = atom({
  key: "starships",
  default: [] as Starship[],
});

const VehicleList = () => {
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [vehicles, setVehicles] = useRecoilState<Starship[]>(starshipsState);
  const [page, setPage] = useState(1);
  const [pageVisitedTable, setPageVisitedTable] = useState([1]);

  useEffect(() => {
    fetchData();
  }, [pageVisitedTable]);

  const fetchData = () => {
    getStarships(page)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPageCount(data.count / 10);
        setVehicles(vehicles.concat(data.results));
      })
      .catch((error) => console.error("Error during fetching.", error));
  };

  const handlePageChange = (selectedItem: any) => {
    const helper = selectedItem.selected + 1;
    console.log("Tablica: ", vehicles);
    if (pageVisitedTable.find((pageVisited) => pageVisited == helper)) {
      setPage(helper);
    } else {
      setPage(helper);
      setPageVisitedTable([...pageVisitedTable, helper]);
    }
  };

  return (
    <>
      <h1>Vehicle List: </h1>

      {loading ? (
        <PulseLoader color="#36d7b7" />
      ) : (
        <StyledWrapper>
          {vehicles.map((vehicle: Starship, key: number) => (
            <StyledCard key={key}>
              <p>{vehicle.name}</p>
              <Link href={`/vehicleList/${key}`}>Details</Link>
            </StyledCard>
          ))}

          <ReactPaginate
            pageCount={pageCount}
            marginPagesDisplayed={4}
            onPageChange={handlePageChange}
            containerClassName={"container"}
            previousLinkClassName={"page"}
            breakClassName={"page"}
            nextLinkClassName={"page"}
            pageClassName={"page"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </StyledWrapper>
      )}
    </>
  );
};

export default VehicleList;
