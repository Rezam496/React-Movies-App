import api from "./config";
import { options } from "../api/url";


const findMovies = (searchTerm) => api.get(`search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`, options);

export {findMovies};