import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";

const Vehicle = () => {
  const [data, fetched] = useFetch("vehicles");
  let vehicleRows = <h1></h1>;
  if (fetched) {
    const vehicleData = data.results;
    vehicleRows = vehicleData.map((vehicle) => {
      console.log(vehicle);
      const vehicleId = vehicle.url.split("/")[5];
      return (
        <h2>
          <Link
            className="link-display"
            to={`/Vehicle/${vehicleId}`}
            key={vehicle.vehicleId}
          >
            {vehicle.name}
          </Link>
        </h2>
      );
    });
  }
  return <div>{vehicleRows}</div>;
};
export default Vehicle;
