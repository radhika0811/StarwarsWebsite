import React from "react";
import useData from "../../CustomHooks/useData";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const [data, isLoaded] = useData("vehicles");
  console.log("data is", data);
  console.log(isLoaded);
  let vehicleData = <h1></h1>;
  if (isLoaded) {
    vehicleData = data.map((vehicle) => {
      console.log(vehicle);
      const id = vehicle.url.split("/")[5];
      console.log("id->", id);
      return (
        <h2 key={vehicle.url}>
          <Link className="link-1" to={`/vehicles/${id}`}>
            {vehicle.name}
          </Link>
        </h2>
      );
    });
  }
  return <div>{vehicleData}</div>;
};

export default Vehicles;
