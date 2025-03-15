import { options } from "../api/url";
import api from "./config";

const fetchMoviesTopRated = () => api.get("movie/top_rated", options);

const fetchMovieNew = () => api.get("movie/now_playing", options);

const fetchMoviesUpComing = () => api.get("movie/upcoming", options);

const fetchMoviesPopular = () => api.get("movie/popular", options);

const fetchTv = (page) =>
  api.get(
    `discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    options
  );

  const fetchMovies = (page) => {
    return api.get(
      `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    );
  };
  

export {
  fetchMoviesTopRated,
  fetchMovieNew,
  fetchMoviesUpComing,
  fetchMoviesPopular,
  fetchTv,
  fetchMovies,
};
