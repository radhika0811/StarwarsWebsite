import React, {Suspense} from "react";
const Planets = React.lazy(() => import("./Categories/Planets"));
const Movies = React.lazy(() => import("./Categories/Movies"));
const Vehicles = React.lazy(() => import("./Categories/Vehicles"));

const Search = ({
  handleSearch,
  searchList,
  category,
  loading,
  hasMore,
  lastElementRef,
}) => {
  console.log("SearchList is->", searchList);
  console.log("category is->", category);
  console.log("loading->", loading);
  console.log("hasMore", hasMore);
  console.log("lastElementRef", lastElementRef);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div id="searchContainer">
        <h1>Search Page</h1>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Enter your search details here"
        ></input>
        {searchList && category === "planets" ? (
          <Planets searchList={searchList} />
        ) : null}
        {searchList && category === "films" ? (
          <Movies searchList={searchList} />
        ) : null}
        {searchList && category === "vehicles" ? (
          <Vehicles searchList={searchList} />
        ) : null}
        {!loading && hasMore && <div>Loading...</div>}
        <div ref={lastElementRef}></div>
      </div>
    </Suspense>
  );
};

export default Search;
