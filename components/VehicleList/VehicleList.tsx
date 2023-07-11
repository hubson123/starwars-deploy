import { getFilms, getStarships } from "api/apiCalls";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select from "react-select";
import ReactPaginate from "react-paginate";
import { PulseLoader } from "react-spinners";
import { useRecoilState, atom, selector, useRecoilValue } from "recoil";

import { Film, Starship } from "types/types";

import {
  FilterSection,
  StyledCard,
  StyledWrapper,
} from "styled-components/General";

export const starshipsState = atom({
  key: "starships",
  default: [] as Starship[],
});
const starshipsCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const count = get(starshipsState);

    return count.length;
  },
});
const filmsState = atom({
  key: "films",
  default: [] as Film[],
});

const VehicleList = () => {
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [vehicles, setVehicles] = useRecoilState<Starship[]>(starshipsState);
  const [films, setFilms] = useRecoilState<Film[]>(filmsState);
  const count = useRecoilValue(starshipsCountState);
  const [page, setPage] = useState(1);
  const [options, setOptions] = useState([]);
  const [pageNavigation, setPageNavigation] = useState(1);

  useEffect(() => {
    if (count < 1) {
      fetchFilmsData();
      fetchStarshipsData();
    } else {
      setLoading(false);
      let amount = Number((count / 10).toFixed(0));
      setPageCount(amount);
      setPage(amount + 1);
    }
  }, []);
  useEffect(() => {
    if (pageCount > 1) {
      if (page <= pageCount) {
        setLoading(true);
        fetchStarshipsData();
      }
    }
  }, [page]);

  const fetchStarshipsData = () => {
    getStarships(page)
      .then((response) => response.json())
      .then((data) => {
        let amount = Number((data.count / 10).toFixed(0));
        if (pageCount !== amount) {
          setPageCount(amount);
        }
        if (page !== pageCount) {
          setPage(page + 1);
        } else {
          setLoading(false);
        }
        setVehicles(vehicles.concat(data.results));
      })
      .catch((error) =>
        console.error("Error during fetching starships.", error),
      );
  };
  const fetchFilmsData = () => {
    getFilms()
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
      })
      .catch((error) => console.error("Error during fetching films.", error));
  };

  const handlePageChange = (selectedItem: any) => {
    const helper = selectedItem.selected * 10;
    setPageNavigation(helper);
  };
  useEffect(() => {
    console.log();
    setOptions(
      films.map((film: Film, key: number) => ({
        value: film.url,
        label: film.title,
        key: key,
      })),
    );
  }, [films]);
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const handleSelectChange = (e) => {
    if (e?.value) {
      setSelectInput(e.value);
    } else {
      setSelectInput("");
    }
  };
  const handleClick = () => {
    setSelectInput("");
    setSearchInput("");
  };
  return (
    <>
      <h1>Vehicle List: </h1>

      {loading ? (
        <>
          <h2>Waiting until all ships are ready for war....</h2>
          <PulseLoader color="yellow" />
        </>
      ) : (
        <>
          <FilterSection>
            <h2>Filters: </h2>
            <Select
              placeholder="Select a film..."
              options={options}
              onChange={handleSelectChange}
              isClearable
            />
            <input
              type="search"
              placeholder="Search by name of vehicle..."
              onChange={handleSearchChange}
              value={searchInput}
            />
            <button onClick={handleClick}>Clear Filters</button>
          </FilterSection>
          <StyledWrapper>
            {vehicles
              .filter((vehicle: Starship) =>
                searchInput.length > 1
                  ? vehicle.name.match(searchInput)
                  : vehicle,
              )
              .filter((vehicle: Starship) =>
                selectInput.length > 1
                  ? vehicle.films.includes(selectInput)
                  : vehicle,
              )
              .map(
                (vehicle: Starship, key: number) =>
                  key >= pageNavigation &&
                  key < pageNavigation + 10 && (
                    <StyledCard key={key}>
                      <p>{vehicle.name}</p>
                      <Link href={`/vehicleList/${vehicle.name}`}>Details</Link>
                    </StyledCard>
                  ),
              )}

            <ReactPaginate
              pageCount={pageCount}
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
        </>
      )}
    </>
  );
};

export default VehicleList;
