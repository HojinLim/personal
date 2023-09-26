import { useQuery } from "@tanstack/react-query";
import React from "react";
import { setMovies } from "./store/movieSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const MovieLists = () => {
  const KEY = "153265a32688e9df552c3df0354ea393";
  const DATE = "20230924";
  const baseURL = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`;

  // fetch API 코드
  const fetchMovies = async () => {
    const response = await fetch(baseURL);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    console.log(data);

    return data;
  };
  const dispatch = useAppDispatch();

  // const movies = useAppSelector((state) => state.movies);

  // 리액트쿼리 사용 예시: useQuery 및 다양한 Return 사용 가능
  const { isLoading, isError, error } = useQuery(["movies"], fetchMovies, {
    // 성공 및 에러 핸들링

    onSuccess: (data) => {
      dispatch(setMovies(data));
      // console.log(data);
    },
    onError: (error: string) => {
      // 에러핸들링 등
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return <ul></ul>;
};

export default MovieLists;
