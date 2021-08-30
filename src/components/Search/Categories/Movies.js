import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ searchList }) => {
  let movieRows = <h1></h1>;
  if (searchList) {
    movieRows = searchList.map((movie) => {
      const movieId = movie.url.split("/")[5];
      return (
        <h4 key={movie.url}>
          <Link to={`/movies/${movieId}`} className="links">
            {movie.name}
          </Link>
        </h4>
      );
    });
  }
  return (
    <>
      {searchList.length !== 0 ? (
        <div className="searchResults">{movieRows}</div>
      ) : (
        <div>No matches Found</div>
      )}
    </>
  );
};

export default Movies;
