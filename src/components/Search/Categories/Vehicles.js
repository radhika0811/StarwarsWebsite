import React from "react";
import { Link } from "react-router-dom";

const Vehicles = ({ searchList }) => {
  let vehicleRows = <h1></h1>;
  if (searchList) {
    vehicleRows = searchList.map((vehicle) => {
      const vehicleId = vehicle.url.split("/")[5];
      return (
        <h4 key={vehicle.url}>
          <Link to={`/vehicles/${vehicleId}`} className="links">
            {vehicle.name}
          </Link>
        </h4>
      );
    });
  }
  return (
    <>
      {searchList.length !== 0 ? (
        <div className="searchResults">{vehicleRows}</div>
      ) : (
        <div>No matches Found</div>
      )}
    </>
  );
};

export default Vehicles;
