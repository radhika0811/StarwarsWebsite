import React, { Suspense } from "react";
const PlanetRows = React.lazy(() => import("./Internals/PlanetRows"));
const VehicleRows = React.lazy(() => import("./Internals/VehicleRows"));
const FilmRows = React.lazy(() => import("./Internals/FilmRows"));

const Search = ({
  handleInput,
  searchList,
  input,
  cName,
  lastElementRef,
  loading,
  hasMore,
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div id="searchContainer">
        <h1>Search</h1>
        <input
          value={input}
          onChange={handleInput}
          id="searchInput"
          placeholder="Search..."
        ></input>
        {searchList && cName === "planets" ? (
          <PlanetRows searchList={searchList} />
        ) : null}
        {searchList && cName === "films" ? (
          <FilmRows searchList={searchList} />
        ) : null}
        {searchList && cName === "vehicles" ? (
          <VehicleRows searchList={searchList} />
        ) : null}
        {!loading && hasMore && <div>Loading...</div>}
      </div>

      <div ref={lastElementRef}></div>
    </Suspense>
  );
};

export default Search;
