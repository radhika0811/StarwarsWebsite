import { Link } from "react-router-dom";
const PlanetRows = ({ searchList }) => {
  let planetRows = <h1></h1>;
  if (searchList) {
    planetRows = searchList.map((planet) => {
      const planetId = planet.url.split("/")[5];
      return (
        <h4 key={planet.url}>
          <Link to={`/planets/${planetId}`} className="link-display">
            {planet.name}
          </Link>
        </h4>
      );
    });
  }
  return (
    <>
      {searchList.length !== 0 ? (
       <div >{planetRows}</div>
      ) : (
        <div>No result matches your search query</div>
      )}
    </>
  );
};

export default PlanetRows;