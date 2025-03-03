import React, { useEffect, useState } from 'react'
import MovieCard from '../Movies/MovieCard'
import { options } from '../../api/url'
import axios from 'axios'

function MoviesList() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/top_rated', options).then((res)=>setData(res.data))
    },[])
    console.log(data)
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">🎬 Top Rated Movies</h2>
      <div className="overflow-x-auto whitespace-nowrap py-4">
        {data.results?.map((item) => (
          <div key={item.id} className="inline-block w-56 mr-4">
            <MovieCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesList