import MoviesList from './MoviesList'
import MoviesUpcomingList from './MoviesUpcomingList'
import MoviesNewPlaying from './MoviesNewPlaying'
import Slider from '../header/Slider'
import { useLocation } from 'react-router-dom'

function Main() {
  const location=useLocation();
  return (
    <div >
      <MoviesList/>
      <MoviesUpcomingList/>
      <MoviesNewPlaying/>       
    </div>
  )
}
export default Main