import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import Search from "./Search";
import searchData from "../../utils/searchData";

const SearchContainer = () => {
  const [input, setInput] = useState("");
  const { category } = useParams();
  console.log("category is->", category);
  const [loading, setLoading] = useState(true);
  const [searchList, setSearchList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    searchData(category, input, pageNumber, (data) => {
      setLoading(false);
      if (data.next) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
      if (data && data.results) {
        console.log(" working here in useEffect");
        setSearchList((prevList) => {
          return [...new Set([...prevList, ...data.results])];
        });
      }
    });
  }, [input, pageNumber]);
  useEffect(() => {
    setSearchList([]);
    console.log("working here");
  }, [input]);
  console.log("list->", searchList);
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          setLoading(true);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  const handleSearch = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
    setLoading(true);
    setPageNumber(1);
  };

  return (
    <Search
      handleSearch={handleSearch}
      searchList={searchList}
      loading={loading}
      hasMore={hasMore}
      category={category}
      lastElementRef={lastElementRef}
    />
  );
};

export default SearchContainer;
