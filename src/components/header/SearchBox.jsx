import { CiSearch } from "react-icons/ci";
import  { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { findMovies } from "../../Services/search";
import { MagnifyingGlass } from "react-loader-spinner";
import FindMovies from "../Movies/FindMovies";
function SearchBox() {

  const[searchTerm,setSearchTerm]=useState('');

  const{data:movies,isError,isLoading}=useQuery({
    queryKey:["findemovie",searchTerm],
    queryFn:()=>findMovies(searchTerm),
    enabled:searchTerm.length > 0,
  })
  console.log(movies)
  return (
    <section className=" mt-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4 ">
        <div className="relative ">
            <input type="text" 
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              placeholder='Search for a movie,TV Show or celebrity that you ...' 
              className="w-full bg-slate-600 text-xs md:text-2xl p-3 pr-14 border-slate-900 border-4 rounded-md outline-none placeholder:text-slate-400   " />
            <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 md:w-8 md:h-8 bg-slate-600"/>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center">
          {isLoading && (
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#282e53"
              color="#4b4444"
            />
          )}

          {isError && <p className="text-red-500 font-semibold">Error: Something went wrong!</p>}

          <div className="flex gap-4 flex-wrap justify-center items-center w-full max-w-4xl">
            {movies?.data.results.map((movie) => (
              <FindMovies key={movie.id} item={movie} />
            ))}
          </div>
        </div>

    </section>
  )
}

export default SearchBox