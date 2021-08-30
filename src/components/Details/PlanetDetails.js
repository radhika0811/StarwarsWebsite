import React from "react";
import useDataDetails from "../CustomHooks/useDataDetails";
import { useHistory } from "react-router";

const PlanetDetails = ({ match }) => {
  console.log(match.params.id);
  const [details, isLoaded] = useDataDetails("planets", match.params.id);
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
      <h1 className="search-title">{details.name}</h1>
      <p>
        <span>
          Rotation Period: {details.rotation_period}
        </span>
      </p>
      <p>
        <span>
          Orbital Period: {details.orbital_period}
        </span>
      </p>
      <p>
        <span>
          Diameter: {details.diameter}
        </span>
      </p>
      <p>
        <span>
          Climate: {details.climate}
        </span>
      </p>
      <button className="detail-btn" onClick={handleBackButton}>
        Back
      </button>
    </div>
  );
};

export default PlanetDetails;
