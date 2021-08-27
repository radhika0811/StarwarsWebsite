import { Link } from "react-router-dom";

const VehicleRows = ({ searchList }) => {
  console.log("search list", searchList);
  let vehicleRows = null;

  if (searchList) {
    vehicleRows = searchList.map((vehicle) => {
      const vehicleId = vehicle.url.split("/")[5];
      return (
        <h4 key={vehicle.url}>
          <Link to={`/Vehicle/${vehicleId}`} className="link-display">
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

export default VehicleRows;
