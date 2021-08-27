import { Link } from "react-router-dom";
const FilmRows = ({ searchList }) => {
  let filmRows = <h1></h1>;
  if (searchList) {
    filmRows = searchList.map((film) => {
      const filmId = film.url.split("/")[5];
      return (
        <h4 key={film.url}  >
          <Link to={`/Films/${filmId}`} className="link-display">
            {film.title}
          </Link>
        </h4>
      );
    });
  }
  return (
    <>
      {searchList.length !== 0 ? (
        <div className="searchResults">{filmRows}</div>
      ) : (
        <div>No matches Found</div>
      )}
    </>
  );
};

export default FilmRows;
