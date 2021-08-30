const searchData = async (categoryName, input, pageNumber, cb) => {
  const response = await fetch(
    `https://swapi.dev/api/${categoryName}/?search=${input}&page=${pageNumber}`
  );
  const info = await response.json();
  cb(info);
};

export default searchData;
