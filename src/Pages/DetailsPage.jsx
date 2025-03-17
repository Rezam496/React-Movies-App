import { useLocation } from 'react-router-dom';
import { findId } from '../helper/helper';
import ScrollToTop from '../helper/ScrollToTop';
import MoviesNewPlaying from '../components/main/MoviesNewPlaying';
import { useQuery } from '@tanstack/react-query';
import { fetchDetailsPage } from '../Services/movieslist';
import Loader from '../helper/Loader';

function DetailsPage() {
  const location=useLocation();
  const idCard=findId(location.pathname)
 
  const {data,isLoading}=useQuery({
    queryKey:["details",idCard],
    queryFn:()=>fetchDetailsPage(idCard)
  })
  if(isLoading){
  return <Loader/>
  }
// console.log(data)
  return (
    <div>
      <div className="bg-no-repeat bg-contain bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-4" 
      // style={{
      //   backgroundImage: `
      //   linear-gradient(to bottom, rgba(0, 0, 0, 0), rgrgba(0, 0, 0, 0.471)rgba(0, 0, 0, 1)),
      //   url(https://image.tmdb.org/t/p/w500${data?.data.backdrop_path})`,
      // }}
      >
        <ScrollToTop/>
        <div className=" p-4 mt-20  " >
          <div className="flex flex-col md:flex-row  md:gap-5 bg-opacity-80 p-4 rounded-2xl">
            <img
              src={`https://image.tmdb.org/t/p/w500${data?.data.poster_path}`}
              alt={data?.data.title}
              className="w-full md:w-1/3 rounded-xl"
            />
            <div className="md:ml-4 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold mb-2">{data?.data.title}</h2>
              <div className="mb-4">
                <span className="font-bold"></span> {data?.data.genres.map(genre => genre.name).join(", ")}
              </div>
              <div className="mb-4">
              
                <span className="mr-2 text-2xl text-yellow-300">{`★`}</span>
                {` ${data?.data.vote_average.toFixed(1)}/10  |   `}{data?.data.vote_count}
              </div>
              
              <p className="mb-4">{data?.data.overview}</p>
              <div className="mb-4">
                {data?.data.release_date}
              </div>
              <div className="mb-4">
                <span className="font-bold"> </span> {data?.data.runtime} minets
              </div>
              <div className="mb-4">
                  {data?.data.spoken_languages.map(language => language.name).join(", ")}
              </div>
              <div className="mb-4">
                  {data?.data.production_countries.map(country => country.name).join(", ")}
              </div>
            
            </div>
          </div>
        </div>
        
      </div>
      <MoviesNewPlaying/>
    </div>
  )
}

export default DetailsPage