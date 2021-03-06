import React from "react";
import useDataDetails from "../CustomHooks/useDataDetails";
import { useHistory } from "react-router";

const VehicleDetails = ({ match }) => {
  console.log(match.params.id);
  const [details, isLoaded] = useDataDetails("vehicles", match.params.id);
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
      <h2 className="search-title">{details.name}</h2>
      <p>
        <span>Model: </span>
        {details.model}
      </p>
      <p>
        <span>Manufacturer: </span>
        {details.manufacturer}
      </p>
      <p>
        <span>Cost: </span>
        {details.cost_in_credits}
      </p>
      <button className="detail-btn" onClick={handleBackButton}>
        Back
      </button>
    </div>
  );
};

export default VehicleDetails;
