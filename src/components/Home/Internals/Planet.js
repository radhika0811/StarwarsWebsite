import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";

const Planet = () => {
  const [data, fetched] = useFetch("planets");
  let planetRows = <h1></h1>;
  if (fetched) {
    const planetData = data.results;
    planetRows = planetData.map((planet) => {
      const planetId=planet.url.split('/')[5];
      return (
        <h2 key={planet.url}>
          <Link className="link-display" to={`/planets/${planetId}`}>
            {planet.name}
          </Link>
        </h2>
      );
    });
  }
  return <div>{planetRows}</div>;
};
export default Planet;
