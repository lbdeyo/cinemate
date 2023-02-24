import {useEffect, useState} from "react";

export const useFetch = (api, queryTerm = "") => {
  const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
  const [data, setData] = useState([]);
  console.log(url);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return {data};
};
