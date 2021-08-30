import React from "react";
import useDataDetails from "../CustomHooks/useDataDetails";
import { useHistory } from "react-router";

const MovieDetails = ({ match }) => {
  console.log(match.params.id);
  const [details, isLoaded] = useDataDetails("films", match.params.id);
  console.log("final call", details);
  console.log(isLoaded);
  let history = useHistory();
  console.log(history);
  const handleBackButton = () => {
    history.goBack();
  };
  return (
    <div className="search-details">
      <h1>Details</h1>
      <h2 className="search-title">{details.title}</h2>
      <p>
        <span>Description: </span>
        {details.opening_crawl}
      </p>
      <p>
        <span>Director: </span>
        {details.director}
      </p>
      <p>
        <span>Producer: </span>
        {details.producer}
      </p>
      <p>
        <span>Created: </span>
        {details.created}
      </p>

      <p>
        <span>Released: </span>
        {details.release_date}
      </p>
      <button className="detail-btn" onClick={handleBackButton}>
        Back
      </button>
    </div>
  );
};

export default MovieDetails;
