import React from "react";
import { Suspense } from "react";

const PlanetRows = React.lazy(() => import("./Internals/PlanetRows"));
const VehicleRows = React.lazy(() => import("./Internals/VehicleRows"));
const FilmRows = React.lazy(() => import("./Internals/FilmRows"));
const Search = ({
  handleInput,
  handleCategorySearch,
  searchList,
  input,
  cName,
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="search-page">
        <h1 className="search">Search</h1>
        <input
          value={input}
          onChange={handleInput}
          className="search-box"
          placeholder="Enter your search query here"
        ></input>
        <button className="btn-search" onClick={handleCategorySearch}>
          Submit
        </button>
        <div className="search-results">
          {searchList && cName === "films" ? (
            <FilmRows searchList={searchList} />
          ) : null}
          {searchList && cName === "planets" ? (
            <PlanetRows searchList={searchList} />
          ) : null}
          {searchList && cName === "vehicles" ? (
            <VehicleRows searchList={searchList} />
          ) : null}
        </div>
      </div>
    </Suspense>
  );
};

export default Search;
