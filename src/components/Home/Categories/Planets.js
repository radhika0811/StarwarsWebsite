import React from "react";
import useData from "../../CustomHooks/useData";
import { Link } from "react-router-dom";

const Planets = () => {
  const [data, isLoaded] = useData("planets");
  console.log("data is", data);
  console.log(isLoaded);
  let planetData = <h1></h1>;
  if (isLoaded) {
    planetData = data.map((planet) => {
      console.log(planet);
      const id = planet.url.split("/")[5];
      console.log("id->", id);
      return (
        <h2 key={planet.url}>
          <Link className="link-1" to={`/planets/${id}`}>
            {planet.name}
          </Link>
        </h2>
      );
    });
  }
  return <div>{planetData}</div>;
};

export default Planets;
