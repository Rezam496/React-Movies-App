
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYwYWIwNDUzZTI0YWJlODdmOWVjMjAwM2RkZTc3OCIsIm5iZiI6MTc0MDgxNzM5OC42MzY5OTk4LCJzdWIiOiI2N2MyYzNmNmI4NmM3OTAzZDMzZjU2NTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.smGxDzC6rDg6Dth3hEHpYAgJK51YJTJNY6VXVH9CW_M'
    }
  };

export const BASE_ULR = 'https://api.themoviedb.org/3/';
export const GENER_MOVIE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
export const GENER_TV_URL = 'https://api.themoviedb.org/3/genre/tv/list';
export const LIST_MOVIS=`${BASE_ULR}discover/movie`;
export const LIST_TV=`${BASE_ULR}discover/tv`;
export const LIST_GENRE=`${BASE_ULR}genre/movie/list`;
