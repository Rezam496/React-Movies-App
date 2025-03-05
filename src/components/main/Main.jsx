import React from 'react'
import MoviesList from './MoviesList'
import MoviesUpcomingList from './MoviesUpcomingList'
import MoviesNewPlaying from './MoviesNewPlaying'



function Main() {
  return (
    <div>
        <MoviesList/>
        <MoviesUpcomingList/>
        <MoviesNewPlaying/>
        
        
    </div>
  )
}

export default Main