import React from "react";
import { useAppSelector } from "../store/hooks";
import MovieLists from "../MovieLists";

const Body = () => {
  const movies = useAppSelector((state) => state.movies);

  return (
    <>
      <MovieLists />


    </>
  );
};

export default Body;
