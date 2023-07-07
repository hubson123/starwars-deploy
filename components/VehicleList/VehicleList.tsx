import { getStarships } from "api/apiCalls";
import Vehicle from "components/Vehicle/Vehicle";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PulseLoader } from "react-spinners";
import { StyledCard, StyledWrapper } from "styled-components/General";
import { Starship } from "types/types";

const VehicleList = () => {
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [data, setData] = useState<Starship[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    getStarships(page)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPageCount(data.count / 10);
        setData(data.results);
      })
      .catch((error) => console.error("Error during fetching.", error));
  };

  const handlePageChange = (selectedItem: any) => {
    console.log(selectedItem, ": opcje");
    setPage(selectedItem.selected + 1);
    console.log("strona: ", page);
  };

  return (
    <>
      <h1>Vehicle List: </h1>

      {loading ? (
        <PulseLoader color="#36d7b7" />
      ) : (
        <StyledWrapper>
          {data.map((vehicle: Starship, key: number) => (
            <StyledCard>
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
