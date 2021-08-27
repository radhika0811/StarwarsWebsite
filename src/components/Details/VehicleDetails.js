import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const VehicleDetails = () => {
  let history=useHistory();
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const { vehicleId } = useParams();
  useEffect(() => {
    const fetchVehicleInfo = async () => {
      const url = `https://swapi.dev/api/vehicles/${vehicleId}`;
      const vehicleResponse = await fetch(url);
      const vehicleInfo = await vehicleResponse.json();
      console.log(vehicleInfo);
      setVehicleDetails(vehicleInfo);
    };
    fetchVehicleInfo();
  }, [vehicleId]);
  const handleGoBack=()=>
  {
    history.goBack();
  }
  return (
    <div>
      <h1>Vehicle Details</h1>

      {vehicleDetails ? (
        <div>
          <span>
            <b>Name:</b>{" "}
          </span>
          {vehicleDetails.name}
          <p>
            <span>
              <b>Model: </b>
            </span>
            {vehicleDetails.model}
          </p>
          <p>
            <span>
              <b>Manufacturer:</b>{" "}
            </span>
            {vehicleDetails.manufacturer}
          </p>
          <p>
            <span>
              <b>Cost:</b>{" "}
            </span>
            {vehicleDetails.cost_in_credits}
          </p>
          <p>
            <span>
              <b>Length:</b>{" "}
            </span>
            {vehicleDetails.length}
          </p>
          <p>
            <span>
              <b>Crew:</b>{" "}
            </span>
            {vehicleDetails.crew}
          </p>
        </div>
      ) : null}
      <button className="detail-btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default VehicleDetails;
