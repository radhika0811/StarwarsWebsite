import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const FilmDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { filmId } = useParams();
  let history = useHistory();
  useEffect(() => {
    const fetchFilmInfo = async () => {
      const url = `https://swapi.dev/api/films/${filmId}`;
      const movieResponse = await fetch(url);
      const movieInfo = await movieResponse.json();
      console.log(movieInfo);
      setMovieDetails(movieInfo);
    };
    fetchFilmInfo();
  }, [filmId]);
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <div className="movie-container">
      <h1>Movie Details</h1>

      {movieDetails ? (
        <div className="search-details">
          <h2 className="search-title">{movieDetails.title}</h2>
          <p>
            <span >Plot: </span>
            {movieDetails.opening_crawl}
          </p>
          <p>
            <span >Created: </span>
            {movieDetails.created}
          </p>

          <p>
            <span >Released: </span>
            {movieDetails.release_date}
          </p>
          <p>
            <span >Producer: </span>
            {movieDetails.producer}
          </p>
          <p>
            <span >Director: </span>
            {movieDetails.director}
          </p>
        </div>
      ) : null}
      <button className="detail-btn" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default FilmDetails;
