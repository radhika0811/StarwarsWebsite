import React from "react";
import useData from "../../CustomHooks/useData";
import { Link } from "react-router-dom";

const Movies = () => {
  const [data, isLoaded] = useData("films");
  console.log("data is", data);
  console.log(isLoaded);
  let moviesData = <h1></h1>;
  if (isLoaded) {
    moviesData = data.map((films) => {
      console.log("movies", films);
      const id = films.url.split("/")[5];
      console.log("id->", id);
      return (
        <h2 key={films.url}>
          <Link className="link-1" to={`/movies/${id}`}>
            {films.title}
          </Link>
        </h2>
      );
    });
  }
  return <div>{moviesData}</div>;
};

export default Movies;
