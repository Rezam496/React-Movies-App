import { options } from "../api/url";
import api from "./config";

const fetchMoviesTopRated = ()=> api.get('movie/top_rated', options);

const fetchMovieNew=()=>api.get('movie/now_playing', options);

const fetchMoviesUpComing=()=>api.get('movie/upcoming', options);

const fetchMoviesPopular=()=>api.get('movie/popular', options);

const fetchTv=()=>api.get('discover/tv', options);

export {fetchMoviesTopRated,fetchMovieNew,fetchMoviesUpComing,fetchMoviesPopular, fetchTv}