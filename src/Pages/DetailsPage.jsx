import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { findId } from '../helper/helper';
import { options } from '../api/url';
import axios from 'axios';

function DetailsPage() {
  const[movieData,setMovieData]=useState(null)
  const location=useLocation();
  const idCard=findId(location.pathname)
  
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${idCard}`,options);
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchMovieData();
  }, [idCard]);
  console.log(movieData)
  return (
    <div className=" bg-cover bg-center pb-8 md:py-8 h-96" style={{backgroundImage: `linear-gradient(
      to bottom,
      rgb(30 41 59 / 40%),
      rgb(30 41 59 / 53%),
      rgb(30 41 59 / 40%),
  ), url(https://image.tmdb.org/t/p/w500${movieData?.backdrop_path})`}}>
       <img src={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`} alt="" />
    </div>
  )
}

export default DetailsPage