import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const PlanetDetails = () => {
  let history = useHistory();
  const [planetDetails, setPlanetDetails] = useState(null);
  const { planetId } = useParams();
  const handleGoBack = () => {
    history.goBack();
  };
  useEffect(() => {
    const fetchPlanetInfo = async () => {
      const url = `https://swapi.dev/api/planets/${planetId}`;
      const planetResponse = await fetch(url);
      const planetInfo = await planetResponse.json();
      console.log("planetInfo", planetInfo);
      setPlanetDetails(planetInfo);
    };
    fetchPlanetInfo();
  }, [planetId]);
  return (
    <div className="search-details" >
      <h1>Details</h1>

      {planetDetails ? (
        <div>
          <p>
            <span>
              <b>Name: </b>
            </span>
            {planetDetails.name}
          </p>
          <p>
            <span>
              <b>Climate: </b>
            </span>
            {planetDetails.climate}
          </p>
          <p>
            <span>
              <b>Population:</b>{" "}
            </span>
            {planetDetails.population}
          </p>
          <p>
            <span>
              <b>Diameter:</b>{" "}
            </span>
            {planetDetails.diameter}
          </p>
          <p>
            <span>
              <b>Orbital Period:</b>{" "}
            </span>
            {planetDetails.orbital_period}
          </p>
          <p>
            <span>
              <b>Terrain:</b>{" "}
            </span>
            {planetDetails.terrain}
          </p>
          <p>
            <span>
              <b>Gravity:</b>{" "}
            </span>
            {planetDetails.gravity}
          </p>
          <p>
            <span>
              <b>Surface Water: </b>
            </span>
            {planetDetails.surface_water}
          </p>
        </div>
      ) : <div></div>}
      <button className="detail-btn" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default PlanetDetails;
