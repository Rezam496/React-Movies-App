import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { findId } from '../helper/helper';
import { options } from '../api/url';
import axios from 'axios';
import ScrollToTop from '../helper/ScrollToTop';

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
  return (
    <div>
      <ScrollToTop/>
        <div className=" p-4 mt-20  " >
          <div className="flex flex-col md:flex-row  md:gap-5 bg-opacity-80 p-4 rounded-2xl">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
              alt={movieData?.title}
              className="w-full md:w-1/3 rounded-xl"
            />
            <div className="md:ml-4 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold mb-2">{movieData?.title}</h2>
              <div className="mb-4">
                <span className="font-bold"></span> {movieData?.genres.map(genre => genre.name).join(", ")}
              </div>
              <div className="mb-4">
              
                <span className="mr-2 text-2xl text-yellow-300">{`★`}</span>
                {` ${movieData?.vote_average.toFixed(1)}/10  |   `}{movieData?.vote_count}
              </div>
              
              <p className="mb-4">{movieData?.overview}</p>
              <div className="mb-4">
               {movieData?.release_date}
              </div>
              <div className="mb-4">
                <span className="font-bold"> </span> {movieData?.runtime} minets
              </div>
              <div className="mb-4">
                 {movieData?.spoken_languages.map(language => language.name).join(", ")}
              </div>
              <div className="mb-4">
                 {movieData?.production_countries.map(country => country.name).join(", ")}
              </div>
            
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default DetailsPage